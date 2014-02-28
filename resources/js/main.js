window.isInt = function(n) {
	return typeof n === 'number' && n % 1 == 0;
};
//------------------------------------------------------------------------------

window.toKiloNotation = function(i) {
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

window.toTimeReadable = function(seconds) {
	var s = seconds % 60; seconds = Math.floor(seconds/60);
	var m = seconds % 60; seconds = Math.floor(seconds/60);
	var h = seconds % 24; seconds = Math.floor(seconds/24);
	var d = seconds % 365; seconds = Math.floor(seconds/365);
	var y = seconds/* % 100; seconds = Math.floor(seconds/100);
	var c = seconds*/;

	/*if (c > 0)
		return ""+c+" centuries, "+y+" years";
	else*/ if (y > 0)
	{
		if (y > 1000)
			y = Math.floor(y/1000)+"M";
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
			//'sentence':strategy_sentence, 
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
		strategies[current_strategy]();
		$('.robustness-block').css('opacity', 1);
	});
})(jQuery);