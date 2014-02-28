window.strategy_pronounceable = function()
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
		'knt',
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
		'ml',
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
		
		$options.find('input.type-char:checked').each(function()
		{
			console.log(this);
		});
		
		var length = morphemes.length;
	
	//PART 2 - GENERATION
		function generate()
		{
			var pw = "";
			var is_vowel = Math.random() > 0.5;
			while(pw.length < nb_chars)
			{
				//pw += possible_chars[k];
					var k = Math.floor((Math.random()*length)) % length;
					var toadd = morphemes[k];
					var tmp = "";
					
					/*var nb_modes = 0.0;
					nb_modes += is_capital ? 1.0 : 0;
					nb_modes += leet_mode ? 1.0 : 0;*/
					var ratio = 0.4;
					
					var seed = Math.random();
					
					for (var j=0; j<toadd.length; ++j)
					{
						var added = false;
						if (is_capital && seed < ratio)
							tmp += toadd[j].toUpperCase();
						else
							tmp += toadd[j];
					}
					if (leet_mode && Math.random() < 0.5)
					{
						tmp = tmp.replace(/[oO]/,'0').replace(/[li]/,'1').replace(/[Zz]/,'2').replace(/[Ee]/,'3').replace(/[Aa]/,'4').replace(/[Ss]/,'5').replace(/[Gg]/,'6').replace(/[Tt]/,'7').replace(/[Bb]/,'8');
					}
					toadd = tmp;
					pw += toadd;
				
				//Switch 
					is_vowel = !is_vowel;
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
			function bf_time(bf_cases, bf_speed)
			{
				return toTimeReadable(Math.ceil(bf_cases / bf_speed));
			}
			
			var charset = 26;
			if (is_capital)
				charset += 10;
			if (leet_mode)
				charset += 9; //'9' is not in leet mode
			
			//Brute-force estimate
				var bf_cases = Math.pow(charset, nb_chars);
				//Because there are less words, only 33% approx sequences would be pronounceable
				bf_cases *= 0.33;
				
				var bf_speed = 1000000000; //100M/s
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