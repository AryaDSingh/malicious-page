
window.onload = function() {
  var flagInfo = Android.getdate("flag");
  // Update the div with the flag info.
  document.getElementById('flagOutput').innerText = flagInfo;

  console.log('Malicious page updated to Version 2');
};
