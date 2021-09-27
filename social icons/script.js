$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addclass("sticky");
        }else{
            $('.navbar').removeclass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addclass("show");
        }else{
            $('.scroll-up-btn').removeclass("show");
        }
    });

     //owl carousel script

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverpasue: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });

    //toggle menu/navbar script
    $('.menubtn').click(function(){
        $('.navbar .menu').toggleclass(".active");
    });
});