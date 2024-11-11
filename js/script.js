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

    //Accordion interaction for FAQs
    $('.FAQ-content').hide();

    $('.accordion').on('click', '.FAQ-heading', function() {

        $(this).toggleClass('active').next().slideToggle();

        $('.FAQ-content').not($(this).next()).slideUp(300);
                    
        $(this).siblings().removeClass('active');

        // Toggle the rotation of the chevron
        $(this).find('.bi-chevron-down').toggleClass('rotated');

      });
    
    //Tabs on the agenda page
    /*$('#info p:not(:first)').hide();

    $('#info-nav li').click(function(event) {
      event.preventDefault();
      $('#info p').hide();
      $('#info-nav .current').removeClass("current");
      $(this).addClass('current');
      
      var clicked = $(this).find('a:first').attr('href');
      var tabId = clicked.substring(1);
      $('#' + tabId).fadeIn('fast');
    }).eq(0).addClass('current');*/

    $('#info div[id^="tab"]:not(:first)').hide();

    $('#info-nav li').click(function(event) {
        event.preventDefault();
        $('#info div[id^="tab"]').hide();
        $('#info-nav .current').removeClass("current");
        $(this).addClass('current');
        
        var clicked = $(this).find('a:first').attr('href');
        var tabId = clicked.substring(1);
        $('#' + tabId).fadeIn('fast');
    }).eq(0).addClass('current');
});