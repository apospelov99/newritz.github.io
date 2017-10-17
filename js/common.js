$(function() {

//GLOBAL VARABLES ANS FUNCTION
  // company / history timeline
  function controlTimelineNext(control) {
    $(control).addClass('controlTimelineNext-active');
    $(control).on('click', function(){
      //var periodEnd = $('.timeline_text-wrap .slick-current').prev().find('.timeline_text').data('date');
      var periodEnd = $('.timeline_text-wrap .slick-current').find('.timeline_text').data('date');
      var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
      $('.timeline_period .period_end').text(periodEnd);
      $('.timeline_period .period_start').text(periodStart);
    });
  };

  function controlTimelineNextOff(control) {
    $(control).removeClass('controlTimelineNext-active');
    $(control).off('click');
  };
  
  function controlTimelinePrev(control) {
    $(control).addClass('controlTimelinePrev-active');
    $(control).on('click', function(){
      var periodEnd = $('.timeline_text-wrap .slick-current').next().find('.timeline_text').data('date');
      var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
      $('.timeline_period .period_end').text(periodEnd);
      $('.timeline_period .period_start').text(periodStart);
    }); 
  };
  
  function controlTimelinePrevOff(control) {
    $(control).removeClass('controlTimelinePrev-active');
    $(control).off('click'); 
  };

  
  var sliderTimelineList = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: '.control_prev-timeline',
    prevArrow: '.control_next-timeline',
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

  function historyTimelineOff(){
    $('.history_timeline-li').off('click');
  };
  // company / history timeline END
  // Tabs and Pills function (productcards and servicedetails)
  function tabsPillsCollapseOff(pills, pillsContent){
    var activePills = pills;
    var pillsContainer = pillsContent;
    $(activePills).off("click");
    $('.filter').appendTo(pillsContainer);
  };   

  function btnCollapse(button){
    var activeButton = button;
    $(activeButton).on("click", function() {      
      $(activeButton).removeClass(activeButton.slice(1) + '-active');
      var productFilter = $(this).attr('data-filter');
      $('.filter').not('.' + productFilter).hide('3000');
      $('.filter').filter('.' + productFilter).show('1000');
      $(this).addClass(activeButton.slice(1) + '-active');  
    });
  };

  function btnCollapseOff(button){
    var activeButton = button;
    $(activeButton).off("click");
  };

  function pillsCollapse(pills){
    var activePills = pills;
    $(activePills).on("click", function() {      
      $(activePills).removeClass(activePills.slice(1) + '-active');
      var productFilter = $(this).attr('data-filter');
      $('.filter').not('.' + productFilter).hide('3000');
      $(this).after($('.filter'));
      if ($('.filter').filter('.' + productFilter).is(':visible')) {
        $(this).removeClass(activePills.slice(1) + '-active');
        $('.filter').filter('.' + productFilter).hide('1000');
      } else {
        $('.filter').filter('.' + productFilter).show('1000');
        $(this).addClass(activePills.slice(1) + '-active');  
      }
    });
  };

  function pillsCollapseOff(pills, pillsContent){
    var activePills = pills;
    var pillsContainer = pillsContent;
    $(activePills).off("click");
    $('.filter').appendTo(pillsContainer);
  };

  function tabsCollapse(tabs){
    var activeTabs = tabs;
    $(activeTabs).on("click", function() {
      $('.filter').removeClass('filter_active');
      $(activeTabs).removeClass(activeTabs.slice(1) + '-active');
      var productFilter = $(this).attr('data-filter');   
      $('.filter').not('.' + productFilter).addClass('filter_noactive');
      $('.filter').filter('.' + productFilter).removeClass('filter_noactive').addClass('filter_active');
      $(this).addClass(activeTabs.slice(1) + '-active');
    });
  };
  
  function tabsCollapseOff(tabs){
    var activeTabs = tabs;
    $(activeTabs).off("click");
  };

  function tabsPillsCollapse(pills){
    var activePills = pills;
    $(activePills).on("click", function(){
      $(activePills).removeClass(activePills.slice(1) + '-active');
      var productFilter = $(this).attr('data-filter');
      $('.filter').not('.' + productFilter).addClass('filter_noactive');
      $(this).after($('.filter'));
      if ($('.filter').filter('.' + productFilter).is(':visible')) {
        $(this).removeClass(activePills.slice(1) + '-active');
        $('.filter').filter('.' + productFilter).addClass('filter_noactive');
      } else {
        $('.filter').filter('.' + productFilter).removeClass('filter_noactive');
        $(this).addClass(activePills.slice(1) + '-active');  
      }
    });
  };
  // Tabs and Pills function (productcards and servicedetails) END
  //productcard /productcard_link smooth scroll
  $('.productcard_link').on('click', function(event) {
    var linkTarget = $(".productcard_pills[data-filter='worktype_lathe']");
    var hash = this.hash;
    if (linkTarget.hasClass('productcard_pills-active')) {
      $('html, body').animate({ scrollTop: $(hash).offset().top}, 1000, function(){
        window.location.hash = hash;
      });
    } else {
      linkTarget.click();
      $('html, body').animate({ scrollTop: $(hash).offset().top}, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
  //productcard /productcard_link smooth scroll END
  //index /slider projects
  var settingProjectGallery = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.control_next-mainprojects',
    prevArrow: '.control_prev-mainprojects',
    autoplay: true,
    autoplaySpeed: 5000,
  };
  //index /slider projects END
  //company /slider_executives
  var sliderExecutives = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.control_next-executives',
    prevArrow: '.control_prev-executives',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  //company / slider_executives END
  //company / projects_gallery-company
  var sliderProjectsGalleryCompany = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.control_next-projects',
    prevArrow: '.control_prev-projects',
    autoplay: true,
    autoplaySpeed: 5000,
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
  };
  //company / projects_gallery-company END
  //company / slider_patents
  var sliderPatents = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.control_next-patents',
    prevArrow: '.control_prev-patents',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }, 
    ]  
  };
  //company / slider_patents END
  //company / slider_response
  var sliderResponse = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.response_img-wrap',
    nextArrow: '.control_next-response',
    prevArrow: '.control_prev-response',
    autoplay: true,
    autoplaySpeed: 5000,  
  };
    //slider response_img-wrap
  var sliderResponseImageWrap = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider_response',
    autoplay: true,
    autoplaySpeed: 5000,
  };
    //slider response_img-wrap END
  //company / slider_response END
  //index /slider_worker
  var sliderWorker = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: '.control_next-worker',
    prevArrow: '.control_prev-worker',
    adaptiveHeight: true,
    asNavFor: '.workers_mainslider',
    autoplay: true,
    autoplaySpeed: 5000,  
  };
  //index /slider_worker END
  //index /workers_mainslider
  var sliderWorkersMainaslider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,  
  };
  //index /workers_mainslider END
  //projectdetails_slider
  var sliderProjectdetails = {
    rows: 1,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.control_next-projectdetails',
    prevArrow: '.control_prev-projectdetails',
    autoplay: true,
    autoplaySpeed: 5000,
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
  };
  //projectdetails_slider END
