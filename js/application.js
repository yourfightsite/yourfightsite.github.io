;(function ($) {

  // Open external links in a new window
  $('a[rel="external"]').on('click', function (e) {
    e.preventDefault();
    window.open(this.href);
  });

  // Track events
  $('[data-track-event]').on('click', function (e) {
    if (ga) {
      var category = $(this).data('event-category');
      var label = $(this).data('event-label');
      ga('send', 'event', category, 'click', label);
    }
  });

})(jQuery);
