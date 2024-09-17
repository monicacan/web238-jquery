$(document).ready(function() {

    // Hover effects for nav menu to indicate that they are clickable links.
    $('.nav-item').mouseover(function() {
        $(this).addClass('navhover');
      });
      $('.nav-item').mouseout(function() {
        $(this).removeClass('navhover');
    });

    // Toggle button that hides or shows message allows users to
    // change their cookies settings if needed.
    $('#toggleButton').click(function() {
        if ($('#disclaimer').is(':visible')) {
          $('#disclaimer').hide();
        } else {
          $('#disclaimer').show();
        }
      });
    
    // Highlight every other nav item to seperate the rows visually.
    $('tr:even').addClass('highlight');

});