// JavaScript Document

var site = window.location.href;

/**
 * Gets parameter value from URL
 * @param {String} name parameter name
 * @param {String} url
 */
function getParameterByName(name, url) {

	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));

}
/**
 * Sets hidden field value from url parameter
 * @param {String} sourceParam form field to be set
 */
function setHiddenSource(sourceParam) {

	//Initialize parameter from URL and field to be set
	var parameterValue = getParameterByName(sourceParam);
	var parameterField = "#" + sourceParam;

	//If parameter is in URL and field exists - populate field
	if (parameterValue !== null && $(parameterField).length) {
		$(parameterField).val(parameterValue);
	}

}

function validateEmail(email) {

	var re = /^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i;
	return re.test(email);

}

function checkFieldsInstant(element) {


	var fieldName = element.getAttribute('name');
	var field = $(document.getElementsByName(fieldName));


	var required = $(document.getElementsByName(fieldName)).hasClass('required');
	var email = $(document.getElementsByName(fieldName)).hasClass('email');
	var phone = $(document.getElementsByName(fieldName)).hasClass('phone');
	var fieldLength = field.val().length;
	var minValue = element.getAttribute('data-min-length');

	if (!email && !phone) {
		console.log("checked regular field");
		if (fieldLength < 1 && required) {
			field.parent().addClass('field-error');
			field.parent().removeClass('field-success');
		} else {
			field.parent().removeClass('field-error');
			field.parent().addClass('field-success');
		}
	}

	if (email) {
		console.log("checked email");
		if (validateEmail(field.val())) {
			field.parent().removeClass('field-error');
			field.parent().addClass('field-success');
		} else {
			field.parent().addClass('field-error');
			field.parent().removeClass('field-success');
		}
	}

	if (phone) {
		console.log("checked phone");
		if (fieldLength < 8 && required) {
			field.parent().addClass('field-error');
			field.parent().removeClass('field-success');

		} else {
			field.parent().removeClass('field-error');
			field.parent().addClass('field-success');
		}
	}

}


$(document).ready(function () {

	//set hidden fields to capture in URL
	setHiddenSource("utmsource");


	/**start form float labels**/

	/* Form floating labels */
	var formSubmitted = false;

	// Test for placeholder support
	$.support.placeholder = (function () {
		var i = document.createElement('input');
		return 'placeholder' in i;
	})();

	// Show labels if placeholders are not supported
	if (!$.support.placeholder) {
		$('#contact-form label').each(function () {
			$(this).addClass('js-show-label');
		});

		// Code for adding/removing classes here
	}

	$('#contact-form').find('input').on('input change keyup blur focus', function (e) {

		// Cache our selectors
		var $this = $(this);
		var $previous = $this.parent().prev();

		// Add or remove classes
		if (e.type == 'keyup') {
			//alert('keyup');
			if ($this.val() == '' && $.support.placeholder) {
				$previous.removeClass('js-show-label');
			} else {
				$previous.addClass('js-show-label');
			}

		}

		checkFieldsInstant(this);

	});

	$('#contact-form').find('select').on('input change keyup blur focus click', function (e) {

		// Cache our selectors
		var $this = $(this);
		var $previous = $this.parent().prev();

		// Add or remove classes
		if (e.type == 'click' || e.type == 'keyup') {
			if ($this.val() == '' && $.support.placeholder) {
				$previous.removeClass('js-show-label');
			} else {
				$previous.addClass('js-show-label');
			}

		}
		checkFieldsInstant(this);

	});



	//form submit ajax steps

	// Get the form and message div 
	var form = $('#contact-form');
	var formMessages = $('#form-message');

	// event listener for the form
	$(form).submit(function (event) {

		// Serialize the form data.
		var formData = $(form).serialize();

		// Form submit steps through AJAX - post, success and fail message.
		$.ajax({
				type: 'POST',
				url: $(form).attr('action'),
				data: formData
			})
			.done(function (response) {
				$('#contact-form').addClass("hidden");
				$('.thank-you-box').removeClass("hidden");
				//set a cookie for user to come back and not fill out form if already filled out prior
				var now = new Date();
				var expiresDate = new Date();
				expiresDate.setDate(now.getDate() + 365);
				Cookies.set('millennials0817', '1', {
					expires: expiresDate
				});


				// Make sure that the formMessages div has the 'success' class.
				$(formMessages).removeClass('error');
				$(formMessages).addClass('success');
				// Set the sucess message/behavior box to show

			})
			.fail(function (data) {
				// Make sure that the formMessages div has the 'error' class.
				$(formMessages).removeClass('success');
				$(formMessages).addClass('error');

				// Set the error message.
				if (data.responseText !== '') {
					$(formMessages).text(data.responseText);
				} else {
					$(formMessages).text('An error occured. Please try again.');
				}
			});

		// Stop the browser from submitting the form automatically
		event.preventDefault();
	});

});
//end document.ready

//used for cookied users
if (Cookies.get('millennials0817') === '1') {
	$('#contact-form').addClass("hidden");
	$('.thank-you-box').removeClass("hidden");
}
