jQuery.noConflict();
jQuery(function($) {
    $(window).load(function() {
        $("a[href='#']").bind('click', function(e) {
            e.preventDefault();
            var ref = $('#' + $(this).attr('rel'));
            var topTo = ref.offset().top - 50;
            console.log(topTo);
            window.scrollTo({
                top: topTo,
                behavior: 'smooth'
            })
        })
    })
});