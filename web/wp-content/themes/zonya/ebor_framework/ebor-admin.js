jQuery(document).ready(function($) {
	
$('.pw-gallery').each(function() {
	var instance = this;

	$('input[type=button]', instance).click(function() {
		var gallerysc = '[gallery ids="' + $('input[type=hidden]', instance).val() + '"]';
		wp.media.gallery.edit(gallerysc).on('update', function(g) {
			var id_array = [];
			$.each(g.models, function(id, img) { id_array.push(img.id); });
			$('input[type=hidden]', instance).val(id_array.join(","));
		});
	});
});
	
$('.icon-selector').each(function(){
	var $this = $(this),
		icon = $(':selected', this).attr('data-icon');
		
	$this.prev().html(' ').html('<i class="'+ icon +'"></i>');
});

$('body').on('change', '.icon-selector', function(){
	var $this = $(this),
		icon = $(':selected', this).attr('data-icon');
		
	$this.prev().html(' ').html('<i class="'+ icon +'"></i>');
});

$( "ul.blocks" ).bind( "sortstop", function(event, ui) {
	
	//if moving column inside column, cancel it
	if(ui.item.hasClass('block-container')) {
		$parent = ui.item.parent()
		if( $parent.hasClass('block-container') || $parent.hasClass("column-blocks") ) { 
			$(this).sortable('cancel');
			return false;
		}
	}

});

jQuery('.ebor-column-content').slideUp();

jQuery('.column-close').click(function(){
	jQuery(this).parent().next().slideToggle();
	return false;
});

function show_boxes(){

	//POST FORMAT GALLERY METABOXES
	if ( $('input#post-format-gallery').is(':checked') || $('input#post-format-image').is(':checked') ) {
		$('#gallery_metabox').show();
	}
	else {
		$('#gallery_metabox').hide();
	}
	
	//POST FORMAT VIDEO METABOXES
	if ( $('input#post-format-video').is(':checked') || $('input#post-format-audio').is(':checked') ) {
		$('#video_metabox').show();
	}
	else {
		$('#video_metabox').hide();
	}

};

//CALL SHOW_BOXES
show_boxes();

//CALL SHOW_BOXES AGAIN ON INPUT CLICK
$('input').click(function(){
	show_boxes();
});
	
});