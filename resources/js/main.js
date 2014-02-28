window.isInt = function(n) {
	return parseInt(n) == n;
};
//------------------------------------------------------------------------------

window.toKiloNotation = function(i) {
	if (i > 1000000000000000)
		return i;
	if (i > 1000000000000)
		return Math.floor(i/100000000000)/10+"T";
	if (i > 1000000000)
		return Math.floor(i/100000000)/10+"G";
	if (i > 1000000)
		return Math.floor(i/100000)/10+"M";
	if (i > 1000)
		return Math.floor(i/100)/10+"k";
	return i;
}
//------------------------------------------------------------------------------

window.applyCapitals = function(str)
{
	var tmp = "";
	var ratio = 0.4; //Augment this to get more uppercase letters
	for (var j=0; j<str.length; ++j)
	{
		if (Math.random() < ratio)
			tmp += str[j].toUpperCase();
		else
			tmp += str[j];
	}
	return tmp;
}
//------------------------------------------------------------------------------

window.to1337Mode = function(str)
{
	var tmp = "";
	var ratio = 0.5; //Augment this to get more uppercase letters
	for (var j=0; j<str.length; ++j)
	{
		if (Math.random() < ratio)
			tmp += str[j].replace(/[oO]/,'0').replace(/[li]/,'1').replace(/[Zz]/,'2').replace(/[Ee]/,'3').replace(/[Aa]/,'4').replace(/[Ss]/,'5').replace(/[Gg]/,'6').replace(/[Tt]/,'7').replace(/[Bb]/,'8');
		else
			tmp += str[j];
	}
	return tmp;	
}
//------------------------------------------------------------------------------

window.toTimeReadable = function(seconds) {
	var s = seconds % 60; seconds = Math.floor(seconds/60);
	var m = seconds % 60; seconds = Math.floor(seconds/60);
	var h = seconds % 24; seconds = Math.floor(seconds/24);
	var d = seconds % 365; seconds = Math.floor(seconds/365);
	var y = seconds/* % 100; seconds = Math.floor(seconds/100);
	var c = seconds*/;

	if (y > 0)
	{
		if (y < 9999 && y > 1000)
		{
			y = Math.floor(y/1000)+"M";
		}
		return ""+y+" years, "+d+" days";
	}
	else if (d > 0)
		return ""+d+" days, "+h+" hours";
	else if (h > 0)
		return ""+h+" hours, "+m+" min";
	else if (m > 0)
		return ""+m+"min, "+s+" s";
	else
		return ""+s+" s";
};
//------------------------------------------------------------------------------
	
(function($)
{
	var $optionsBtn = $('#options-btn');
	var $generateBtn = $('#generate-btn');
//------------------------------------------------------------------------------
	
	$('.toggle-btn').click(function()
	{
		console.log('toggle-btn');
		$(this).toggleClass('on');
	});
	
	var strategies = 
	{
			'classic':strategy_classic,
			'pronounceable':strategy_pronounceable, 
			'sentence':strategy_sentence, 
	}
	var current_strategy = 'classic';

	$('.type-btn').click(function()
	{
		var $this = $(this);
		$('.options-block').css('opacity', 1);
		if ($this.hasClass('on'))
		{
			$('.type-btn').removeClass('on');
			$this.addClass('on');
			$('.options-subblock').removeClass('active');
			current_strategy = $this.attr('data-target');
			$('.options-subblock.options-'+current_strategy).addClass('active');
		}
	});
	
	$generateBtn.click(function()
	{
		strategies[current_strategy]($);
		$('.robustness-block').css('opacity', 1);
	});
})(jQuery);