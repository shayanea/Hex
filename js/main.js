// Hamburgers Menu
var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
});

$(function() {
    $('.intro .columns').matchHeight({property: 'height'});
});