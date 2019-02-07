(function ($, Drupal) {
  Drupal.behaviors.rosewoodCompactForms = {
    attach: function (context, settings) {
      $('label.control-label', context).once('control-label').each(function () {
        // Apply the myCustomBehaviour effect to the elements only once.
        console.log('custom behavior');
      });
    }
  };
})(jQuery, Drupal);