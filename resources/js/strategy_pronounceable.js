window.strategy_pronounceable = function($)
{
	//This should be grown up to get stronger passwords
	var morphemes = [
		'aa',
		'add',
		'ai',
		'am',
		'ar',
		'bai',
		'bim',
		'bin',
		'bme',
		'bor',
		'bye',
		'caf',
		'cas',
		'cen',
		'cob',
		'cpo',
		'cir',
		'dag',
		'dec',
		'den',
		'dew',
		'dj',
		'dli',
		'don',
		'doo',
		'dud',
		'eam',
		'eda',
		'eld',
		'emp',
		'ep',
		'esu',
		'etc',
		'exc',
		'ezr',
		'fan',
		'fob',
		'fum',
		'fun',
		'fur',
		'fur',
		'fut',
		'gnu',
		'has',
		'heh',
		'his',
		'hom',
		'ic',
		'id',
		'ide',
		'io',
		'is',
		'jag',
		'jon',
		'jos',
		'ka',
		'kab',
		'ket',
		'lam',
		'lem',
		'lib',
		'loy',
		'lag',
		'lu',
		'lud',
		'mag',
		'man',
		'man',
		'mee',
		'meg',
		'mil',
		'mod',
		'nup',
		'nee',
		'nor',
		'nos',
		'epa',
		'oak',
		'ode',
		'ol',
		'paw',
		'pay',
		'piz',
		'pol',
		'pow',
		'pas',
		'pt',
		'pwd',
		'qed',
		'qag',
		'ram',
		'rot',
		'rat',
		'rar',
		'sam',
		'sgd',
		'sib',
		'sig',
		'sir',
		'sob',
		'soc',
		'stu',
		'tao',
		'tay',
		'tea',
		'ton',
		'toy',
		'uda',
		'uru',
		'usk',
		'vif',
		'via',
		'vie',
		'wab',
		'wan',
		'wap',
		'wat',
		'who',
		'wog',
		'woo',
		'wot',
		'xat',
		'zoe',
		'zof',
		'zoo',
		'zot',
		'zou',
	];
	
	
	$options = $('.options-subblock.options-pronounceable');
	
	//PART 1 - DATA GATHERING AND ERROR CHECKING
		var $passwordInput = $('#password');
		var nb_chars = parseInt($options.find('.option-length').val().trim());
		var ok = true;

		var is_capital = $options.find('#option-pronounceable-capital').is(':checked');
		var leet_mode = $options.find('#option-pronounceable-leet-mode').is(':checked');
		
		if (!isInt(nb_chars))
		{
			alert('Please specify a valid number of characters');
			$options.find('.option-length').addClass('error');
			
			ok = false;
		}
		
		var length = morphemes.length;
	
	//PART 2 - GENERATION
		function generate()
		{
			var pw = "";
			while(pw.length < nb_chars)
			{
				//pw += possible_chars[k];
					var k = Math.floor((Math.random()*length)) % length;
					var toadd = morphemes[k];
					
					if (is_capital)
					{
						toadd = applyCapitals(toadd);
					}
					
					if (leet_mode && Math.random() < 0.5)
					{
						toadd = to1337Mode(toadd);
					}
					pw += toadd;
			}
			return pw.substring(0, nb_chars);
		}
		if (ok === true)
		{
			$passwordInput.val(generate());
		}
		
	//PART 3 - ROBUSTNESS
		if (ok === true)
		{
			var charset = 26;
			if (is_capital)
				charset += 10;
			if (leet_mode)
				charset += 9; //'9' is not in leet mode

			window.robustness($passwordInput.val(), charset, nb_chars);
		}
};