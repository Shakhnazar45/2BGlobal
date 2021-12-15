$(window).scroll(function(){
    if($(window).scrollTop()){
        $('header').addClass('scroll');
    }
    else{
        $('header').removeClass('scroll');
    }
});
$( document ).ready(function() {
    
    // const btns = document.querySelectorAll('.link')
    // btns.forEach((item, index)=> {
    //     item.addEventListener('click', ()=>{
    //         item.classList.add('active')
            
    //     })
    // })
    $('header .list .link .a').click(function(e){

        $('header .list .link a').removeClass('active');
        $(this).addClass('active');
    });
    $('header .sub-list .sub-link .a').click(function(e){

        $('header .sub-list .sub-link a').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function(){
    var main = function(){
        $('header .open__btn').click(function(){
            $('header .menu').addClass('open');
            $('header .open').animate({
                    top: '0px'
                }, 600);
                $('body').animate({
                    top: '350px'
                }, 600);
        });
        $('header .menu .close__btn').click(function(){
            $('header .menu').animate({
                top: '-350px'
            }, 600);
            $('body').animate({
                top: '0'
            }, 600);
            $('header .menu').removeClass('open');
        });
        $('header .menu .a').click(function(){
            $('header .menu').animate({
                top: '-350px'
            }, 600);
            $('body').animate({
                top: '0'
            }, 600);
            $('header .menu').removeClass('open');
        });
        
    };
    $(document).ready(main);
});
$(function(){
    $('.rev-slider').slick({
        infinite: true,
        slidesToShow: 1,
        SlidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 8000,
        centerMode: true,
        centerPadding: '-160px',
        Speed: 5000,
    });
});

$(document).ready(function(){
    if($(window).width() < 769){
        $('.rev_slider').slick({
            infinite: true,
            slidesToShow: 1,
            SlidesToScroll: 1,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '120px',
            Speed: 5000,
            responsive:[{
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '70px',
                }
            }]
        });
    }
});

$(document).ready(function(){
    $('.main .container .main__content button').click(function(){
        $('.popup').addClass('show');
    });
    $('.popup .Close').click(function(){
        $('.popup').removeClass('show');
    });
});

$(function(){
    $('.rev__slider').slick({
        infinite: true,
        slidesToShow: 1,
        SlidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 8000,
        centerMode: true,
        centerPadding: '-160px',
        Speed: 5000,
        responsive: [{
            breakpoint: 768,
            settings:{
                arrows: false,
            }
        }]
    });
});