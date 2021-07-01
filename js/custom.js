jQuery(document).ready(function($) {
  $('.fadeOut').owlCarousel({
    items:1,
        margin:15,
        autoplay:true,
        autoplayTimeout:3000,
        loop:true,
  });
});

$('#jm').LineProgressbar({
  percentage: 95,
    fillBackgroundColor:'#ff0000',
    backgroundColor:'#000',
    radius:'10px',
    height:'10px',
    width:'100%'
  
  });
  $('#mm').LineProgressbar({
    percentage: 85,
      fillBackgroundColor:'#ff0000',
      backgroundColor:'#000',
      radius:'10px',
      height:'10px',
      width:'100%'
    
    });
    $('#mr').LineProgressbar({
      percentage: 65,
        fillBackgroundColor:'#ff0000',
        backgroundColor:'#000',
        radius:'10px',
        height:'10px',
        width:'100%'
      
      });