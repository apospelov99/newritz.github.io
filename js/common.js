$(function() {

//GLOBAL VARABLES ANS FUNCTION
  // company / history timeline
  function controlTimelineNext(control) {
    $(control).on('click', function(){
      //var periodEnd = $('.timeline_text-wrap .slick-current').prev().find('.timeline_text').data('date');
      var periodEnd = $('.timeline_text-wrap .slick-current').find('.timeline_text').data('date');
      var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
      $('.timeline_period .period_end').text(periodEnd);
      $('.timeline_period .period_start').text(periodStart);
    });
  };
  
  function controlTimelinePrev(control) {
    $(control).on('click', function(){
      var periodEnd = $('.timeline_text-wrap .slick-current').next().find('.timeline_text').data('date');
      var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
      $('.timeline_period .period_end').text(periodEnd);
      $('.timeline_period .period_start').text(periodStart);
    }); 
  };
  
  var sliderTimelineList = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: '.control_prev-timeline',
    prevArrow: '.control_next-timeline',
    responsive: [
      {
        breakpoint: 1023,
        settings: "unslick"
      }
    ] 
  };
  var sliderTimelineTextWrap = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.control_prev-timeline',
    prevArrow: '.control_next-timeline'
  };

  function historyTimeline(){
    $('.history_timeline-li').on('click', function(){
      $('.history_timeline-li').removeClass('timeline_selected timeline_active timeline_active-prev');
      $(this).addClass('timeline_active');
      $(this).prevAll('.history_timeline-li').addClass('timeline_selected');
      $(this).prev('.history_timeline-li').addClass('timeline_active-prev');

      var timelineDate = $(this).data('date');
      $('.timeline_text').removeClass('timeline_text-active');
      $('.timeline_text[data-date="'+ timelineDate +'"]').addClass('timeline_text-active');

      var periodEnd = $('.timeline_text-active').data('date');
      var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
      $('.timeline_period .period_end').text(periodEnd);
      $('.timeline_period .period_start').text(periodStart);
    });
  };
  // company / history timeline END
  //index /slider press_list
  var sliderPressMainWrap = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.press_list',
    nextArrow: '.control_next-presscenter',
    prevArrow: '.control_prev-presscenter',
  };
  var sliderPressList = {
    infinite: true,
    rows: 3,
    //slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick" 
      }, 
    ]  
  };
  var sliderPressListMobile = {
    infinite: true,
    rows: 1,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: "unslick"
      }, 
    ]  
  };
  //index /slider press_list END
  //index /slider projects
  var settingProjectGallery = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.control_next-mainprojects',
    prevArrow: '.control_prev-mainprojects',
  };
  //index /slider projects END
//GLOBAL VARABLES ANS FUNCTION END
// START function for all media screen
  //history timeline
  historyTimeline();
  $('.timeline_list').slick(sliderTimelineList);
  //history timeline END
  //index press list slider 
  $(".press_main-wrap").slick(sliderPressMainWrap);
  $(".press_list").slick(sliderPressList);
  //index press list slider END breakpoint(unslick) include in 1279
  //vacancy collapse
  $('.vacancy_click').on("click", function() {
    $(this).toggleClass('vacancy_click-active');
    $(this).closest('.vacancy_item-top').next('.vacancy_specification').toggle();
	});
  //vacancy collapse END
  //company response/ fancybox
  $().fancybox({
		selector : '[data-fancybox="images"]',
		thumbs   : false,
    hash     : false,
	});
  //company response/ fancybox END
// START function for all media screen END
//MEDIA SCREEN JS 
  enquire
  .register("screen and (min-width: 1280px)", {
    match : function() {
      //alert("1024");
    },
    unmatch : function() {
    }
  })
  .register("screen and (min-width: 1024px) and (max-width: 1279px)", {
    match : function() {
      //alert("1024");
    },
    unmatch : function() {
    }
  })
  .register("screen and (min-width: 768px) and (max-width: 1023px)", {
    match : function() {
      //alert("768");
      //company history timeline
      $('.timeline_text-wrap').slick(sliderTimelineTextWrap);
      controlTimelinePrev('.control_prev-timeline');
      controlTimelineNext('.control_next-timeline');
      $('.timeline_contorl-mobile').before($('.timeline_period'));
      $('.control_next-timeline').prependTo($('.timeline_contorl-mobile'));
      //company history timeline END
      //index press list slider
      $(".press_list").slick(sliderPressListMobile);
      //index press list slider
    },
    unmatch : function() {
      //index press list slider
      $(".press_list").slick('unslick');
      //index press list slider
    }
  })
  .register("screen and (max-width: 767px)", {
    match : function() {
      //alert("320");
      //company history timeline
      $('.timeline_text-wrap').slick(sliderTimelineTextWrap);
      controlTimelinePrev('.control_prev-timeline');
      controlTimelineNext('.control_next-timeline');
      $('.timeline_contorl-mobile').before($('.timeline_period'));
      $('.control_next-timeline').prependTo($('.timeline_contorl-mobile'));
      //company history timeline END
      //index presscenter control
      $('.slider_control-presscenter').appendTo($('.presscenter_body'));
      //index presscenter control END
      $(".projects_gallery").slick(settingProjectGallery);
      //company
        //company slider control patents
      $(".company .slider_control-projects").appendTo($(".projects_block"));
        //company slider control patents END
        //company slider control patents
      $(".company .slider_control-patents").appendTo($(".patents_block"));
        //company slider control patents END
      //company END

    },
    unmatch : function() {
      $(".projects_gallery").slick('unslick');
    }
  });
//MEDIA SCREEN JS END
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
  $(".presspage_thumbnail .presspage_textwrap").matchHeight();
  $(".footer .footer_col").matchHeight();
  $(".presscenter .press_testslider").matchHeight();
  $(".aboutcompany_col").matchHeight();
  // equal column height END 
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
  $(".slider_response").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.response_img-wrap',
    nextArrow: '.control_next-response',
    prevArrow: '.control_prev-response',  
  });
    //slider response_img-wrap
  $(".response_img-wrap").slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider_response'
  });
    //slider response_img-wrap END
  //slider slider_response END
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
