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


//navbar edit

jQuery(function($) {
  if ($(window).width() >= 768 && $(window).width() < 992 ){
    $(".nav-class").removeClass("navbar-expand-lg");
    $(".nav-class").addClass("navbar-expand-md");
  }
  else{
    if ($(window).width() >= 768 && $(window).width() < 992 ){
      $(".nav-class").addClass("navbar-expand-lg");
      $(".nav-class").removeClass("navbar-expand-md");
    }
  }
});

// Testimonials Section 
$(document).ready(function(){
  let right1 = "37%";
  let right2 = "28.5%";
  let right3 = "17%";
  let right4 = "11%";
  let right5= "43%";
  let right6 = "38%";


  if ($(window).width() >= 1500 && $(window).width() < 1700 ){
    right1 = "39%";
    right2 = "26%";
    right3 = "21%";
    right6 = "35%";
  }

  else if ($(window).width() >= 1700 && $(window).width() < 2000){
    right1 = "41%";
    right2 = "23%";
    right3 = "26%";
    right6 = "31%";
  }
  else if ($(window).width() >= 2000){
    right1 = "42%";
    right2 = "21%";
    right3 = "29%";
    right6 = "27%";
  }

$(document).ready(function(){
  $('#pic-one').click(function(){
    $("#bubble").removeClass( "left" ).addClass( "right" );
    $("#bubble").css("top","-5%");
    $("#bubble").css("right",right1);
    $("#bubble-text").text("Treks - The most efficient, timely and reliable service as demanded by my pharmacy clientele. I would highly recommend for its performance and trustworthiness.");
    $("#bubble-title").text("Yasmin Kanji");
    $("#bubble-sub-title").text("Shoppers Drug Mart - Kingsland Plaza");  
  })
});

$(document).ready(function(){
  $('#pic-two').click(function(){
    $("#bubble").removeClass( "right" ).addClass( "left" );
    $("#bubble").css("top","16%");
    $("#bubble").css("right",right2);
    $("#bubble-text").text("I have been working with cabtreks for almost 2 years, it is an awesome and professional service. They mke sure all items are safely delivered . I am highly satisfied with the service they provide. they are very professional, friendly, and efficient. The team is so professional in handling any issues. I will definitely recommend to others.");
    $("#bubble-title").text("Amira");
    $("#bubble-sub-title").text("Chaparral Pharmacy");  
  })
});

$(document).ready(function(){
  $('#pic-three').click(function(){
    $("#bubble").removeClass( "left" ).addClass( "right" );
    $("#bubble").css("top","15%");
    $("#bubble").css("right",right3);
    $("#bubble-text").text("We’ve been very happy with Cabtreks since we switched over. They are always available for us, as well their service is reliable with competitive pricing. I would not hesitate to recommend them to my colleagues.");
    $("#bubble-title").text("Sharon Wong");
    $("#bubble-sub-title").text("Shoppers Drug Mart - Shawnessy Towne Centre");  
  })
});

$(document).ready(function(){
  $('#pic-four').click(function(){
    $("#bubble").removeClass( "right" ).addClass( "left" );
    $("#bubble").css("top","36%");
    $("#bubble").css("right",right4);
    $("#bubble-text").text("Treks is very convenient, always on time and modelling fantastic customer care, our team has been extremely happy with their services.");
    $("#bubble-title").text("Maher Al Mouselly");
    $("#bubble-sub-title").text("Shoppers Drug Mart - Mahogany Plaza");  
  })
});

$(document).ready(function(){
  $('#pic-five').click(function(){
    $("#bubble").removeClass( "left" ).addClass( "right" );
    $("#bubble").css("top","36%");
    $("#bubble").css("right",right5);
    $("#bubble-text").text("Treks has been an awesome addition to our delivery service in this busy pandemic time. The app is very user friendly and keeps track of all the customers for a very fast convenient procedure. Finally, the delivery rates are very competitive and offer delivery anywhere in Calgary at unbeatable price.");
    $("#bubble-title").text("Rob Heaton (B.Sc. Pharm)");
    $("#bubble-sub-title").text("Cambrian Pharmacy");  
  })
});

$(document).ready(function(){
  $('#pic-six').click(function(){
    $("#bubble").removeClass( "right" ).addClass( "left" );
    $("#bubble").css("top","58%");
    $("#bubble").css("right",right6);
    $("#bubble-text").text("Great leadership from the team, excellent support and rapid responses when issues arise.");
    $("#bubble-title").text("Amani Chehade");
    $("#bubble-sub-title").text("Shoppers Drug Mart - Aspen Landing");  
  })
});

});

//Testimonials Mobile-Section
$(document).ready(function(){
  $('#pic1-mobile').click(function(){
    $("#bubble-mobile").removeClass( "bottom" ).addClass( "top" );
    document.documentElement.style.setProperty('--custom-top', '-14px');    
    document.documentElement.style.setProperty("--custom-right","15%");
    $("#bubble-text-mobile").text("Treks - The most efficient, timely and reliable service as demanded by my pharmacy clientele. I would highly recommend for its performance and trustworthiness.");
    $("#bubble-title-mobile").text("Yasmin Kanji");
    $("#bubble-sub-title-mobile").text("Shoppers Drug Mart - Kingsland Plaza");  
  })
});

