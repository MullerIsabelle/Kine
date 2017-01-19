$(document).ready(function() {
  window.sr = new scrollReveal();
  $('.menu a').on('click', function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').animate({scrollTop: $(anchor).offset().top}, 1000);
  });

  $('#lessons div').each(function() {
    $(this).find('article:not(:first)').hide();
  });

  $('.slick').slick({dots: true, autoplay: true, cssEase: 'linear'});

  $("#lessons nav a").on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      return
    }
    var active = $(this);
    var old_active = active.parent().siblings().find('a.active');
    active.addClass('active');
    old_active.removeClass('active');
    $(old_active.attr('href')).fadeOut(300, function() {
      $(active.attr('href')).fadeIn();
    });
  });

  $('.menu a').on('click', function(e) {
    if ($(this).hasClass('active')) {
      return
    }
    var old_active = $(this).parent().siblings().find('a.active');
    $(this).addClass('active');
    old_active.removeClass('active');
  });

  $(window).on('scroll', function() {
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY === 0) {
      $('nav.menu').removeClass('sticky');
      $('.menu .active').removeClass('active');
    }
    else {
      $('nav.menu').addClass('sticky');
    }
  });

  $('.popup-overlay a').click(function(e) {
    e.preventDefault();
    $('.popup-overlay').removeClass('show');
  })

  $("form").submit(function(e) {
    e.preventDefault();
    $.post($(this).attr('action'), $(this).serialize()).done(function(response) {
      $('.popup-overlay').addClass('show');
      $(this).find('input').val('');
    });
  });
    /*var email = $("#email").val(); // get email field value
    var name = $("#name").val(); // get name field value
    var msg = $("#msg").val(); // get message field value
    $.ajax(
    {
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': 'sVRLFidC1A7K56TuUkyUQg',
        'message': {
            'from_email': email,
            'from_name': name,
            'headers': {
                'Reply-To': email
            },
            'subject': 'Website Contact Form Submission',
            'text': msg,
            'to': [
            {
                'email': 'riyadh@bscheme.com',
                'name': 'Riyadh Al Nur',
                'type': 'to'
            }]
        }
        }
      })
      .done(function(response) {
          alert('Your message has been sent. Thank you!'); // show success message
          $("#name").val(''); // reset field after successful submission
          $("#email").val(''); // reset field after successful submission
          $("#msg").val(''); // reset field after successful submission
      })
      .fail(function(response) {
          alert('Error sending message.');
      });
      return false; // prevent page refresh
  });*/
});
