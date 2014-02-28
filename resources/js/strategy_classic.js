window.strategy_classic = function($)
{
	$options = $('.options-subblock.options-classic');
	
	//PART 1 - DATA GATHERING AND ERROR CHECKING
		var $passwordInput = $('#password');
		var nb_chars = parseInt($options.find('.option-length').val().trim());
		var possible_chars = "";
		var ok = true;
		
		if (!isInt(nb_chars))
		{
			alert('Please specify a valid number of characters');
			$options.find('.option-length').addClass('error');
			
			ok = false;
		}
		
		$options.find('input.type-char:checked').each(function()
		{
			possible_chars += $(this).attr('data-chars');
		});
		
		var length = possible_chars.length; 
		if (length == 0)
		{
			alert('Please specify at least one type of character');
			$options.find('.options-type-char').addClass('error');

			ok = false;
		}
	
	//PART 2 - GENERATION
		function generate()
		{
			var pw = "";
			for (var i=0; i<nb_chars;++i)
			{
				var k = Math.floor((Math.random()*length)) % length;
				pw += possible_chars[k];
			}
			return pw;
		}
		if (ok === true)
		{
			$passwordInput.val(generate());
		}
		
	//PART 3 - ROBUSTNESS
		if (ok === true)
		{
			window.robustness($passwordInput.val(), possible_chars.length, nb_chars);
		}
};