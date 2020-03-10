$('.btn-menu').click(function(){
        $('.menu-default').toggleClass('menu-after')
        setTimeout('')
        $('.info-user').toggleClass('info-after')
    })
   function O(obj){
       return typeof obj=='object'?obj:document.getElementById(obj)
   }
