// Copy e-mail address to the Clipboard when corresponding icon is clicked
var emailAddress = document.getElementById('copyEmail');
var clipboard = new Clipboard(emailAddress);
clipboard.on('success', function(e) {
  console.log(e);
  // Notify user that e-mail address has been copied to the Clipboard
  (function($){
    $(function(){
  	   $.jGrowl('Copied "' + e.text + '" to the Clipboard.');
  	});
  })(jQuery);
});
clipboard.on('error', function(e) {
  console.log(e);
});
