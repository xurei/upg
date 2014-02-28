<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>xurei Ultimate Password Generator</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="resources/css/main.css">
        <link rel="stylesheet" href="resources/js/passwordgenerator.js">
        <script src="resources/js/modernizr-2.6.2.min.js"></script>
        <script src="resources/js/plugin.js"></script>
        <script src="resources/js/jquery-1.10.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        
        <div class="w1000">
        	<h1>Ultimate Password Generator</h1>
        	<div class="row-fluid">
        		<div class="main-block password-block span12">
       				<input type="text" id="password" placeholder="Your generated password">
        		</div>
        	</div>
        	<form action="javascript:void(0)">
	        	<div class="row-fluid">
	        		<div class="main-block span4">
	       				<h2>1. Select type</h2>
       					<div class="password-type-block">
	       					<div class="toggle-btn type-btn" data-target="classic">Classic password</div>
	       					<p class="aleft">The good old classical letters, numbers and symbols password generator</p>
       					</div>
       					<div class="password-type-block">
	       					<div class="toggle-btn type-btn" data-target="pronounceable">Pronounceable password</div>
	       					<p class="aleft">This generator tries to altern vowels and consonants to make the password easier to pronounce and remember<br> 
	       					</p>
       					</div>
       					<!-- 
       					<div class="password-type-block">
	       					<div class="toggle-btn type-btn" data-target="sentence">Sentence password</div>
	       					<p class="aleft">An easy but strong password made of words. References : <ul><li> <a target="_blank" href="http://xkcd.com/936/">this XKCD comics</a></li>
	       					<li><a target="_blank" href="http://writing-program.uchicago.edu/toys/randomsentence/index.htm">writing-program.uchicago.edu</a></li>
	       					</ul></p>
       					</div>
       					 -->
	        		</div>
	        		<!-- --------------------------------------------------------- -->
	        		<div class="main-block options-block span4">
	       				<h2>2. Select options and generate</h2>
	       				
	       				<div class="options-subblock options-classic">
		       				<h3>Number of characters</h3>
		       				<input type="text" class="option-length" value="10">
		       				
		       				<h3>Type of characters</h3>
		       				<fieldset class="options-type-char">
		       					<input type="checkbox" class="type-char" id="option-classic-letters" data-chars="azertyuiopqsdfghjklmwxcvbn" checked> <label for="option-classic-letters">Letters</label><br>
		       					<input type="checkbox" class="type-char" id="option-classic-capital" data-chars="AZERTYUIOPQSDFGHJKLMWXCVBN"> <label for="option-classic-capital">Capital Letters</label><br>
		       					<input type="checkbox" class="type-char" id="option-classic-numbers" data-chars="0123456789"> <label for="option-classic-numbers">Numbers</label><br>
		       					<input type="checkbox" class="type-char" id="option-classic-symbols" data-chars="&gt;&lt;&amp;_-@=+*/$%&!:;?.*^[](){}\\|`#~"> <label for="option-classic-symbols">Symbols</label><br>
		       					<input type="checkbox" class="type-char" id="option-classic-whitesp" data-chars=" "> <label for="option-classic-whitesp">White Space</label><br>
		       				</fieldset>
	       				</div>
	       				
	       				
	       				<div class="options-subblock options-pronounceable">
		       				<h3>Number of characters</h3>
		       				<input type="text" class="option-length" value="10">
		       				
		       				<h3>Type of characters</h3>
		       				<fieldset id="options-type-char">
		       					<!-- <input type="checkbox" class="type-char" id="option-pronounceable-capital" data-vowels="AEIOUY" data-consonants="ZRTPQSDFGHJKLMWXCVBN"> <label for="option-pronounceable-capital">Capital Letters</label><br>
		       					<input type="checkbox" class="type-char" id="option-pronounceable-numbers" data-vowels="0134" data-consonants="125678"> <label for="option-pronounceable-numbers">Numbers</label><br>
		       					<input type="checkbox" class="type-char" id="option-pronounceable-whitesp" data-vowels=" " data-consonants=" "> <label for="option-pronounceable-whitesp">White Space</label><br>
		       					 -->
		       					<input type="checkbox" class="type-char" id="option-pronounceable-capital" data-vowels="AEIOUY" data-consonants="ZRTPQSDFGHJKLMWXCVBN"> <label for="option-pronounceable-capital">Capital Letters</label><br>
		       					<input type="checkbox" class="type-char" id="option-pronounceable-leet-mode" data-vowels="0134" data-consonants="125678"> <label for="option-pronounceable-leet-mode">1337 mode</label><br>
		       				</fieldset>
	       				</div>
	       				
	       				
	       				<div class="options-subblock options-sentence">
		       				<h3>Number of words</h3>
		       				<input type="text" id="option-length-sentence">
		       				
		       				<h3>Extras</h3>
		       				<fieldset>
		       					<input type="checkbox" id="option-punctuation"> <label for="option-punctuation">Punctuation</label><br>
		       				</fieldset>
		       			</div>
	       				<div class="acenter">
	       					<input type="submit" class="btn" id="generate-btn" value="Generate !">
	       				</div>
	        		</div>
	        		<!-- --------------------------------------------------------- -->
	        		
	        		<div class="main-block robustness-block span4 acenter">
	       				<h2>3. Test Robustness</h2>
	       					<div class="acenter"><span id="bf-cases"></span><br>different passwords with this setup</div>
	       				<h3>Brute force</h3>
	       					<span id="bf-time"></span> at <span id="bf-speed"></span> guesses/s
	       				<h3>MD5</h3>
	       					<span id="md5-time"></span> at <span id="md5-speed"></span> guesses/s<br>
	       					(speed from <a target="_blank" href="http://hashcat.net/oclhashcat/">oclhashcat</a>)
	       				<h3>SHA-1</h3>
	       					<span id="sha1-time"></span> at <span id="sha1-speed"></span> guesses/s<br>
	       					(speed from <a target="_blank" href="http://hashcat.net/oclhashcat/">oclhashcat</a>)
	        		</div>
	        	</div>
	        </form>
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="resources/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="resources/js/plugins.js"></script>
        <script src="resources/js/strategy_classic.js"></script>
        <script src="resources/js/strategy_pronounceable.js"></script>
        <script src="resources/js/main.js"></script>
        
        <?php if (file_exists("/home/olivier")): ?>
        	<script src="../cssrefresh.js"></script>
        <?php endif?>
        
        <footer>
        	<div class="w1000">Ultimate Password Generator - by xurei &copy; http://www.xurei-design.be/upg/</div>
        </footer>
    </body>
</html>