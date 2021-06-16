// Counter Section:
$(
  (function ($, win) {
    $.fn.inViewport = function (cb) {
      return this.each(function (i, el) {
        function visPx() {
          var H = $(this).height(),
            r = el.getBoundingClientRect(),
            t = r.top,
            b = r.bottom;
          return cb.call(el, Math.max(0, t > 0 ? H - t : b < H ? b : H));
        }
        visPx();
        $(win).on("resize scroll", visPx);
      });
    };
  })(jQuery, window)
);

jQuery(function ($) {
  $(".section5-heading").inViewport(function (px) {
    if (px > 0 && !this.initNumAnim) {
      this.initNumAnim = true;
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 1500,
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    }
  });
});

//navbar edit

jQuery(function ($) {
  if ($(window).width() >= 768 && $(window).width() < 992) {
    $(".nav-class").removeClass("navbar-expand-lg");
    $(".nav-class").addClass("navbar-expand-md");
  } else {
    if ($(window).width() >= 768 && $(window).width() < 992) {
      $(".nav-class").addClass("navbar-expand-lg");
      $(".nav-class").removeClass("navbar-expand-md");
    }
  }
});

// Testimonials Section
$(document).ready(function () {
  let right1 = "37%";
  let right2 = "28.5%";
  let right3 = "17%";
  let right4 = "11%";
  let right5 = "43%";
  let right6 = "38%";

  if ($(window).width() >= 1500 && $(window).width() < 1700) {
    right1 = "39%";
    right2 = "26%";
    right3 = "21%";
    right6 = "35%";
  } else if ($(window).width() >= 1700 && $(window).width() < 2000) {
    right1 = "41%";
    right2 = "23%";
    right3 = "26%";
    right6 = "31%";
  } else if ($(window).width() >= 2000) {
    right1 = "42%";
    right2 = "21%";
    right3 = "29%";
    right6 = "27%";
  }

  function desktop_bubbles(
    id,
    classToRemove,
    classToAdd,
    firstPosition,
    firstValue,
    secondPosition,
    secondValue,
    text,
    title,
    subTitle
  ) {
    $(id).click(function () {
      $("#bubble").removeClass(classToRemove).addClass(classToAdd);
      $("#bubble").css(firstPosition, firstValue);
      $("#bubble").css(secondPosition, secondValue);
      $("#bubble-text").text(text);
      $("#bubble-title").text(title);
      $("#bubble-sub-title").text(subTitle);
    });
  }

  desktop_bubbles(
    "#pic-one",
    "left",
    "right",
    "top",
    "-5%",
    "right",
    right1,
    "Treks - The most efficient, timely and reliable service as demanded by my pharmacy clientele. I would highly recommend for its performance and trustworthiness.",
    "Yasmin Kanji",
    "Shoppers Drug Mart - Kingsland Plaza"
  );

  desktop_bubbles(
    "#pic-two",
    "right",
    "left",
    "top",
    "16%",
    "right",
    right2,
    "I have been working with Treks for almost 2 years, it is an awesome and professional service. They make sure all items are safely delivered . I am highly satisfied with the service they provide. they are very professional, friendly, and efficient. The team is so professional in handling any issues. I will definitely recommend to others.",
    "Amira",
    "Chaparral Pharmacy"
  );

  desktop_bubbles(
    "#pic-three",
    "left",
    "right",
    "top",
    "15%",
    "right",
    right3,
    "We’ve been very happy with Treks since we switched over. They are always available for us, as well their service is reliable with competitive pricing. I would not hesitate to recommend them to my colleagues.",
    "Sharon Wong",
    "Shoppers Drug Mart - Shawnessy Towne Centre"
  );

  desktop_bubbles(
    "#pic-four",
    "right",
    "left",
    "top",
    "36%",
    "right",
    right4,
    "Treks is very convenient, always on time and modelling fantastic customer care, our team has been extremely happy with their services.",
    "Maher Al Mouselly",
    "Shoppers Drug Mart - Mahogany Plaza"
  );

  desktop_bubbles(
    "#pic-five",
    "left",
    "right",
    "top",
    "36%",
    "right",
    right5,
    "Treks has been an awesome addition to our delivery service in this busy pandemic time. The app is very user friendly and keeps track of all the customers for a very fast convenient procedure. Finally, the delivery rates are very competitive and offer delivery anywhere in Calgary at unbeatable price.",
    "Rob Heaton (B.Sc. Pharm)",
    "Cambrian Pharmacy"
  );

  desktop_bubbles(
    "#pic-six",
    "right",
    "left",
    "top",
    "58%",
    "right",
    right6,
    "Great leadership from the team, excellent support and rapid responses when issues arise.",
    "Amani Chehade",
    "Shoppers Drug Mart - Aspen Landing"
  );

  //Testimonials Mobile-Section
  function mobile_bubbles(
    id,
    classToRemove,
    classToAdd,
    firstPosition,
    firstValue,
    secondPosition,
    secondValue,
    text,
    title,
    subTitle
  ) {
    $(id).click(function () {
      $("#bubble-mobile").removeClass(classToRemove).addClass(classToAdd);
      document.documentElement.style.setProperty(firstPosition, firstValue);
      document.documentElement.style.setProperty(secondPosition, secondValue);
      $("#bubble-text-mobile").text(text);
      $("#bubble-title-mobile").text(title);
      $("#bubble-sub-title-mobile").text(subTitle);
    });
  }

  mobile_bubbles(
    "#pic1-mobile",
    "bottom",
    "top",
    "--custom-top",
    "-14px",
    "--custom-right",
    "15%",
    "Treks - The most efficient, timely and reliable service as demanded by my pharmacy clientele. I would highly recommend for its performance and trustworthiness.",
    "Yasmin Kanji",
    "Shoppers Drug Mart - Kingsland Plaza"
  );

  mobile_bubbles(
    "#pic2-mobile",
    "bottom",
    "top",
    "--custom-top",
    "-14px",
    "--custom-right",
    "45%",
    "I have been working with cabtreks for almost 2 years, it is an awesome and professional service. They mke sure all items are safely delivered . I am highly satisfied with the service they provide. they are very professional, friendly, and efficient. The team is so professional in handling any issues. I will definitely recommend to others.",
    "Amira",
    "Chaparral Pharmacy"
  );

  mobile_bubbles(
    "#pic3-mobile",
    "bottom",
    "top",
    "--custom-top",
    "-14px",
    "--custom-right",
    "80%",
    "We’ve been very happy with Treks since we switched over. They are always available for us, as well their service is reliable with competitive pricing. I would not hesitate to recommend them to my colleagues.",
    "Sharon Wong",
    "Shoppers Drug Mart - Shawnessy Towne Centre"
  );

  mobile_bubbles(
    "#pic4-mobile",
    "top",
    "bottom",
    "--custom-bottom",
    "-15px",
    "--custom-right",
    "80%",
    "Great leadership from the team, excellent support and rapid responses when issues arise.",
    "Amani Chehade",
    "Shoppers Drug Mart - Aspen Landing"
  );

  mobile_bubbles(
    "#pic5-mobile",
    "top",
    "bottom",
    "--custom-bottom",
    "-15px",
    "--custom-right",
    "45%",
    "Treks has been an awesome addition to our delivery service in this busy pandemic time. The app is very user friendly and keeps track of all the customers for a very fast convenient procedure. Finally, the delivery rates are very competitive and offer delivery anywhere in Calgary at unbeatable price.",
    "Rob Heaton (B.Sc. Pharm)",
    "Cambrian Pharmacy"
  );

  mobile_bubbles(
    "#pic6-mobile",
    "top",
    "bottom",
    "--custom-bottom",
    "-15px",
    "--custom-right",
    "15%",
    "Treks is very convenient, always on time and modelling fantastic customer care, our team has been extremely happy with their services.",
    "Maher Al Mouselly",
    "Shoppers Drug Mart - Mahogany Plaza"
  );
});

