window.strategy_classic = function()
{
	//PART 1 - DATA GATHERING AND ERROR CHECKING
		var $passwordInput = $('#password');
		var nb_chars = parseInt($('#option-length-classic').val().trim());
		var possible_chars = "";
		var ok = true;
		
		if (!isInt(nb_chars))
		{
			alert('Please specify a valid number of characters');
			$('#option-length-classic').addClass('error');
			
			ok = false;
		}
		
		$('input.type-char:checked').each(function()
		{
			possible_chars += $(this).attr('data-chars');
		});
		
		var length = possible_chars.length; 
		if (length == 0)
		{
			alert('Please specify at least one type of character');
			$('#options-type-char').addClass('error');

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
			function bf_time(bf_cases, bf_speed)
			{
				return toTimeReadable(Math.ceil(bf_cases / bf_speed));
			}
			
			//Brute-force estimate
				var bf_cases = Math.pow(possible_chars.length, nb_chars);
				var bf_speed = 100000000; //100M/s
				var sha1_speed = 710000000; //710M/s
				var md5_speed = 2414000000; //2414M/s

				$('#bf-cases').text(bf_cases.toExponential(3));
				
				$('#bf-time').text(bf_time(bf_cases, bf_speed));
				$('#bf-speed').text(toKiloNotation(bf_speed));

				$('#sha1-time').text(bf_time(bf_cases, sha1_speed));
				$('#sha1-speed').text(toKiloNotation(sha1_speed));

				$('#md5-time').text(bf_time(bf_cases, md5_speed));
				$('#md5-speed').text(toKiloNotation(md5_speed));
		}
};