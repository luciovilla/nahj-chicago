/*-----------------------------------------------------------------------------------*/
/*	WORDPRESS FIXES
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
"use strict";
	
	jQuery('p:empty').remove();
	
	if( wp_data.fixed_lightbox == 'no' ){
		jQuery('.ebor-cat-catch').each(function(){
			var $this = jQuery(this),
				$cat = $this.attr('data-parent');
			$this.find('.fancybox-media').attr('data-rel', $cat);
		});
	}
	
	jQuery('a[data-rel]').each(function(){
	    jQuery(this).attr('rel', jQuery(this).data('rel'));
	});
	jQuery(document).on('click', '.yamm .dropdown-menu', function(e) {
	  e.stopPropagation()
	});
	jQuery('.dropdown ul li.menu-item-object-mega_menu').parents('.dropdown').addClass('yamm-fw');
	jQuery('.woocommerce-result-count').appendTo('h1.page-title');
}); 
/*-----------------------------------------------------------------------------------*/
/*	PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function() { // makes sure the whole site is loaded
"use strict";
	jQuery('#status').fadeOut(); // will first fade out the loading animation
	jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	jQuery(window).trigger('resize');
});
/*-----------------------------------------------------------------------------------*/
/*	OFFSET
/*-----------------------------------------------------------------------------------*/    
jQuery(document).ready(function() {
"use strict";
	jQuery('.offset').css('padding-top', jQuery('.navbar').height() + 'px');
}); 
jQuery(window).resize(function() {
"use strict";
	jQuery('.offset').css('padding-top', jQuery('.navbar').height() + 'px');        
}); 
/*-----------------------------------------------------------------------------------*/
/*	STICKY HEADER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";

    var menu = jQuery('.navbar'),
        pos = menu.offset();

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && jQuery(this).scrollTop() > 200) {
            menu.fadeOut('fast', function () {
                jQuery(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if (jQuery(this).scrollTop() <= pos.top + 200 && menu.hasClass('fixed')) {
            menu.fadeOut(0, function () {
                jQuery(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });

});
jQuery(document).ready(function(){ 
"use strict";
	jQuery('.navbar .nav li a').on('click',function(){
	    jQuery('.navbar .navbar-collapse.in').collapse('hide');
	});
});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
"use strict";
    jQuery('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();
    jQuery('a.js-activated').not('a.js-activated[href^="#"]').click(function(){
    	var url = jQuery(this).attr('href');
    	window.location.href = url;
    	return true;
    });
    jQuery('.btn.responsive-menu').on('click', function() {
        jQuery(this).toggleClass('opn');
    });
});
/*-----------------------------------------------------------------------------------*/
/*	RETINA
/*-----------------------------------------------------------------------------------*/
jQuery(function() {
	"use strict";
	jQuery('.retina').retinise();
});
/*-----------------------------------------------------------------------------------*/
/*	OWL CAROUSEL
/*-----------------------------------------------------------------------------------*/ 
jQuery(document).ready(function() {
"use strict";

jQuery('.testimonials').owlCarousel({
	items: 1,
	nav:true,
	navText: ['<i class="icon-left-open-big"></i>','<i class="icon-right-open-big"></i>'],
	dots: false,
	autoHeight: true,
	loop: true,
	margin: 0,
});
              
jQuery('.image-slider').owlCarousel({
	items: 1,
	nav:true,
	navText: ['<i class="icon-left-open-big"></i>','<i class="icon-right-open-big"></i>'],
	dots: true,
	autoHeight: false,
	loop: true,
	margin: 0,
	navContainerClass: 'owl-slider-nav',
	navClass: [ 'owl-slider-prev', 'owl-slider-next' ],
	controlsClass: 'owl-slider-controls'
});
                        
jQuery('.owl-posts').each(function(){
	var $this = jQuery(this),
		postsNo = 3;
	
	if( $this.parent().hasClass('col-4-carousel') )
		postsNo = 4;
			
	$this.owlCarousel({
	    loop:false,
	    margin:15,
	    nav:true,
	    dots: false,
	    navText: ['<i class="icon-left-open-big"></i>','<i class="icon-right-open-big"></i>'],
	    items: 4,
	    responsive:{
	        0:{
	            items:1
	        },
	        760:{
	            items:3
	        },
	        1000:{
	            items: postsNo, 
	        }
	    }
	});
});

jQuery('.owl-related').owlCarousel({
    loop:false,
    margin:15,
    nav:true,
    dots: false,
    navText: ['<i class="icon-left-open-big"></i>','<i class="icon-right-open-big"></i>'],
    items:4,
    responsive:{
        0:{
            items:1
        },
        760:{
            items:3
        }
    }
});

jQuery('.clients').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    items: 6,
    responsive:{
        0:{
            items:3
        },
        700:{
            items:5
        },
        1000:{
            items:6
        }
    },
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true
});


});
/*-----------------------------------------------------------------------------------*/
/*	VIDEO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    jQuery('.player').fitVids();
});
/*-----------------------------------------------------------------------------------*/
/*	PARALLAX MOBILE
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        jQuery('.parallax').addClass('mobile');
    }
});
/*-----------------------------------------------------------------------------------*/
/*	IMAGE ICON HOVER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    jQuery('.icon-overlay a').prepend('<span class="icn-more"></span>');
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE FULLSCREEN PORTFOLIO
/*-----------------------------------------------------------------------------------*/

