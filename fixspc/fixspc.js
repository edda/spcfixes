//This is a quite broad match (it matches all SAP UI5 apps), but I could not
//find anything in the DOM that's specific to SPC (except for a <title> which
//is only set too late, and the app logo which is an <img> without even an
//"alt" attribute).
//
//TODO: If this broad match causes problems for users who want to use other SAP
//UI5 apps as well, we might use a MutationObserver to observe the document
//title, and enable our fixes once we see a title that .endsWith("SAP Service
//Provider Cockpit") -- see https://stackoverflow.com/a/29540461/334761 for details
if (document.querySelectorAll("body.sapBUiShellBackground").length > 0) {
  // enable our custom CSS rules (we do this with a data attribute instead of
  // a CSS class since SAP UI5 likes to steamroll over the classList regularly)
  document.getElementsByTagName("html")[0].setAttribute("data-spcfixes", "enabled");

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
}
