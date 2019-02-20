(function ($, Drupal) {
  Drupal.behaviors.rosewoodCompactForms = {
    attach: function (context, settings) {
      $('.search-trigger', context).once('search-trigger').each(function () {
        // Apply the myCustomBehaviour effect to the elements only once.
        $('.search-block-form').css('display', 'none');
        $('.search-trigger').click(function() {
          $('.search-block-form').toggle('slow');
        });
      });
    }
  };
})(jQuery, Drupal);