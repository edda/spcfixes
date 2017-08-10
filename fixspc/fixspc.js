// need to bind to some change event since everything is javascript in SPC
// so we're listening to a change on the content div
document.getElementById('content').addEventListener('DOMNodeInserted', function () {
  // find all readonly textareas
  var readonlyTextareas = document.querySelectorAll("textarea[readonly=readonly]")
  for (var i = 0; i < readonlyTextareas.length; i++) {
    // set readonly textarea height to content height
    var element = readonlyTextareas[i];
    element.style.height = "5px";
    element.style.height = (element.scrollHeight+20)+"px";
  }

}, false);
