<?php
/**
 * @package    probtnmodule
 * @subpackage Base
 * @author     hintsolutions {@link hhttp://m0rg0t.com}
 * @author     Created on 04-Nov-2013
 * @license    GNU/GPL
 */

//-- No direct access
defined('_JEXEC') || die('=;)');

$myabsoluteurl=JURI::base()."/modules/mod_probtnmodule/";

$source = $params->get('source', '0');
$image = $params->get('probtn_image', 'http://pizzabtn.herokuapp.com/Chart_button_grey_norm.png');
$probtn_contenturl = $params->get('probtn_contenturl', 'http://probtn.com');
$probtn_hinttext = $params->get('probtn_hinttext', 'Press me');
?>
<!--<script src="<?php echo $myabsoluteurl; ?>probtn.js"></script>-->
<script>
LoadAll();

function LoadAll() {
        console.log("Loaded0");
		InjectScript("https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js", function() {
			InjectScript("https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js", function() {
				InjectScript("https://pizzabtn.herokuapp.com/javascripts/probtn.js", function() {
					//$.noConflict();
                    console.log("Loaded1");
					jQuery(document).ready(function() {	
                        console.log("Loaded2");			    
					    jQuery(document).StartButton({
                            <?php if ($source=='1') {
                                echo '"domain": "joomla.module",';
                                echo '"ButtonImage": "'.$image.'",';
                                echo '"ButtonDragImage": "'.$image.'",';
                                echo '"ButtonOpenImage": "'.$image.'",';
                                echo '"ButtonInactiveImage": "'.$image.'",';            
                                echo '"ContentURL": "'.$probtn_contenturl.'",';
                                echo '"HintText": "'.$probtn_hinttext.'",';
                            }; ?>
				            "mainStyleCss": "https://pizzabtn.herokuapp.com/stylesheets/probtn.css",
				            "jqueryPepPath": "https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js",
				            "fancyboxJsPath": "https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js",
				            "fancyboxCssPath": "https://pizzabtn.herokuapp.com/stylesheets/jquery.fancybox.css",
				        });
                    });
				});
			});
		});
}

function InjectScript(name, callback) {
	var s = document.createElement('script');
	s.src = name;
	s.onload = function() {
		try {
            console.log("callback " + name);
			callback();
		} catch(ex) {};
		//this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(s);
}

</script>