//GLOBAL VARABLES ANS FUNCTION END

// START function for all media screen
  //history timeline
  historyTimeline();
  //history timeline END
  //index press list slider 
  //company /slider_executives
  $('.slider_executives').slick(sliderExecutives);
  //company /slider_executives END
  //company / projects_gallery-company
  $(".projects_gallery-company").slick(sliderProjectsGalleryCompany);
  //company / projects_gallery-company END
  //company / slider_patents
  $(".slider_patents").slick(sliderPatents);
  //company / slider_patents END
  //company / slider_response
  $(".slider_response").slick(sliderResponse);
  $(".response_img-wrap").slick(sliderResponseImageWrap);
  //company / slider_response END
  //index /slider_worker
  $(".slider_worker").slick(sliderWorker);
  $(".workers_mainslider").slick(sliderWorkersMainaslider);
  //index /slider_worker END
  //projectdetails_slider
  $(".projectdetails_slider").slick(sliderProjectdetails);
  //projectdetails_slider END
  //vacancy collapse
  $('.vacancy_btn').on("click", function() {
    $(this).toggleClass('vacancy_btn-active');
    $(this).next('.vacancy_specification').toggle();
	});
  //vacancy collapse END
  //company response/ fancybox
  $(".patents_img-wrap").fancybox({
		selector : '[data-fancybox="patents"]',
		thumbs   : false,
    hash     : false,
	});
  //company response/ fancybox END
// START function for all media screen END

