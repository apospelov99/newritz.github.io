$(function() {
  //vacancy collapse
  $('.vacancy_click').on("click", function() {
    $(this).toggleClass('vacancy_click-active');
    $(this).closest('.vacancy_item-top').next('.vacancy_specification').toggle();
	});
  //vacancy collapse END
  
  //media screen js
  /*
  enquire
    .register("(min-width: 1024px) and (max-width: 1279px)", {
        match : function() {
          alert("1024");
          $(".projects_gallery").slick(settingProjectGallery2);
        },
        unmatch : function() {
          $(".projects_gallery").slick('unslick');
      }
    })
    .register("(min-width: 768px) and (max-width: 1023px)", {
        match : function() {
          alert("768");
          $(".projects_gallery").slick(settingProjectGallery2);
        },
        unmatch : function() {
          $(".projects_gallery").slick('unslick');
      }
    })
    .register("screen and (max-width: 767px)", {
        match : function() {
          alert("320");
          $(".projects_gallery").slick(settingProjectGallery);
        },
        unmatch : function() {
          $(".projects_gallery").slick('unslick');
      }
    });

    var settingProjectGallery = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    var settingProjectGallery2 = {
        infinite: true,
        rows: 3,
        slidesToScroll: 1,
        slidesPerRow: 1,
      }
      */
  //media screen js END
    




  //products
  $('.products_btn').on("click", function() {
    $('.products_btn').removeClass('products_btn-active');
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
  
  ///productcard
    $('.productcard_pills').on("click", function() {
      $('.productcard_pills').removeClass('productcard_pills-active');
      var productFilter = $(this).attr('data-filter');   
      
      $('.filter').not('.' + productFilter).addClass('filter_noactive');
      
      if (window.matchMedia('(min-width: 768px)').matches){
        $('.filter').filter('.' + productFilter).removeClass('filter_noactive');
      } else {
        $(this).after($('.filter'));
        if ($('.filter').filter('.' + productFilter).is(':visible')) {
          $(this).removeClass('productcard_pills-active');
          $('.filter').filter('.' + productFilter).addClass('filter_noactive');
        } else {
          $('.filter').filter('.' + productFilter).removeClass('filter_noactive');
          $(this).addClass('productcard_pills-active');  
        }
      }
    });
  ///productcard END
  ///servicedetails
    $('.servicedetails_pills').on("click", function() {
      $('.servicedetails_pills').removeClass('servicedetails_pills-active');
      var productFilter = $(this).attr('data-filter');   
      
      $('.filter').not('.' + productFilter).addClass('filter_noactive');
      
      if (window.matchMedia('(min-width: 768px)').matches){
        $('.filter').filter('.' + productFilter).removeClass('filter_noactive');
      } else {
        $(this).after($('.filter'));
        if ($('.filter').filter('.' + productFilter).is(':visible')) {
          $(this).removeClass('servicedetails_pills-active');
          $('.filter').filter('.' + productFilter).addClass('filter_noactive');
        } else {
          $('.filter').filter('.' + productFilter).removeClass('filter_noactive');
          $(this).addClass('servicedetails_pills-active');  
        }
      }
    });
  ///servicedetails END

  // equal column height
  $(".direction_thumbnail").matchHeight();
  $(".gallery_col").matchHeight();
  $(".project_thumbnail").matchHeight();
  $(".project_thumbnail .gallery_title").matchHeight();
  $(".project_thumbnail .clientcards_gallery").matchHeight();
  $(".offer_col .offer_text").matchHeight();
  $(".thumbnail_wrap").matchHeight();
  $(".presspage_thumbnail").matchHeight();
  $(".footer .footer_col").matchHeight();
  $(".presscenter .press_testslider").matchHeight();
  // equal column height END 
  
  //slider press_list
  $(".press_list").slick({
    infinite: true,
    rows: 3,
    //slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
    nextArrow: '.control_next-presscenter',
    prevArrow: '.control_prev-presscenter',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          slidesToScroll: 1,
        }
      }, 
    ]  
  });
  //slider press_list END

  //slider slider_executives
  $('.slider_executives').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.control_next-executives',
    prevArrow: '.control_prev-executives',
    responsive: [
      {
        breakpoint: 768,
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }, 
    ]  
  });
  //slider projects_gallery-company END
  //slider slider_patents
  $(".slider_patents").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.control_next-patents',
    prevArrow: '.control_prev-patents',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }, 
    ]  
  });
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
  $(".slider_worker").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: '.control_next-worker',
    prevArrow: '.control_prev-worker',
    adaptiveHeight: true  
  });
  //slider slider_worker END

  $(".projectdetails_slider").slick({
    rows: 1,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.control_next-projectdetails',
    prevArrow: '.control_prev-projectdetails',
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          row: 1,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, 
      {
        breakpoint: 768,
        settings: {
          row: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      } 
    ]  
  });





});
