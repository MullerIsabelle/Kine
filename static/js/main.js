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
    //$('.popup-overlay').removeClass('show');
  })

  $("form").submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: "https://formspree.io/miniclem69@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    })
      .done(function(response) {
        alert('Votre message a été envoyé, nous vous répondrons le plus rapidement possible !');
        $("form input, form textarea").val(''); // reset field after successful submission
      })
      .fail(function(response) {
        alert('Erreur lors de lʼenvoi du message.');
      });
  });
});