//MEDIA SCREEN JS 
  enquire
  .register("screen and (min-width: 1280px)", {
    match : function() {
      //company history timeline
      if ($('.control_next-timeline').hasClass('controlTimelineNext-active')) {
        controlTimelineNextOff('.control_next-timeline');
      }
      if ($('.control_prev-timeline').hasClass('controlTimelinePrev-active')) {
        controlTimelinePrevOff('.control_prev-timeline');
      }

      $('.control_next-timeline').prependTo($('.timeline_control-left'));
      $('.timeline_control-mobile').after($('.timeline_period'));

      if ($('.timeline_text-wrap').hasClass('slick-initialized')) {
        $('.timeline_text-wrap').slick('unslick');
      }
      
      if ( !$('.timeline_list').hasClass('slick-initialized')) {
        $('.timeline_list').slick(sliderTimelineList);
      } 
      //company history timeline END
      //products
      pillsCollapseOff('.products_btn','.products_row');
      btnCollapse('.products_btn');
      //products END
      //servicedetails
      tabsPillsCollapseOff('.servicedetails_pills','.pills_content-servicedetails');
      tabsCollapse('.servicedetails_pills');
      //servicedetails END
      //productcard
      tabsPillsCollapseOff('.productcard_pills','.pills_content');
      tabsCollapse('.productcard_pills');
      //productcard END
    },
    unmatch : function() {
    }
  })
  .register("screen and (min-width: 1024px) and (max-width: 1279px)", {
    match : function() {
      //company history timeline
      if ($('.control_next-timeline').hasClass('controlTimelineNext-active')) {
        controlTimelineNextOff('.control_next-timeline');
      }
      if ($('.control_prev-timeline').hasClass('controlTimelinePrev-active')) {
        controlTimelinePrevOff('.control_prev-timeline');
      }
      $('.control_next-timeline').prependTo($('.timeline_control-left'));
      $('.timeline_control-mobile').after($('.timeline_period'));  
      
      if ($('.timeline_text-wrap').hasClass('slick-initialized')) {
        $('.timeline_text-wrap').slick('unslick');
      }
      if (!$('.timeline_list').hasClass('slick-initialized')) {
        $('.timeline_list').slick(sliderTimelineList);
      } 
      //company history timeline END
      //products
      pillsCollapseOff('.products_btn','.products_row');
      btnCollapse('.products_btn');
      //products END
      //servicedetails
      tabsPillsCollapseOff('.servicedetails_pills','.pills_content-servicedetails');
      tabsCollapse('.servicedetails_pills');
      //servicedetails END    
      //productcard
      tabsPillsCollapseOff('.productcard_pills','.pills_content');
      tabsCollapse('.productcard_pills');
      //productcard END 
    },
    unmatch : function() {
    }
  })
  .register("screen and (min-width: 768px) and (max-width: 1023px)", {
    match : function() {
      //company history timeline
      $('.timeline_control-mobile').before($('.timeline_period'));
      $('.control_next-timeline').prependTo($('.timeline_control-mobile'));
      if ($('.timeline_list').hasClass('slick-initialized')) {
        $('.timeline_list').slick('unslick');
      } 
      if (!$('.timeline_text-wrap').hasClass('slick-initialized')) {
        $('.timeline_text-wrap').slick(sliderTimelineTextWrap);
      }
      controlTimelinePrev('.control_prev-timeline');
      controlTimelineNext('.control_next-timeline');
      //company history timeline END
      //products
      pillsCollapseOff('.products_btn','.products_row');
      btnCollapse('.products_btn');
      //products END
      //servicedetails
      tabsPillsCollapseOff('.servicedetails_pills','.pills_content-servicedetails');
      tabsCollapse('.servicedetails_pills');
      //servicedetails END
      //productcard
      tabsPillsCollapseOff('.productcard_pills','.pills_content');
      tabsCollapse('.productcard_pills');
      //productcard END
      //alert("768");
    },
    unmatch : function() {
    }
  })
  .register("screen and (max-width: 767px)", {
    match : function() {
      //company history timeline
      if ($('.timeline_list').hasClass('slick-initialized')) {
        $('.timeline_list').slick('unslick');
      } 
      if (!$('.timeline_text-wrap').hasClass('slick-initialized')) {
        $('.timeline_text-wrap').slick(sliderTimelineTextWrap);
      }
      controlTimelinePrev('.control_prev-timeline');
      controlTimelineNext('.control_next-timeline');
      $('.timeline_control-mobile').before($('.timeline_period'));
      $('.control_next-timeline').prependTo($('.timeline_control-mobile'));
      //company history timeline END
      //index
      $(".projects_gallery").slick(settingProjectGallery);
      //index
      //products
      btnCollapseOff('.products_btn');
      pillsCollapse('.products_btn');
      //products END
      //servicedetails
      tabsCollapseOff('.servicedetails_pills');
      tabsPillsCollapse('.servicedetails_pills');
      //servicedetails END
      //productcard
      tabsCollapseOff('.productcard_pills');
      tabsPillsCollapse('.productcard_pills');
      $('.productcard .productcard_pills-active').after($('.filter_active'));
      //productcard END
    },
    unmatch : function() {
      $(".projects_gallery").slick('unslick');
    }
  });
//MEDIA SCREEN JS END
  //media screen js END

  // equal column height
  $(".direction_thumbnail").matchHeight();
  $(".gallery_col").matchHeight();
  $(".project_thumbnail").matchHeight();
  $(".project_thumbnail .gallery_title").matchHeight();
  $(".project_thumbnail .thumbnail_title").matchHeight();
  $(".project_thumbnail .clientcards_gallery").matchHeight();
  $(".offer_col .offer_link").matchHeight();
  $(".offer_col .offer_text").matchHeight();
  $(".thumbnail_wrap").matchHeight();
  $(".presspage_thumbnail").matchHeight();
  $(".presspage_thumbnail .presspage_link").matchHeight();
  $(".presscenter .press-col").matchHeight();
  $(".presscenter .press_col-main").matchHeight();
  $(".company_executives .profile_name").matchHeight();
  $(".company_executives .profile_position").matchHeight();
  $(".company_executives .profile_phone").matchHeight();
  $(".company_executives .profile_email").matchHeight();
  $(".footer .footer_col").matchHeight();
  $(".aboutcompany_col").matchHeight();
  // equal column height END 

});
