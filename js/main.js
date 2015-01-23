$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "elastic",
        closeEffect: "elastic"
    });
    $('#time, #timer').countdown({
    date: 'april 30, 2015',
    leadingZero: true,
    htmlTemplate: '<span class=\"time-block\"><span class=\"big\">%d</span><span>Days</span></span><span class=\"time-block\"><span class=\"big\">%h</span><span>Hours</span></span><span class=\"time-block\"><span class=\"big\">%i</span><span>Minutes</span></span><span class=\"time-block last\"><span class=\"big\">%s</span><span>Seconds</span></span>'
  });
});
