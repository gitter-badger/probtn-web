jQuery(document).ready(function() {
	jQuery(document).StartButton({
		"mainStyleCss": "<?php echo $_GET["mainStyleCss"]; ?>",
		"jqueryPepPath": "<?php echo $_GET["jqueryPepPath"]; ?>",
		"fancyboxJsPath": "<?php echo $_GET["fancyboxJsPath"]; ?>",
		"fancyboxCssPath": "<?php echo $_GET["fancyboxCssPath"]; ?>",
	});
});
