//Sets a cookie parameter from a url query parameter named _adgroup. -Stephen Ebersole

(function ($, Drupal) {
  Drupal.behaviors.utm = {
    attach: function (context, settings) {
      $('form', context).once('input._adgroup').each(function () {

      function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
        }
        return(false);
      }   
      
      $(document).ready(function() {
        $('form').find('input._adgroup').each(function() {
          var a = getQueryVariable('_adgroup');
          if(a){
            $(this).val(a);
          }
        });
      });
      
      function createCookie(name,value,days) {    
        var expires = "";
        if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(30*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
        }
        
        document.cookie = name+"="+value+expires+"; path=/";
      }
      
      function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
      }
      
      function eraseCookie(name) {
        createCookie(name,"",-1);
      }
      
      var c_name = "Google-adwords";
      if(getQueryVariable("_adgroup") != "") {
        createCookie("Google-adwords", getQueryVariable("_adgroup"), 60);
        console.log("cookie name: " +c_name);
      }
      
      // this was needed to be able to print it into the input field in the template and to make it available to css as _adgroup
      else if (readCookie(c_name)){
        c_start=readCookie(c_name);
        var _pipe = c_start.split("|");
        $('input[name="_adgroup"]').val(_pipe[0]);
        console.log("cookie pipe: " +_pipe[0]);
      }
      
      });
    }
  };
})(jQuery, Drupal);