$(function() {
    jQuery.each($(".databars td"),  function(i, val) { 
    if(!isNaN($(this).html()) && !$(this).hasClass('no-bars')) { 
            $(this).css("background-image" ,"url('/assets/images/databar.png')");
            $(this).css("background-repeat", "no-repeat");
            offset = parseInt($(this).html()) * ($(this).width()/100) - 312;
            
            $(this).css("background-position-x", offset);
    }; 
  });
});

