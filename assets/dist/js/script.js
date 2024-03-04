$(document).ready(function(){

  function scrollToAnchor(aid){
      var destination = $(`${ aid }`);

      $('html, body').animate({
          scrollTop: destination.offset().top
      },'slow');
  }

  // Rolling page
  $(document).on('click', '.scrollToLocation', function (){
    $(this).blur();
    scrollToAnchor($(this).data().href);
});

  // Disable image drag
  $("img").attr("draggable","false")

  // Click On Overlay initial
  $('.clique').click(function(){
    $("html, body").animate({ scrollTop: 0 });

    $(this).remove();

    $('#audio')[0].play();

    $('body').css('overflow', 'visible')
  }); 

  // Add animations on page
  ScrollReveal({ reset: true });
  ScrollReveal().reveal(".effect1 > *", { duration: 450, origin: "top", opacity: 0, distance: "80px", easing: "ease-in-out", interval: 100});
  ScrollReveal().reveal(".effect2", { duration: 1000, origin: "bottom", distance: "80px", easing: "ease-in-out"});
  ScrollReveal().reveal(".effect3", { duration: 1000, origin: "top", distance: "80px", easing: "ease-in-out"});
  ScrollReveal().reveal(".effect4", { duration: 1000, origin: "bottom", distance: "80px", easing: "ease-in-out"});
  ScrollReveal().reveal(".effect5", { duration: 1000,  origin: "up", distance: "100px", easing: "ease-in-out"});
  ScrollReveal().reveal(".effect6", { duration: 1000, origin: "left", distance: "50px", easing: "ease-in-out"});
  ScrollReveal().reveal(".effect7", { duration: 1000, origin: "right", distance: "50px", easing: "ease-in-out"});
});  