var isotopeBreakpoints = [
    { min_width: 1680, columns: 5 },
    { min_width: 1440, max_width: 1680, columns: 5 },
    { min_width: 1024, max_width: 1440, columns: 4 },
    { min_width: 768, max_width: 1024, columns: 3 },
    { max_width: 768, columns: 1 }
    
 ];

jQuery(document).ready(function () {
	"use strict";
    var $container = jQuery('.full-portfolio .items');

    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
    });

    // hook to window resize to resize the portfolio items for fluidity / responsiveness
    jQuery(window).smartresize(function() {
        var windowWidth = jQuery(window).width();
        var windowHeight = jQuery(window).height();

        for ( var i = 0; i < isotopeBreakpoints.length; i++ ) {
            if (windowWidth >= isotopeBreakpoints[i].min_width || !isotopeBreakpoints[i].min_width) {
                if (windowWidth < isotopeBreakpoints[i].max_width || !isotopeBreakpoints[i].max_width) {
                    $container.find('.item').each(function() {
                        jQuery(this).width( Math.floor( $container.width() / isotopeBreakpoints[i].columns ) );
                    });

                    break;
                }
            }
        }
    });

    jQuery(window).trigger( 'smartresize' );


    jQuery('.grid-portfolio .filter li a').click(function () {

        jQuery('.grid-portfolio .filter li a').removeClass('active');
        jQuery(this).addClass('active');

        var selector = jQuery(this).attr('data-filter');
        
        if( wp_data.fixed_lightbox == 'no' ){
        	jQuery('.grid-portfolio li a').attr({ 'rel' : 'portfolio' });
        	jQuery(selector).find('a').attr({ 'rel' : 'active' });
        }
        
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE CLASSIC PORTFOLIO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    var $container = jQuery('.fix-portfolio .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item'
        });
    });

    jQuery(window).on('resize', function () {
        jQuery('.fix-portfolio .items').isotope('reLayout')
    });
    
    jQuery('.fix-portfolio .filter li a').click(function () {

        jQuery('.fix-portfolio .filter li a').removeClass('active');
        jQuery(this).addClass('active');

        var selector = jQuery(this).attr('data-filter');
        
        if( wp_data.fixed_lightbox == 'no' ){
       		jQuery('.fix-portfolio li a').attr({ 'rel' : 'portfolio' });
        	jQuery(selector).find('a').attr({ 'rel' : 'active' });
        }
        
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE GRID BLOG
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    var $container = jQuery('.grid-blog');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.post'
        });
    });

    jQuery(window).on('resize', function () {
        jQuery('.grid-blog').isotope('reLayout')
    });
});
/*-----------------------------------------------------------------------------------*/
/*	FANCYBOX
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    jQuery(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = jQuery(this.element).data('title-id');
            if (id) {
                el = jQuery('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});
/*-----------------------------------------------------------------------------------*/
/*	PRETTIFY
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    window.prettyPrint && prettyPrint()
});
/*-----------------------------------------------------------------------------------*/
/*	TOOLTIP
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    if (jQuery("[rel=tooltip]").length) {
        jQuery("[rel=tooltip]").tooltip();
    }
});
/*-----------------------------------------------------------------------------------*/
/*	TABS
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
	"use strict";
    jQuery('.tabs.tabs-top').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
});