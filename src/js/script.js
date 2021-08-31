//  header section

// footer section

// $("#shop").click(function () {
//   if (window.innerWidth < 768) {
//     $("#one").slideToggle(300);
//   }
// });

// $("#Services").click(function () {
//     if (window.innerWidth < 768) {
//         $("#two").slideToggle(300);
//     }
// })

// $("#Account").click(function () {
//   if (window.innerWidth < 768) {
//     $("#three").slideToggle(300);
//   }
// });

// $("#Apple").click(function () {
//   if (window.innerWidth < 768) {
//     $("#four").slideToggle(300);
//   }
// });

// $("#Business").click(function () {
//   if (window.innerWidth < 768) {
//     $("#five").slideToggle(300);
//   }
// });

// $("#Education").click(function () {
//   if (window.innerWidth < 768) {
//     $("#six").slideToggle(300);
//   }
// });

// $("#Healthcare").click(function () {
//   if (window.innerWidth < 768) {
//     $("#seven").slideToggle(300);
//   }
// });

// $("#Government").click(function () {
//   if (window.innerWidth < 768) {
//     $("#eight").slideToggle(300);
//   }
// });

// $("#Values").click(function () {
//   if (window.innerWidth < 768) {
//     $("#nine").slideToggle(300);
//   }
// });

// $("#About").click(function () {
//   if (window.innerWidth < 768) {
//     $("#ten").slideToggle(300);
//   }
// });

// another methed
// import $ from "jquery";

// let form = $("h3").map(function () {
//   return $(this).attr("id");
// });

// let el = $("ul").map(function () {
//   return $(this).attr("id");
// });

// $(function () {
//   for (let i = 0; i < form.length; i++) {
//     $("#" + form[i]).click(function () {
//       if (window.innerWidth < 768) {
//         $("#" + el[i]).slideToggle(300);
//         console.log(form[i]);
//         console.log(el[i]);
//       }
//     });
//   }
// });


import $ from "jquery";

$(document).ready(function () {
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper").addClass("someClass");
  } else {
    $(".footer-links-wrapper").removeClass("someClass");
  }
  $(window).on("resize", function (event) {
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper").addClass("someClass");
    } else {
      $(".footer-links-wrapper").removeClass("someClass");
      $(".footer-links-wrapper ul").show();
    }
  });

  $("h3").click(function () {
    $(this).find("i").toggleClass("fa fa-plus fa fa-times");
  });
  // Footer collapse functionality
  $(document).on("click", ".someClass h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
  });
  // Search bar
  $(".search-link").click(function (event) {
    event.preventDefault();
    $(".navbar-collapse.collapse").removeClass("show");
    $(".searchbox").slideToggle();
  });
});