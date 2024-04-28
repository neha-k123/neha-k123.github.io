document.getElementById("contact__button").onclick = function () { console.log("Click works"); };



// $(document).ready(function () {
//   var $nav_toggle = $('#nav-toggle');
//   // var $nav_toggle_after = $('#nav-toggle::after');
//   var $nav_circle = $('#nav-circle');
//   var $nav = $('#nav');
//   var $nav_list_items = $nav.find('li');
//   // var $nav_links = $
//   var $ripples = $('.ripple');

//   TweenMax.set($nav_list_items, {
//     transformOrigin: 'center center',
//   });

//   // TweenMax.set($ripples, {
//   //   transformOrigin: 'center center',
//   // });





//   $nav_toggle.click(function () {
//     if ($(this).hasClass('open')) {
//       // NAV CLOSES
//       TweenMax.to($nav_circle, 1, {
//         width: '10px',
//         height: '10px',
//         ease: Power4.easeOut,
//       });
//       TweenMax.set($nav, {
//         pointerEvents: 'none',
//       });
//       TweenMax.to($nav_list_items, 0.5, {
//         opacity: '0',
//         // x: '-100px',
//       });
//       TweenMax.set($nav_list_items, {
//         x: '-100px',
//         delay: 0.5,
//       });
//     } else {
//       // NAV OPENS
//       TweenMax.to($nav_circle, 1, {
//         width: '400vw',
//         height: '400vw',
//         ease: Power4.easeOut,
//       });
//       TweenMax.set($nav, {
//         pointerEvents: 'auto',
//       });
//       TweenMax.staggerTo($nav_list_items, 0.5, {
//         opacity: '100',
//         x: 0,
//         ease: Power4.easeOut,
//       }, 0.15);
//       TweenMax.to($ripples, 0.5, {
//         opacity: '0',
//       });
//     }
//     $(this).toggleClass('open');
//   });
// });




// commented code starts below
// // set up text to print, each item in array is new line
// var aText = new Array(
//   "There are only 10 types of people in the world:",
//   "Those who understand binary, and those who don't"
// );
// var iSpeed = 100; // time delay of print out
// var iIndex = 0; // start printing array at this posision
// var iArrLength = aText[0].length; // the length of the text array
// var iScrollAt = 20; // start scrolling up at this many lines

// var iTextPos = 0; // initialise text position
// var sContents = ''; // initialise contents variable
// var iRow; // initialise current row

// function typewriter() {
//   sContents = ' ';
//   iRow = Math.max(0, iIndex - iScrollAt);
//   var destination = document.getElementById("typedtext");

//   while (iRow < iIndex) {
//     sContents += aText[iRow++] + '<br />';
//   }
//   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//   if (iTextPos++ == iArrLength) {
//     iTextPos = 0;
//     iIndex++;
//     if (iIndex != aText.length) {
//       iArrLength = aText[iIndex].length;
//       setTimeout("typewriter()", 500);
//     }
//   } else {
//     setTimeout("typewriter()", iSpeed);
//   }
// }


// typewriter();