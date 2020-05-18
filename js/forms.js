$('#dynamics-brochure').submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function() {
    window.location = '../thanks.html/';
  });
});

$('#enterprise-brochure').submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function() {
    window.location = '../thanks.html/';
  });
});

$('#quick-book-brochure').submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function() {
    window.location = '../thanks.html/';
  });
});

$('#sage-brochure').submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function() {
    window.location = '../thanks.html/';
  });
});