//Smooth Scrolling de jquery Normal//

$(document).ready(function(){
    $("a").click(function(event){
      if (this.hash !== "") {
        event.preventDefault();
  
        var gato = this.hash;
  
        $("html, body").animate({
          scrollTop: $(gato).offset().top
        }, 800, function(){
          window.location.hash = gato;
        });
      }
    });

//Popovers de Bootstrap 4//

    $('[data-toggle="popover"]').popover();

//Tooltip de Bootstrap 4//

    $('[data-toggle="tooltip"]').tooltip();

});


  