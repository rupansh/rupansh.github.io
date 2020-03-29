$(document).ready(function() {

    function setCircle(){
      var radius = 225; // adjust to move out items in and out 
      var fields = $('.sicon'),
        container = $('#social'),
        width = container.width(),
        height = container.height();
      var angle = 0,
        step = (2 * Math.PI) / fields.length;
      fields.each(function() {
        var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).outerWidth() / 2);
        var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).outerHeight() / 2);
        $(this).css({
          left: x + 'px',
          top: y + 'px'
        });
        angle += step;
      });
    }

    setCircle();

    $("#social")[0].setCircle = setCircle;

    $(window).resize(setCircle);
});