$('.btn-menu').click(function(){
        $('.menu-default').toggleClass('menu-after')
        $('.article').toggleClass('article-after')
    })
   function O(obj){
       return typeof obj=='object'?obj:document.getElementById(obj)
   }
