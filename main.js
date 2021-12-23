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
$(document).ready(function(){
    var port = function(){
        $('.portfolio .img1 img').click(function(){
            $('.portfolio .img1 .img__text').addClass('Opened');
            $('.portfolio .img2 .img__text').removeClass('Opened');
            $('.portfolio .img3 .img__text').removeClass('Opened');
            $('.portfolio .img4 .img__text').removeClass('Opened');
            $('.portfolio .img5 .img__text').removeClass('Opened');
            $('.portfolio .img6 .img__text').removeClass('Opened');
            $('.portfolio .img7 .img__text').removeClass('Opened');
            $('.portfolio .img8 .img__text').removeClass('Opened');
            $('.portfolio .img9 .img__text').removeClass('Opened');
        });
        $('.portfolio .img2 img').click(function(){
            $('.portfolio .img2 .img__text').addClass('Opened');
            $('.portfolio .img1 .img__text').removeClass('Opened');
            $('.portfolio .img3 .img__text').removeClass('Opened');
            $('.portfolio .img4 .img__text').removeClass('Opened');
            $('.portfolio .img5 .img__text').removeClass('Opened');
            $('.portfolio .img6 .img__text').removeClass('Opened');
            $('.portfolio .img7 .img__text').removeClass('Opened');
            $('.portfolio .img8 .img__text').removeClass('Opened');
            $('.portfolio .img9 .img__text').removeClass('Opened');
        });
        $('.portfolio .img3 img').click(function(){
            $('.portfolio .img3 .img__text').addClass('Opened');
            $('.portfolio .img2 .img__text').removeClass('Opened');
            $('.portfolio .img1 .img__text').removeClass('Opened');
            $('.portfolio .img4 .img__text').removeClass('Opened');
            $('.portfolio .img5 .img__text').removeClass('Opened');
            $('.portfolio .img6 .img__text').removeClass('Opened');
            $('.portfolio .img7 .img__text').removeClass('Opened');
            $('.portfolio .img8 .img__text').removeClass('Opened');
            $('.portfolio .img9 .img__text').removeClass('Opened');
        });
        $('.portfolio .img4 img').click(function(){
            $('.portfolio .img4 .img__text').addClass('Opened');
            $('.portfolio .img2 .img__text').removeClass('Opened');
            $('.portfolio .img3 .img__text').removeClass('Opened');
            $('.portfolio .img1 .img__text').removeClass('Opened');
            $('.portfolio .img5 .img__text').removeClass('Opened');
            $('.portfolio .img6 .img__text').removeClass('Opened');
            $('.portfolio .img7 .img__text').removeClass('Opened');
            $('.portfolio .img8 .img__text').removeClass('Opened');
            $('.portfolio .img9 .img__text').removeClass('Opened');
        });
        $('.portfolio .img5 img').click(function(){
            $('.portfolio .img5 .img__text').addClass('Opened');
            $('.portfolio .img2 .img__text').removeClass('Opened');
            $('.portfolio .img3 .img__text').removeClass('Opened');
            $('.portfolio .img4 .img__text').removeClass('Opened');
            $('.portfolio .img1 .img__text').removeClass('Opened');
            $('.portfolio .img6 .img__text').removeClass('Opened');
            $('.portfolio .img7 .img__text').removeClass('Opened');
            $('.portfolio .img8 .img__text').removeClass('Opened');
            $('.portfolio .img9 .img__text').removeClass('Opened');
        });
        $('.portfolio .img6 img').click(function(){
            $('.portfolio .img6 .img__text').addClass('Opened');
            $('.portfolio .img2 .img__text').removeClass('Opened');
            $('.portfolio .img3 .img__text').removeClass('Opened');
            $('.portfolio .img4 .img__text').removeClass('Opened');
            $('.portfolio .img5 .img__text').removeClass('Opened');
            $('.portfolio .img1 .img__text').removeClass('Opened');
            $('.portfolio .img7 .img__text').removeClass('Opened');
            $('.portfolio .img8 .img__text').removeClass('Opened');
            $('.portfolio .img9 .img__text').removeClass('Opened');
        });
        $('.portfolio .img7 img').click(function(){
            $('.portfolio .img7 .img__text').addClass('Opened');
            $('.portfolio .img2 .img__text').removeClass('Opened');
            $('.portfolio .img3 .img__text').removeClass('Opened');
            $('.portfolio .img4 .img__text').removeClass('Opened');
            $('.portfolio .img5 .img__text').removeClass('Opened');
            $('.portfolio .img6 .img__text').removeClass('Opened');
            $('.portfolio .img1 .img__text').removeClass('Opened');
            $('.portfolio .img8 .img__text').removeClass('Opened');
            $('.portfolio .img9 .img__text').removeClass('Opened');
        });
        $('.portfolio .img8 img').click(function(){
            $('.portfolio .img8 .img__text').addClass('Opened');
            $('.portfolio .img2 .img__text').removeClass('Opened');
            $('.portfolio .img3 .img__text').removeClass('Opened');
            $('.portfolio .img4 .img__text').removeClass('Opened');
            $('.portfolio .img5 .img__text').removeClass('Opened');
            $('.portfolio .img6 .img__text').removeClass('Opened');
            $('.portfolio .img7 .img__text').removeClass('Opened');
            $('.portfolio .img1 .img__text').removeClass('Opened');
            $('.portfolio .img9 .img__text').removeClass('Opened');
        });
        $('.portfolio .img9 img').click(function(){
            $('.portfolio .img9 .img__text').addClass('Opened');
            $('.portfolio .img2 .img__text').removeClass('Opened');
            $('.portfolio .img3 .img__text').removeClass('Opened');
            $('.portfolio .img4 .img__text').removeClass('Opened');
            $('.portfolio .img5 .img__text').removeClass('Opened');
            $('.portfolio .img6 .img__text').removeClass('Opened');
            $('.portfolio .img7 .img__text').removeClass('Opened');
            $('.portfolio .img8 .img__text').removeClass('Opened');
            $('.portfolio .img1 .img__text').removeClass('Opened');
        });
        $('.portfolio .img__text .img__btn').click(function(){
            $('.portfolio .img__text').removeClass('Opened')
        });
    };
    $(document).ready(port)
});
$(function(){
    $('.rev-slider').slick({
        infinite: true,
        slidesToShow: 1,
        SlidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 8000,
        centerMode: true,
        centerPadding: '-20px',
        Speed: 5000,
    });
});



$(document).ready(function(){
    $('.main .container .main__content button').click(function(){
        $('.popup').addClass('show');
    });
    $('.portfolio .container .portfolio__content .img__block .img__btn').click(function(){
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
        },]
    });
});