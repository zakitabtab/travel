var main = document.querySelector('main');


onscroll = function(){
    if(scrollY > 127){
        main.style.paddingRight = '70px';
    }
}