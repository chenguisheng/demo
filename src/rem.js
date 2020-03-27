window.onload = function() {
  getRem(720, 100);
};
window.onresize = function() {
  getRem(720, 100);
};
function getRem(pwidth, prem) {
  var html = document.getElementsByTagName("html")[0];
  var oWidth =
    document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (oWidth / pwidth) * prem + "px";
}
