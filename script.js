$(document).ready(function() {
  // form animation
  $('input').each(function() {

    $(this).on('focus', function() {
      $(this).parent('.css').addClass('active');
    });

    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
        $(this).parent('.css').removeClass('active');
      }
    });

    if ($(this).val() != '') $(this).parent('.css').addClass('active');

  });

  // count characters
  var text_max = 280;
  var warning_msg = "";
  $('#character_remaining').html('Characters remaining: ' + text_max);

  $('input').keyup(function() {
    if ($('#d2').val().length > 0) {
      text_max = 116;
    } else {
      var text_max = 140;
    }

    var text_length = $('#d1').val().length;
    var text_remaining = text_max - text_length;
    if (text_remaining < 0) {
      warning_msg = "- too long!";
      $('#character_remaining').addClass('warning');
    } else {
      warning_msg = "";
      $('#character_remaining').removeClass('warning');
    }

    $('#character_remaining').html('Characters remaining: ' + text_remaining + " " + warning_msg);
  });
  // generate intent
  $('.btn').on('click', function() {
    var start_text = 'https://twitter.com/intent/tweet?text=';
    var generated_tweet = encodeURIComponent($('#d1').val());
    if ($('#d2').val().length > 0) {
      var generated_url = "&url=" + encodeURIComponent($('#d2').val());
    } else {
      var generated_url = "";
    }
    if ($('#d1').val().length > 0) {
      $('#intent').html(start_text + generated_tweet + generated_url);
    } else {
      $('#intent').html("Your tweet is empty, don't be shy!")
    }
  })
});