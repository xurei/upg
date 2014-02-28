window.robustness = function(password, charset, nb_chars)
{
	function bf_time(bf_cases, bf_speed)
	{
		return Math.ceil(bf_cases / bf_speed);
	}
	
	//Brute-force estimate
		var bf_cases = Math.pow(charset, nb_chars);
	//Speed averaged from oldhashcat (http://hashcat.net/oclhashcat/)
		var M = 1000000;
		var bf_speed     = 1000000000; //1000M/s
		var md5_speed    = (8089 + 2414 + 10742 + 1838 + 81549)/5*M; //2414M/s
		var sha1_speed   = (2510 + 710 + 3809 + 591 + 27333)/5*M;
		var sha256_speed = (1032 + 347 + 1479 + 231 + 11231)/5*M;

		$('#bf-cases').text(bf_cases.toExponential(3));

		var t = bf_time(bf_cases, md5_speed);
		$('#md5-time').text(toTimeReadable(t));
		$('#md5-speed').text(toKiloNotation(md5_speed));
		
		var t = bf_time(bf_cases, sha1_speed);
		$('#sha1-time').text(toTimeReadable(t));
		$('#sha1-speed').text(toKiloNotation(sha1_speed));
		
		var t = bf_time(bf_cases, sha256_speed);
		$('#sha256-time').text(toTimeReadable(t));
		$('#sha256-speed').text(toKiloNotation(sha256_speed));
		
	//Rainbow table attacks
		var hash = md5(password);
		$('#md5-val').val(hash);
		$('#md5-revert').attr('href', 'http://www.md5rainbow.com/'+hash);

		hash = Sha1.hash(password);
		$('#sha1-val').val(hash);
		
		hash = SHA256(password);
		$('#sha256-val').val(hash);
		//$passwordInput.val(), 
		/*$.ajax({
			url: "revert_md5.php",
			success: function(data)
			{
				alert("ok");
				console.log(data);
			},
			error: function(data, b, c)
			{
				alert("nok");
				console.log(data);
				console.log(b);
				console.log(c);
			},
			
		})*/
};