$(document).ready(function () {
  $("#Monthly").click(function () {
    $("#pills-slider").css("transform", "translateX(5px)");
    $(this).css("color", "white");
    $("#Annually").css("color", "black");

    $("#delivery-price-sub").text("$19.99");
    $("#delivery-number-sub").text("/ PER MONTH");
    $("#discount").css("visibility", "hidden");
  });
  $("#Annually").click(function () {
    let yearly = "97%";
    let screen = $(window).width();
    if (screen <= 1024) {
      yearly = "108%";
    }

    $("#pills-slider").css("transform", `translateX(${yearly})`);
    $(this).css("color", "white");
    $("#Monthly").css("color", "black");

    $("#delivery-price-sub").text("$199.99");
    $("#delivery-number-sub").text("/ PER YEAR");
    $("#discount").css("visibility", "visible");
  });
});

function desktop_slider(
  scale1,
  scale2,
  scale3,
  opacity1,
  opacity2,
  opacity3,
  t_opacity1,
  t_opacity2,
  t_opacity3
) {
  $("#image-1").css("transform", scale1);
  $("#image-2").css("transform", scale2);
  $("#image-3").css("transform", scale3);

  $("#image-1").css("opacity", opacity1);
  $("#image-2").css("opacity", opacity2);
  $("#image-3").css("opacity", opacity3);

  $("#smallText").css("opacity", t_opacity1);
  $("#mediumText").css("opacity", t_opacity2);
  $("#largeText").css("opacity", t_opacity3);
}

function mobile_slider(src, p_value, text, price) {
  $("#price-img-mobile").attr("src", src);
  $("#price-img-mobile").css("padding-top", p_value);
  $("#price-text-mobile").text(text);
  $("#delivery-price").text(price);
}

//Slider Section
$(document).ready(function () {
  var slider = document.getElementById("myRange");

  slider.oninput = () => {
    if ($(window).width() <= 600) {
      if (slider.value == 3) {
        mobile_slider(
          "./Assets/Mega.png",
          "0px",
          "700+ Deliveries / Month",
          "$5"
        );
      } else if (slider.value == 1) {
        mobile_slider(
          "./Assets/Small.png",
          "0px",
          "1 - 350 Deliveries / Month",
          "$7"
        );
      } else if (slider.value == 2) {
        mobile_slider(
          "./Assets/Large.png",
          "25px",
          "351 - 700 Deliveries / Month",
          "$6"
        );
      }
    } else {
      if (slider.value == 3) {
        desktop_slider(
          "scale(1.0)",
          "scale(1.0)",
          "scale(1.7)",
          "0.5",
          "0.5",
          "1",
          "0.5",
          "0.5",
          "1"
        );
        $("#delivery-price").text("$5");
      } else if (slider.value == 2) {
        desktop_slider(
          "scale(1.0)",
          "scale(1.7)",
          "scale(1.0)",
          "0.5",
          "1",
          "0.5",
          "0.5",
          "1",
          "0.5"
        );
        $("#delivery-price").text("$6");
      } else if (slider.value == 1) {
        desktop_slider(
          "scale(1.7)",
          "scale(1.0)",
          "scale(1.0)",
          "1",
          "0.5",
          "0.5",
          "1",
          "0.5",
          "0.5"
        );
        $("#delivery-price").text("$7");
      }
    }
  };
});
