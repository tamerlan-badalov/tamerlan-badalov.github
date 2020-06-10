
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    // margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText : ["<div><i class='fa fa-angle-double-left' aria-hidden='true'></i></div>","<div><i class='fa fa-angle-double-right' aria-hidden='true'></i></div>"],
    
 
   
});
// $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   });
// setInterval(() => {
//     $('.owl-item .slider-title').removeClass("top") 
// if($('.owl-item').hasClass( "active" )){

//     $('.owl-item.active .slider-title').addClass("top") }
// }, 1);

    

window.addEventListener("scroll",function(){

    let dif=window.scrollY
    let bar=document.querySelector('.bottom-header')
    let nav=bar.children[0]
    if(dif >150){
        bar.classList.add('sticky')
        nav.style.backgroundColor='white'
    }
    else{bar.classList.remove('sticky')
    nav.style.backgroundColor='transparent'}
    
})
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
   

$(document).ready(function() {
    $('.btn').magnificPopup({type:'iframe',
    overflowY:'scroll',
    fixedContentPos: false,
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
      
        patterns: {
          youtube: {
            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
      
            id: 'v=', // String that splits URL in a two parts, second part should be %id%
            // Or null - full URL will be returned
            // Or a function that should return %id%, for example:
            // id: function(url) { return 'parsed id'; }
      
            src: "https://www.youtube.com/embed/LFBxRxwY4Qw?autoplay=1" // URL that will be set as a source for iframe.
          },
          vimeo: {
            index: 'vimeo.com/',
            id: '/',
            src: '//player.vimeo.com/video/%id%?autoplay=1'
          },
          gmaps: {
            index: '//maps.google.',
            src: '%id%&output=embed'
          }
      
          // you may add here more sources
      
        },
      
        srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
      },
      callbacks: {
        open: function() {
           jQuery('body').addClass('magnificpopupnoscroll');
        },
        close: function() {
           jQuery('body').removeClass('magnificpopupnoscroll');
        }
    }

});
  });
    
 
    
   
  $('.btn').magnificPopup({

    type: 'inline',          // Custom settings, never mind
    closeBtnInside: false,   // Custom settings, never mind
    fixedContentPos: false,  // Custom settings, never mind
    fixedBgPos: true,        // Custom settings, never mind

    callbacks: {

        open: function() {                        // When you open the
            $('body').css('overflow', 'scroll');  // window, the element
        },                                        // "body" is used "overflow: hidden".

        close: function() {                       // When the window
            $('body').css('overflow', '');        // is closed, the 
        },                                        // "overflow" gets the initial value.

    }

});

// $(document).ready(function (e) {

//     $.ajax({
//         type: "get",
//         url: " http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",


//         success: function (response) {
//             $.each(response, function (index, item) {

//                 console.log(item)
//                 let div = $('<div/>', { class: 'col-4' });
//                 let product =` <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" alt="">` 
//                 let card=`
//                 <div class="doc-card">
//                     <div class="doc-img">
//                     <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${item.image}" alt="">
//                         <div class="upper">
//                             <ul class="doc-social">
//                                 <li><a href="facebook.com"><i class="fab fa-facebook-f"></i></a></li>
//                                 <li><a href="twitter.com"><i class="fab fa-twitter"></i></a></li>
//                                 <li><a href="linkedin.com"><i class="fab fa-linkedin"></i></a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div class="doc-title">
//                         <h3>${item.name}</h3>
//                         <span>${item.profession}</span>
//                         <p>${item.description}</p>
//                     </div>
//                 </div>
//             `
//                 $(div).html(card)
//                 $('.multiple-items').append(div)

//             })
//         }
//     });


// })