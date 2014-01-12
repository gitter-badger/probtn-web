<?php
header("content-type: application/javascript");
?>

<?php
    error_reporting(E_ALL);

    function checkParamExist($paramName="", $paramKey="") {
        if ((isset($_GET[$paramKey])) && ($_GET[$paramKey]!="")) {
            return '\''.$paramName.'\': '.'\''.$_GET[$paramKey].'\',';
        } else {
            return "";
        }
    }
?>

FloatingButtonFunc();

function runYourFunctionWhenJQueryIsLoaded() {
    if (window.$){      
        FloatingButtonFunc();
    } else {
        setTimeout(runYourFunctionWhenJQueryIsLoaded, 50);
    }
}

function FloatingButtonFunc() {
    jQuery(document).ready(function() {
	    jQuery(document).StartButton({
		    "mainStyleCss": "https://pizzabtn.herokuapp.com/stylesheets/probtn.css",
		    "jqueryPepPath": "<?php echo $_GET["jqueryPepPath"]; ?>",
            <?php echo checkParamExist("ButtonImage","probtn_image") ?>
            <?php echo checkParamExist("ButtonDragImage","probtn_image") ?>
            <?php echo checkParamExist("ButtonOpenImage","probtn_image") ?>
            <?php echo checkParamExist("ButtonInactiveImage","probtn_image") ?>
            <?php echo checkParamExist("ContentURL","probtn_contenturl") ?>
            <?php echo checkParamExist("HintText","probtn_hinttext") ?>
            'domain': 'wordpress.plugin'
	    });
    });
}

/*
<?php
  print_r($_GET);  
?>
*/