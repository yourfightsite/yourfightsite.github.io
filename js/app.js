$(document).ready(function () {
  var $quote = $('#quote');
  var $quoteEmail = $quote.find('[type="email"]');
  var $quoteServices = $quote.find('[type="checkbox"]');
  var $quoteBtn = $quote.find(':submit');

  $quote.on('hidden.bs.modal', function (e) {
    $quoteEmail.val('');
    $quoteServices.prop('checked', false);
    $quoteBtn.prop('disabled', true);
  });

  $quote.on('shown.bs.modal', function (e) {
    $quoteEmail.focus();
  });

  $quote.find('input').on('change click keyup', function (e) {
    var valid = (
      $quoteEmail.val().trim().length > 0 &&
      $quoteServices.filter(':checked').length > 0
    );

    $quoteBtn.prop('disabled', ! valid);
  });

  $quote.on('show.bs.modal', function (e) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Modals',
      eventAction: 'show',
      eventLabel: 'Get quote'
    });
  });

  $quote.on('hide.bs.modal', function (e) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Modals',
      eventAction: 'hide',
      eventLabel: 'Get quote'
    });
  });

  $quote.on('submit', function (e) {
    ga('send', {
      hitType: 'event',
      eventCategory: 'Forms',
      eventAction: 'submit',
      eventLabel: 'Get quote'
    });
  });

  $('a[rel*="external"]').on('click', function (e) {
    e.preventDefault();

    window.open(this.href);
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('abbr[title]').tooltip();
});
