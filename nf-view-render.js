// Create a new object for custom validation of a custom field.
var myCustomFieldController = Marionette.Object.extend( {

	initialize: function() {

		// Listen to the render:view event for a field type. Example: Textbox field.
		this.listenTo( nfRadio.channel( 'listselect' ), 'render:view', this.renderView );
	},

	renderView: function( view ) {
		// console.log('I like to be outside');

		// Check if this is the right field. Example check for field key.
		if ( 'what_type_of_internet_do_you_currently_use_1575917703730' != view.model.get( 'key' ) ) return false;
		var el = jQuery( view.el ).find( '#nf-field-828' );


		jQuery(el).change(function(){
		  if(jQuery(el).val() == 'DSL'){
		      jQuery(el).find(':selected').val('DSL​').trigger('change');
					console.log(jQuery('#nf-field-828').find(':selected').text());
					console.log(jQuery('#nf-field-828').find(':selected').val());
					console.log('dsl value');
		  } else {
		}
		});

		console.log('radio fire button');



	}


});

// On Document Ready...
jQuery( document ).ready( function( $ ) {
	// Instantiate our custom field's controller, defined above.
	new myCustomFieldController();
});
