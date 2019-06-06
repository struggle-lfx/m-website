//解构赋值
const {src,dest,series,parallel,watch} = require('gulp')  //series串行   parallel并行
const webpackStream = require('webpack-stream')
//引入路径解析
const path = require('path') 
//sass编译需要的
const gulpSass = require('gulp-sass')
const rev = require('gulp-rev')
const revCollector = require('gulp-rev-collector')
const cleanCSS =  require('gulp-clean-css')

//拷贝  index.html 到dist根目录下
function copyhtml(){
    return src('./*.html')
    .pipe(dest('./dist/'))
}


function copylibs(){
  return src('./src/libs/**/*')
  .pipe(dest('./dist/libs'))
}

function copyimgs(){
  return src('./src/imgs/**/*')
  .pipe(dest('./dist/imgs'))
}

function copyicons(){
  return src('./src/icons/**/*')
  .pipe(dest('./dist/icons'))
}



//模块化打包
function packjs(){
    return src('./src/**/*')
    .pipe(webpackStream({
        mode:'production',  //开发环境
        entry:{
            app:'./src/app.js'   //文件入口
        },
        output:{
            //filename:'name.js'   也可以写死
            filename:'[name].js',   //[name]=app
            path:path.resolve(__dirname,'/dev') //获取绝对路径，使用path包解析
          }, 
            module: {
                rules: [
                    //打包js
                  {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                      }
                    }
                  },
                  {
                      test:/\.html$/,
                      loader:'string-loader'
                  }
                ]
              }
    }))
    .pipe(rev())    //添加版本号
    .pipe(dest('./dist/scripts'))
    .pipe(rev.manifest())    //生成版本号的映射
    .pipe(dest('./rev/scripts'))
}

//编译css
function packCSS(){
    return src('./src/styles/app.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rev())
    .pipe(dest('./dist/styles'))
    .pipe(rev.manifest())
    .pipe(dest('./rev/styles'))
}


//帮助做名字的更新  根据映射把dist目录下的index.html中引入的文件加上版本号后缀
function revcall(){
  return src(['./rev/**/*.json','./dist/*.html'])
  .pipe(revCollector())
  .pipe(dest('./dist'))
}





//commonjs规范的default可以直接运行
exports.default = series(parallel(packjs,packCSS,copylibs,copyimgs,copyicons),copyhtml,revcall)