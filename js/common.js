$(function() {
  //vacancy collapse
  $('.vacancy_click').on("click", function() {
    $(this).toggleClass('vacancy_click-active');
    $(this).closest('.vacancy_item-top').next('.vacancy_specification').toggle();
    //$(this).closest('.vacancy_item').find('.vacancy_specification').toggle();
	});
  //vacancy collapse END
  
  //products
    $('.products_btn').on("click", function() {
      $('.products_btn').removeClass('products_btn-active');
      //$(this).toggleClass('products_btn-active');
      var productFilter = $(this).attr('data-filter');   
      
      $('.filter').not('.' + productFilter).hide('3000');
      
      if (window.matchMedia('(min-width: 768px)').matches){
        $('.filter').filter('.' + productFilter).show('1000');
      } else {
        $(this).after($('.filter'));
        if ($('.filter').filter('.' + productFilter).is(':visible')) {
          $(this).removeClass('products_btn-active');
          $('.filter').filter('.' + productFilter).hide('1000');
        } else {
          $('.filter').filter('.' + productFilter).show('1000');
          $(this).addClass('products_btn-active');  
        }
      }
    });
  //products END

  //alert("Hello");
  // equal height
  $(".direction_thumbnail").matchHeight();
  $(".gallery_col").matchHeight();
  $(".project_thumbnail").matchHeight();
  $(".project_thumbnail .gallery_title").matchHeight();
  $(".project_thumbnail .clientcards_gallery").matchHeight();
  $(".offer_col .offer_text").matchHeight();
  $(".thumbnail_wrap").matchHeight();
  $(".presspage_thumbnail").matchHeight();
  $(".presspage_thumbnail .presspage_textwrap").matchHeight();
  //$(".press-col").matchHeight();
  //$(".contacts_text-col").matchHeight();
  // equal height END
  
  
  //$.each(".project_thumbnail",".project_thumbnail .gallery_title").matchHeight();
  //alert("sos");
  //slider bxslider
  /*
  $('.bxslider').bxSlider({
    minSlides: 3,
    maxSlides: 3,
    slideWidth: 390,
    nextSelector: '.slider-next',
    prevSelector: '.slider-prev',
    nextText: 'Onward →',
    prevText: '← Go back',
  });*/
  //slider bxslider END
  //slider owl-carousel
  /*
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 4,
    loop: true,
    nav: true,
    dots: false,
  });*/
  //slider owl-carousel END
  //slider press_list
  /*
  $('.press_list').slick({
    infinite: true,
    rows: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
    nav: true,
    nextArrow: '.arrow_left-presscenter',
    prevArrow: '.arrow_right-presscenter',
    responsive: [
      {
        breakpoint: 1279,
        settings: unslick
      },
    ]
  });
  */
  //slider press_list END

//test slider
/*
$('.press_list').slick({
  //slidesPerRow: 3,
  //rows: 1,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1479,
    settings: {
      slidesPerRow: 1,
      rows: 2,
    }
  },
  {
    breakpoint: 1279,
    settings: {
      slidesPerRow: 1,
      rows: 1,
    }
  }
]
});
//test slider END
*/




  //slider slider_executives
  /*
  $('.slider_executives').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.control_next-executives',
    prevArrow: '.control_prev-executives',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  */
  //slider slider_executives END
  //slider projects_gallery-company
  /*
  $(".projects_gallery-company").slick({
    rows: 2,
    infinite: true,
    //slidesToShow: 3,
    slidesPerRow: 3,
    slidesToScroll: 1,
    nextArrow: '.control_next-projects',
    prevArrow: '.control_prev-projects',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          row: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      } 
    ]  
  });
  */

  /*
  $(window).resize(function(){
    if($(window).width() < 1279) {
      $(".projects_gallery-company").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '.control_next-projects',
        prevArrow: '.control_prev-projects',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]  
        });
      } else {
        $(".projects_gallery-company").unslick();
      }
    });*/
    //slider projects_gallery-company END
    //slider slider_patents
    /*
    $(".slider_patents").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '.control_next-patents',
      prevArrow: '.control_prev-patents',  
    });
    */
    //slider slider_patents END
    //slider slider_response
    /*
    $(".slider_response").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.response_img-wrap',
    nextArrow: '.control_next-response',
    prevArrow: '.control_prev-response',  
  });
  */
  //slider slider_response END
  //slider response_img-wrap
  /*
  $(".response_img-wrap").slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider_response'
  });
  */
  //slider response_img-wrap END
  //slider slider_worker
  /*
  $(".slider_worker").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //fade: true,
    nextArrow: '.control_next-worker',
    prevArrow: '.control_prev-worker',  
  });
  */
  //slider slider_worker END






});
