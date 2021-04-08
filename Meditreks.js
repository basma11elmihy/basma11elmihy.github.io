// Counter Section:
$(function($, win) {
    $.fn.inViewport = function(cb) {
      return this.each(function(i,el){
        function visPx(){
          var H = $(this).height(),
              r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
          return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
        } visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  }(jQuery, window));


jQuery(function($) {

    $(".section5-heading").inViewport(function(px) { 
      if(px>0 && !this.initNumAnim) { 
        this.initNumAnim = true; 
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 1500,
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });         
      }
    });
  
  });


// Testimonials Section 
$(document).ready(function(){
  $('#pic-one').click(function(){
    $("#bubble").removeClass( "left" ).addClass( "right" );
    $("#bubble").css("top","-5%");
    $("#bubble").css("right","37%");
    $("#bubble-text").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    $("#bubble-title").text("Jasi Toor");
    $("#bubble-sub-title").text("CEO");  
  })
});

$(document).ready(function(){
  $('#pic-two').click(function(){
    $("#bubble").removeClass( "right" ).addClass( "left" );
    $("#bubble").css("top","16%");
    $("#bubble").css("right","28.5%");
    $("#bubble-text").text("Extensive delivery proofs, intelligent AI location identification, reciepent access protocols We've built it all in!");
    $("#bubble-title").text("Muhammed Maksoud");
    $("#bubble-sub-title").text("Product Designer");  
  })
});

$(document).ready(function(){
  $('#pic-three').click(function(){
    $("#bubble").removeClass( "left" ).addClass( "right" );
    $("#bubble").css("top","15%");
    $("#bubble").css("right","17%");
    $("#bubble-text").text("Extensive delivery proofs, intelligent AI location identification, reciepent access protocols We've built it all in!");
    $("#bubble-title").text("Basma Elmihy");
    $("#bubble-sub-title").text("Operation Manager");  
  })
});

$(document).ready(function(){
  $('#pic-four').click(function(){
    $("#bubble").removeClass( "right" ).addClass( "left" );
    $("#bubble").css("top","36%");
    $("#bubble").css("right","11%");
    $("#bubble-text").text("Extensive delivery proofs, intelligent AI location identification, reciepent access protocols We've built it all in!");
    $("#bubble-title").text("Basma Elmihy");
    $("#bubble-sub-title").text("Operation Manager");  
  })
});

$(document).ready(function(){
  $('#pic-five').click(function(){
    $("#bubble").removeClass( "left" ).addClass( "right" );
    $("#bubble").css("top","36%");
    $("#bubble").css("right","43%");
    $("#bubble-text").text("Extensive delivery proofs, intelligent AI location identification!");
    $("#bubble-title").text("Basma Elmihy");
    $("#bubble-sub-title").text("Customer Support Specialist");  
  })
});

$(document).ready(function(){
  $('#pic-six').click(function(){
    $("#bubble").removeClass( "right" ).addClass( "left" );
    $("#bubble").css("top","58%");
    $("#bubble").css("right","38%");
    $("#bubble-text").text("Extensive delivery proofs, intelligent AI location identification, reciepent access protocols We've built it all in! Extensive delivery proofs, intelligent AI location identification, reciepent access protocols We've built it all in!");
    $("#bubble-title").text("Basma Elmihy");
    $("#bubble-sub-title").text("Front-End Developer");  
  })
});

//Testimonials Mobile-Section
$(document).ready(function(){
  $('#pic1-mobile').click(function(){
    $("#bubble-mobile").removeClass( "bottom" ).addClass( "top" );
    document.documentElement.style.setProperty('--custom-top', '-14px');    
    document.documentElement.style.setProperty("--custom-right","38px");
    $("#bubble-text-mobile").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    $("#bubble-title-mobile").text("Jasi Toor");
    $("#bubble-sub-title-mobile").text("CEO");  
  })
});

$(document).ready(function(){
  $('#pic2-mobile').click(function(){
    $("#bubble-mobile").removeClass( "bottom" ).addClass( "top" );
    document.documentElement.style.setProperty('--custom-top', '-14px');    
    document.documentElement.style.setProperty("--custom-right","150px");
    $("#bubble-text-mobile").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    $("#bubble-title-mobile").text("Basma Elmihy");
    $("#bubble-sub-title-mobile").text("Front End Developer");  
  })
});

$(document).ready(function(){
  $('#pic3-mobile').click(function(){
    $("#bubble-mobile").removeClass( "bottom" ).addClass( "top" );
    document.documentElement.style.setProperty('--custom-top', '-14px');    
    document.documentElement.style.setProperty("--custom-right","270px");
    $("#bubble-text-mobile").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    $("#bubble-title-mobile").text("Muhammed Maksoud");
    $("#bubble-sub-title-mobile").text("Product Designer");  
  })
});

$(document).ready(function(){
  $('#pic6-mobile').click(function(){
    $("#bubble-mobile").removeClass( "top" ).addClass( "bottom" );
    document.documentElement.style.setProperty('--custom-bottom', '-15px');    
    document.documentElement.style.setProperty("--custom-right","38px");
    $("#bubble-text-mobile").text("accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi ");
    $("#bubble-title-mobile").text("Basma Elmihy");
    $("#bubble-sub-title-mobile").text("Operation Manager");  
  })
});

$(document).ready(function(){
  $('#pic5-mobile').click(function(){
    $("#bubble-mobile").removeClass( "top" ).addClass( "bottom" );
    document.documentElement.style.setProperty('--custom-bottom', '-15px');    
    document.documentElement.style.setProperty("--custom-right","150px");
    $("#bubble-text-mobile").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    $("#bubble-title-mobile").text("Basma Elmihy");
    $("#bubble-sub-title-mobile").text("Customer Support Specialist");  
  })
});

$(document).ready(function(){
  $('#pic4-mobile').click(function(){
    $("#bubble-mobile").removeClass( "top" ).addClass( "bottom" );
    document.documentElement.style.setProperty('--custom-bottom', '-15px');    
    document.documentElement.style.setProperty("--custom-right","270px");
    $("#bubble-text-mobile").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    $("#bubble-title-mobile").text("Basma Elmihy");
    $("#bubble-sub-title-mobile").text("Operation Manager");  
  })
});


$(document).ready(function(){ 
  $('#Monthly').click(function(){
    $('#pills-slider').css("transform","translateX(5px)");
    $(this).css("color","white");
    $('#Annually').css("color","black");

    $('#delivery-price-sub').text("$19.99");
    $('#delivery-number-sub').text("/ PER MONTH");
    $('#discount').css("visibility",'hidden');
    
  })
  $('#Annually').click(function(){
    let yearly = '97%';
    let screen = $(window).width(); 
    if (screen <= 600)
    yearly = "108%";

    $('#pills-slider').css("transform",`translateX(${yearly})`);
    $(this).css("color","white");
    $('#Monthly').css("color","black");

    $('#delivery-price-sub').text("$199.99");
    $('#delivery-number-sub').text("/ PER YEAR");
    $('#discount').css("visibility",'visible');
  })
});



//Slider Section
$(document).ready(function(){
  var slider = document.getElementById("myRange");
   
  slider.oninput = () => {
    if ($(window).width() <= 600){
      if (slider.value == 3){
        $('#price-img-mobile').css('transform','scale(1.2)');
        $('#price-text-mobile').text('500+ Deliveries / Month');
        $('#delivery-price').text('$5');
  
        }
        else if (slider.value ==2 ){
          $('#price-img-mobile').css('transform','scale(1)');
          $('#price-text-mobile').text('10 - 100 Deliveries / Month');
          $('#delivery-price').text('$7');
        } 
        else if (slider.value ==1){
          $('#price-img-mobile').css('transform','scale(1.1)');   
          $('#price-text-mobile').text('101 - 500 Deliveries / Month');  
          $('#delivery-price').text('$6');

        }  
    }
    else{
    if (slider.value == 3){
      $('#image-3').css('transform','scale(1.1)');
      $('#image-2').css('transform','scale(0.6)');
      $('#image-1').css('transform','scale(0.6)');
      // $('#delivery-price').css('opacity','1');
      // $('#delivery-number').css('opacity','1');

      $('#delivery-price').text('$5');
      // $('#delivery-number').text('/ MORE THAN 1000 ORDERS');

      }
      else if (slider.value ==2 ){
        $('#image-1').css('transform','scale(0.6)');
        $('#image-3').css('transform','scale(0.6)');
        $('#image-2').css('transform','scale(1.0)');

      //   $('#delivery-price').css('opacity','1');
      // $('#delivery-number').css('opacity','1');
      $('#delivery-price').text('$7');
      // $('#delivery-number').text('/ LESS THAN 100 ORDERS');
      } 
      else if (slider.value ==1){
        $('#image-1').css('transform','scale(1.1)');
        $('#image-2').css('transform','scale(0.6)');
        $('#image-3').css('transform','scale(0.6)');

      //   $('#delivery-price').css('opacity','1');
      // $('#delivery-number').css('opacity','1');

      $('#delivery-price').text('$6');
      // $('#delivery-number').text('/ MORE THAN 100 ORDERS');

      }  
    }       
  }
  })
