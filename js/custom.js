<script>
	var navbarHeight = 55;
    $("#page-scrollspy a.nav-link").on('click', function () {
        var target = decodeURI(this.hash.replace(/^#/, ''));
        $('html,body').animate({scrollTop: $(":header[id='" + target + "']").offset().top - navbarHeight}, scrollSpeed);
        return false;
    });
    var target = decodeURI(this.hash.replace(/^#/, ''));
    $('body').scrollspy({ target: "#page-scrollspy", offset: navbarHeight+5 });
</script>