
$(window).on('load',function(){
    $('.perloader').addClass('complete');
    $('.complete').addClass('perloader');
    $('#con').fadeOut(250);
    $('.loader').fadeOut(1000);
    $("#ph2").fadeOut(1);
    $("#ph3").fadeOut(1);
})

$("#all").click(function(){
    $("#ph1").fadeIn(20);
    $("#ph2").fadeIn(20);
    $("#ph3").fadeIn(20);
    $("#ph1").removeClass('ref');
    $("#ph2").removeClass('ref');
    $("#ph3").removeClass('ref');

   
    
});

$("#full").click(function(){
    $("#ph1").fadeOut(20);
    $("#ph2").fadeIn(20);
    $("#ph3").fadeOut(20);
    $("#ph1").addClass('ref');
    $("#ph2").addClass('ref');
    $("#ph3").addClass('ref');

    
});

$("#temp").click(function(){
    $("#ph1").fadeOut(20);
    $("#ph2").fadeOut(20);
    $("#ph3").fadeIn(20);
    $("#ph1").addClass('ref');
    $("#ph2").addClass('ref');
    $("#ph3").addClass('ref');

   
    
});

$('mi').delay(2000).show(0);
$('con').delay(3000).hide(0);

$(document).ready(function() {
    $('.loop').owlCarousel({
        right:true,
        items:2,
        loop:true,
        margin:100,
        autoplay:true,
        responsive:{
            0:{
                items:1
            }
            , 600:{
                items:1
            }
            , 1000:{
                items:2
            }
            
        }
    });

    
    
       });