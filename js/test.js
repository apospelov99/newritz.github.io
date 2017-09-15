$(function() {
  //alert('wow');
  /*
  $('.control_next-testtimeline').on('click', function(event){
    //метод заменяет ссылку на действие
    alert("next");
    event.preventDefault();
    
    //updateSlide(timelineComponents, timelineTotWidth, 'next');
  });
  $('.control_prev-testtimeline').on('click', function(event){
    //метод заменяет ссылку на действие
    alert("prev");
    event.preventDefault();
    //updateSlide(timelineComponents, timelineTotWidth, 'next');
  });
  */
    function historyTimeline(){
      $('.history_timeline-li').on('click', function(){
        //метод заменяет ссылку на действие
        //event.preventDefault();
        $('.history_timeline-li').removeClass('timeline_selected timeline_active timeline_active-prev');
        $(this).addClass('timeline_active');
        $(this).prevAll('.history_timeline-li').addClass('timeline_selected');
        $(this).prev('.history_timeline-li').addClass('timeline_active-prev');

        //показываем текст контент
        var timelineDate = $(this).data('date');
        $('.timeline_text').removeClass('timeline_text-active');
        $('.timeline_text[data-date="'+ timelineDate +'"]').addClass('timeline_text-active');
        //показываем текст контент END
        
        //показываем текст контент
        var periodEnd = $('.timeline_text-active').data('date');
        var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
        $('.timeline_period .period_end').text(periodEnd);
        $('.timeline_period .period_start').text(periodStart);
        //показываем текст контент END
      });
    };
    
});







  /*
  controlTimelinePrev('.control_prev-timeline');
  controlTimelineNext('.control_next-timeline');
  
  /*
  $('.control_prev-timeline').on('click', function(){
    var periodEnd = $('.timeline_text-wrap .slick-current').next().find('.timeline_text').data('date');
    console.log(periodEnd);
    var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
    $('.timeline_period .period_end').text(periodEnd);
    $('.timeline_period .period_start').text(periodStart);
  });
  */
  /*
  function controlTimelineNext(control) {
    $(control).on('click', function(){
      var periodEnd = $('.timeline_text-wrap .slick-current').prev().find('.timeline_text').data('date');
      console.log(periodEnd);
      var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
      $('.timeline_period .period_end').text(periodEnd);
      $('.timeline_period .period_start').text(periodStart);
    });
  }

  function controlTimelinePrev(control) {
    $(control).on('click', function(){
      var periodEnd = $('.timeline_text-wrap .slick-current').next().find('.timeline_text').data('date');
      console.log(periodEnd);
      var periodStart = $('.history_timeline-li[data-date="'+ periodEnd +'"]').prev().text();
      $('.timeline_period .period_end').text(periodEnd);
      $('.timeline_period .period_start').text(periodStart);
    }); 
  }
*/
