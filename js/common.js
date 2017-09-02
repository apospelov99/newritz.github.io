$(function() {
  //vacancy collapse
  $('.vacancy_click').on("click", function() {
    $(this).toggleClass('orangelight');
		$(this).closest('.vacancy_item').find('#demo')
	})
  //vacancy collapse END
  //alert("Hello");
  // equal height
  $(".direction_thumbnail").matchHeight();
  $(".gallery_col").matchHeight();
  $(".project_thumbnail").matchHeight();
  $(".project_thumbnail .gallery_title").matchHeight();
  $(".project_thumbnail .clientcards_gallery").matchHeight();
  $(".offer_col .offer_text").matchHeight();
  $(".thumbnail_wrap").matchHeight();
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

  //slider slider_executives
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
  //slider slider_executives END
  //slider projects_gallery-company
  $(".projects_gallery-company").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.control_next-projects',
    prevArrow: '.control_prev-projects',  
  });
  //slider projects_gallery-company END
  //slider projects_gallery-company
  $(".slider_patents").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.control_next-patents',
    prevArrow: '.control_prev-patents',  
  });
  //slider projects_gallery-company END
  //slider projects_gallery-company
  $(".slider_response").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.response_img-wrap',
    nextArrow: '.control_next-response',
    prevArrow: '.control_prev-response',  
  });
  //slider projects_gallery-company END
  //slider projects_gallery-company
  $(".response_img-wrap").slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider_response'
  });
  //slider projects_gallery-company END
  //slider projects_gallery-company
  
  $(".slider_worker").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //fade: true,
    nextArrow: '.control_next-worker',
    prevArrow: '.control_prev-worker',  
  });
  //slider projects_gallery-company END






});
