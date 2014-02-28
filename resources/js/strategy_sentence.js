window.strategy_sentence = function($)
{
	$options = $('.options-subblock.options-sentence');
	
	//PART 1 - DATA GATHERING AND ERROR CHECKING
		var $passwordInput = $('#password');
		var nb_chars = parseInt($options.find('.option-length').val().trim());
		var ok = true;

		var is_capital = $options.find('#option-pronounceable-capital').is(':checked');
		var leet_mode = $options.find('#option-pronounceable-leet-mode').is(':checked');
		
		var words = window.strategy_sentence_words;
		if (words == undefined)
		{
			alert('Data is still loading...');
		}
		
		if (!isInt(nb_chars))
		{
			alert('Please specify a valid number of characters');
			$options.find('.option-length').addClass('error');
			
			ok = false;
		}
		
		var length = words.length;
	
	//PART 2 - GENERATION
		function generate()
		{
			var pw = "";
			var sep = "";
			for (var i=0; i!=nb_chars; ++i)
			{
				//pw += possible_chars[k];
					var k = Math.floor((Math.random()*length)) % length;
					var toadd = words[k];
					if (is_capital)
					{
						toadd = applyCapitals(toadd);
					}
					
					if (leet_mode && Math.random() < 0.5)
					{
						console.log("leet");
						toadd = to1337Mode(toadd);
					}
					pw += sep + toadd;
				
				sep = " "; 
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
			var charset = 27;

			window.robustness($passwordInput.val(), charset, $passwordInput.val().length);
		}
};

//Loading the words list asynchronously, it's about 1M
(function($)
{
	$options = $('.options-subblock.options-sentence');
	
	$(document).ready(function(){
		$.ajax({
			url: "resources/js/words.txt",
			success: function(data)
			{
				$('#loading-box').hide();
				window.strategy_sentence_words = data.split("\n");
				$options.find('.nb-words').text(window.strategy_sentence_words.length);
				
				var change_length = function()
				{
					var $this = $(this);
					setTimeout(function()
					{
						var val = $this.val();
						if (isInt(val))
						{
							var nb_cases = Math.pow(window.strategy_sentence_words.length, val);
							$options.find('.nb-cases').text(toKiloNotation(nb_cases));
							console.log(val);
						}
					}, 20);
				};
				$options.find('.option-length').keypress(change_length);
			}
		});
	});
})(jQuery);