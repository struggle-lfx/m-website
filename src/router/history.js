
const history = {
    rendereView(){
        let state = history.state;
        switch(){

        }
    },
    init(){
        $('nav a').on('click',function(e){
            e.preventDefault();//阻止a链接的默认事件
            let path = $(this).attr('href')
            history.pushState({path},null,path)
        })
        window.addEventListener('load',this.rendereView)
        window.addEventListener('popstate',this.rendereView)   //只有点击前进后退按钮 history.go等方法才会触发
    }
 
} 


