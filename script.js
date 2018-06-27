$(document).ready(function() {

    var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;
  
      $('.parent2').on('mousedown touchstart', function() {
      
      if (!active1) $(this).find('.test1').css({'background-color': 'none', 'transform': 'translate(0px,125px)'});
      else $(this).find('.test1').css({'background-color': 'none', 'transform': 'none'}); 
       if (!active2) $(this).find('.test2').css({'background-color': 'none', 'transform': 'translate(60px,105px)'});
      else $(this).find('.test2').css({'background-color': 'none', 'transform': 'none'});
        if (!active3) $(this).find('.test3').css({'background-color': 'none', 'transform': 'translate(105px,60px)'});
      else $(this).find('.test3').css({'background-color': 'none', 'transform': 'none'});
        if (!active4) $(this).find('.test4').css({'background-color': 'none', 'transform': 'translate(125px,0px)'});
      else $(this).find('.test4').css({'background-color': 'none', 'transform': 'none'});
      active1 = !active1;
      active2 = !active2;
      active3 = !active3;
      active4 = !active4;
        
      });

      var typed = new Typed('#typed',{
        strings:['Wouldn\'t it be super cool to read them daily? ','Oh yes! New content every day for 365 days a year. '],
        backSpeed: 46,
        typeSpeed: 46,
        loop:true,
        contentType:'html',
        smartBackspace:true,
        });
  });