$(document).ready(function(){
  $('#pic2-mobile').click(function(){
    $("#bubble-mobile").removeClass( "bottom" ).addClass( "top" );
    document.documentElement.style.setProperty('--custom-top', '-14px');    
    document.documentElement.style.setProperty("--custom-right","45%");
    $("#bubble-text-mobile").text("I have been working with cabtreks for almost 2 years, it is an awesome and professional service. They mke sure all items are safely delivered . I am highly satisfied with the service they provide. they are very professional, friendly, and efficient. The team is so professional in handling any issues. I will definitely recommend to others.");
    $("#bubble-title-mobile").text("Amira");
    $("#bubble-sub-title-mobile").text("Chaparral Pharmacy");  
  })
});

$(document).ready(function(){
  $('#pic3-mobile').click(function(){
    $("#bubble-mobile").removeClass( "bottom" ).addClass( "top" );
    document.documentElement.style.setProperty('--custom-top', '-14px');    
    document.documentElement.style.setProperty("--custom-right","80%");
    $("#bubble-text-mobile").text("We’ve been very happy with Treks since we switched over. They are always available for us, as well their service is reliable with competitive pricing. I would not hesitate to recommend them to my colleagues.");
    $("#bubble-title-mobile").text("Sharon Wong");
    $("#bubble-sub-title-mobile").text("Shoppers Drug Mart - Shawnessy Towne Centre");  
  })
});

$(document).ready(function(){
  $('#pic6-mobile').click(function(){
    $("#bubble-mobile").removeClass( "top" ).addClass( "bottom" );
    document.documentElement.style.setProperty('--custom-bottom', '-15px');    
    document.documentElement.style.setProperty("--custom-right","15%");
    $("#bubble-text-mobile").text("Treks is very convenient, always on time and modelling fantastic customer care, our team has been extremely happy with their services.");
    $("#bubble-title-mobile").text("Maher Al Mouselly");
    $("#bubble-sub-title-mobile").text("Shoppers Drug Mart - Mahogany Plaza");  
  })
});

$(document).ready(function(){
  $('#pic5-mobile').click(function(){
    $("#bubble-mobile").removeClass( "top" ).addClass( "bottom" );
    document.documentElement.style.setProperty('--custom-bottom', '-15px');    
    document.documentElement.style.setProperty("--custom-right","45%");
    $("#bubble-text-mobile").text("Cabtreks has been an awesome addition to our delivery service in this busy pandemic time. The app is very user friendly and keeps track of all the customers for a very fast convenient procedure. Finally, the delivery rates are very competitive and offer delivery anywhere in Calgary at unbeatable price.");
    $("#bubble-title-mobile").text("Rob Heaton (B.Sc. Pharm)");
    $("#bubble-sub-title-mobile").text("Cambrian Pharmacy");  
  })
});

$(document).ready(function(){
  $('#pic4-mobile').click(function(){
    $("#bubble-mobile").removeClass( "top" ).addClass( "bottom" );
    document.documentElement.style.setProperty('--custom-bottom', '-15px');    
    document.documentElement.style.setProperty("--custom-right","80%");
    $("#bubble-text-mobile").text("Great leadership from the team, excellent support and rapid responses when issues arise.");
    $("#bubble-title-mobile").text("Amani Chehade");
    $("#bubble-sub-title-mobile").text("Shoppers Drug Mart - Aspen Landing");  
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
    if (screen <= 1024){
    yearly = "108%";
    }
  
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
        $('#price-img-mobile').attr('src','./Assets/Mega.png');
        $('#price-img-mobile').css('padding-top','0px');
        $('#price-text-mobile').text('700+ Deliveries / Month');
        $('#delivery-price').text('$5');
  
        }
        else if (slider.value ==1 ){
          $('#price-img-mobile').attr('src','./Assets/Small.png');
          $('#price-img-mobile').css('padding-top','0px');
          $('#price-text-mobile').text('1 - 350 Deliveries / Month');
          $('#delivery-price').text('$7');
        } 
        else if (slider.value ==2){
          $('#price-img-mobile').attr('src','./Assets/Large.png');
          $('#price-img-mobile').css('padding-top','30px');
          $('#price-text-mobile').text('351 - 700 Deliveries / Month');  
          $('#delivery-price').text('$6');

        }  
    }
    else{
    if (slider.value == 3){
      $('#image-3').css('transform','scale(1.7)');
      $('#image-2').css('transform','scale(1.0)');
      $('#image-1').css('transform','scale(1.0)');

      $('#image-3').css('opacity','1');
      $('#image-2').css('opacity','0.5');
      $('#image-1').css('opacity','0.5');

      $('#smallText').css('opacity','0.5');
      $('#mediumText').css('opacity','0.5');
      $('#largeText').css('opacity','1');
 

      $('#delivery-price').text('$5');

      }
      else if (slider.value ==2 ){
        $('#image-1').css('transform','scale(1.0)');
        $('#image-3').css('transform','scale(1.0)');
        $('#image-2').css('transform','scale(1.7)');

        $('#image-3').css('opacity','0.5');
        $('#image-2').css('opacity','1');
        $('#image-1').css('opacity','0.5');

        $('#smallText').css('opacity','0.5');
        $('#mediumText').css('opacity','1');
        $('#largeText').css('opacity','0.5');
     
      $('#delivery-price').text('$6');
      } 
      else if (slider.value ==1){
        $('#image-1').css('transform','scale(1.7)');
        $('#image-2').css('transform','scale(1.0)');
        $('#image-3').css('transform','scale(1.0)');

        $('#image-3').css('opacity','0.5');
        $('#image-2').css('opacity','0.5');
        $('#image-1').css('opacity','1');

        $('#smallText').css('opacity','1');
        $('#mediumText').css('opacity','0.5');
        $('#largeText').css('opacity','0.5');

  
      $('#delivery-price').text('$7');

      }  
    }       
  }
  })
