
// Scroll smoothly when anchor links are clicked for same page

$('a').click(function(){
    $('html, body').animate({ // Call animation on html and body elements
        scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top // Find id attribute and offset when link is clicked
    }, 500);
    return false;
});