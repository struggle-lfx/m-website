// const gulp = require("gulp")
// const webserver = require("gulp-webserver")

// //拷贝  index.html 到dev根目录下
// //任务的回调一定要有返回值，返回值全部都是 异步操作
// //如果不返回值，需要调用callback


// gulp.task('copyhtml',()=>{
//     gulp.src('./index.html')
//     .pipe(gulp.dest('./dev/'))
// })


// gulp.task("webserver",()=>{
//     return gulp.src('./dev')
//     .pipe(webserver({
//         port:8000,
//         livereload:true
//     }))
// })

// gulp.task('default',gulp.series('copyhtml'))


//解构赋值
const { src, dest, series, parallel, watch } = require('gulp')  //series串行   parallel并行

const webserver = require('gulp-webserver')
const webpackStream = require('webpack-stream')   //commonjs 静态模块打包器
//引入路径解析
const path = require('path')
//sass编译需要的
const gulpSass = require('gulp-sass')

const proxy = require('http-proxy-middleware')   //代理

const del = require('del')


//拷贝  index.html 到dev根目录下
function copyhtml() {
    return src('./*.html')
        .pipe(dest('./dev'))
}

function copylibs() {
    return src('./src/libs/**/*')
        .pipe(dest('./dev/libs'))
}

function copyimgs() {
    return src('./src/imgs/**/*')
        .pipe(dest('./dev/imgs'))
}

function copyicons() {
    return src('./src/icons/**/*')
        .pipe(dest('./dev/icons'))
}


//模块化打包
function packjs() {
    return src('./src/**/*')
        .pipe(webpackStream({
            mode: 'development',  //开发环境
            entry: {
                app: './src/app.js'   //文件入口
            },
            output: {
                //filename:'name.js'   也可以写死
                filename: '[name].js',   //[name]=app
                path: path.resolve(__dirname, './dev')//__dirname获取绝对路径，使用path包解析
            },
            module: {
                rules: [
                    //将ES6-ES8代码转换成ES5
                    {
                        test: /\.js$/,    //标识出应该被对应的loader进行转换的某个或某些文件
                        exclude: /node_modules/,
                        use: {   //进行转换时 需要使用哪个loader
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],   //允许使用最新的JavaScript
                                plugins: ['@babel/plugin-transform-runtime']   
                            }
                        }
                    },
                    {
                        test: /\.html$/,
                        loader: 'string-loader'
                    }
                ]
            }
        }))
        .pipe(dest('./dev/scripts'))
}

//编译css
function packCSS() {
    return src('./src/styles/app.scss')
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(dest('./dev/styles'))
  }


function clear(target) {
    return function () {
        return del(target)   //删除目标文件
    }
}

//启动服务器
function gulpWebserver() {
    return src('./dev')
        .pipe(webserver({
            port: 8000,
            livereload: true,
            middleware: [
                proxy('/api', {
                    target: 'https://m.lagou.com',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                })
            ]

        }))
}


function watcher() {
    watch('./src/styles/**/*', series(packCSS))
    watch(['./src/**/*', '!./src/libs/**/*', '!./src/styles/**/*','!./src/icons/**/*','!./src/imgs/**/*'], series(packjs)) //!表示除去
    watch('./src/libs/**/*', series(clear('./dev/libs'),copylibs))
    watch('./src/imgs/**/*', series(clear('./dev/imgs'), copyimgs))
    watch('./src/icons/**/*', series(clear('./dev/icons'), copyicons))
    watch('./*.html', series(clear('./dev/*.html'), copyhtml))
}
//commonjs规范的default可以直接运行
//exports.  将任务暴露出去，外部就可以访问
exports.default = series(parallel(packjs, packCSS, copylibs, copyimgs, copyicons), copyhtml, gulpWebserver, watcher)