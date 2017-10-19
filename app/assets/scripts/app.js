// Copies e-mail address to the clipboard when corresponding icon is clicked
var emailAddress = document.getElementById('copyEmail');
var clipboard = new Clipboard(emailAddress);
clipboard.on('success', function(e) {
  console.log(e);
  alert('Copied "' + e.text + '" to the clipboard.');
});
clipboard.on('error', function(e) {
  console.log(e);
});
