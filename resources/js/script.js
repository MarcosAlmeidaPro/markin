$(document).ready(function(){
    $('.telefone').mask('(00) 00000-0000');


  });
  

 // Select all links with hashes
 $('a[href*="#"]')
 // Remove links that don't actually link to anything
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
 // On-page links
 if (
     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
     && 
     location.hostname == this.hostname
 ) {
     // Figure out element to scroll to
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     // Does a scroll target exist?
     if (target.length) {
     // Only prevent default if animation is actually gonna happen
     event.preventDefault();
     $('html, body').animate({
         scrollTop: target.offset().top
     }, 1000, function() {
         // Callback after animation
         // Must change focus!
         var $target = $(target);
         $target.focus();
         if ($target.is(":focus")) { // Checking if the target was focused
         return false;
         } else {
         $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
         $target.focus(); // Set focus again
         };
     });
     }
 }
 });


    // Código que dispara uma ação quando num determinado ponto da tela
    
    var waypoints = $('#intro').waypoint(function(direction) {
        var headlineIntro = document.querySelector(".js--intro-1");
        headlineIntro.classList.add("fadeInLeft", "animated");
        headlineIntro.setAttribute("style", "visibility:visible");
      }, {
        offset: '70%'
    });

    var waypoints = $('#intro').waypoint(function(direction) {
        var itemIntro = document.querySelector(".js--intro-2");
        itemIntro.classList.add("fadeInLeft", "animated");
        itemIntro.setAttribute("style", "visibility:visible")
      }, {
        offset: '30%'
    });

    var waypoints = $('#intro').waypoint(function(direction) {
        var itemIntro = document.querySelector(".js--intro-3");
        itemIntro.classList.add("fadeInLeft", "animated");
        itemIntro.setAttribute("style", "visibility:visible")
      }, {
        offset: '20%'
    });
    var waypoints = $('#intro').waypoint(function(direction) {
        var itemIntro = document.querySelector(".js--intro-4");
        itemIntro.classList.add("fadeInLeft", "animated");
        itemIntro.setAttribute("style", "visibility:visible")
      }, {
        offset: '10%'
    });

    var waypoints = $('#intro').waypoint(function(direction) {
        var itemIntro = document.querySelector(".js--intro-5");
        itemIntro.classList.add("fadeInUp", "animated");
        itemIntro.setAttribute("style", "visibility:visible")
      }, {
        offset: '0%'
    });

    var waypoints = $('#perfil').waypoint(function(direction) {
        var perfil1 = document.querySelector(".js--perfil-1");
        perfil1.classList.add("fadeInLeft", "animated");
        perfil1.setAttribute("style", "visibility:visible")

        var perfil2 = document.querySelector(".js--perfil-2");
        perfil2.classList.add("fadeIn", "animated");
        perfil2.setAttribute("style", "visibility:visible")

      }, {
        offset: '70%'
      });

    var waypoints = $('#perfil').waypoint(function(direction) {
        var perfil3 = document.querySelector(".js--perfil-3");
        perfil3.classList.add("fadeIn", "animated");
        perfil3.setAttribute("style", "visibility:visible")

        }, {
        offset: '30%'
    });

    var waypoints = $('#servicos').waypoint(function(direction) {
        var box1 = document.querySelector(".js--box-1");
        box1.classList.add("fadeInUp", "animated");
        box1.setAttribute("style", "visibility:visible");
        }, {
        offset: '30%'
    });

    var waypoints = $('#garantia').waypoint(function(direction) {
        var garantia = document.querySelector(".js--garantia");
        garantia.classList.add("pulse", "animated");
        garantia.setAttribute("style", "visibility:visible");
        }, {
        offset: '70%'
    });

    $('#intro').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('menu-fixo');
        } else {
            $('nav').removeClass('menu-fixo');
        } 
        }, {
        offset: '5%'
    });


    var teste = 0;

    $('.icone-menu-mobile').click(function(){
        var icone = $('.icone-menu-mobile');
        var nav = $('.menu');

        nav.slideToggle(300);

        if (icone.hasClass('ion-navicon-round')) {
            icone.addClass('ion-close-round');
            icone.removeClass('ion-navicon-round');
            teste = 1;
        } else {
            icone.addClass('ion-navicon-round');
            icone.removeClass('ion-close-round');
            teste = 0;
        }

    });

    $('.menu a').click(function(){
        var icone = $('.icone-menu-mobile');
        var nav = $('.menu');
        
        if (teste === 1) {
            nav.slideToggle(300);
            
            if (icone.hasClass('ion-navicon-round')) {
                icone.addClass('ion-close-round');
                icone.removeClass('ion-navicon-round');
            } else {
                icone.addClass('ion-navicon-round');
                icone.removeClass('ion-close-round');
            }    
        }
    })


    $('#miniaturas').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('menu-fixo');
        } else {
            $('nav').removeClass('menu-fixo');
        } 
        }, {
        offset: '5%'
    });