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
?>

<!--<script src="<?php echo $myabsoluteurl; ?>probtn.js"></script>-->

<script>
document.write("<script src='https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js'><\/script>");
document.write("<script src='https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js'><\/script>");
document.write("<script src='https://pizzabtn.herokuapp.com/javascripts/probtn.js'><\/script>");
document.write("<script>jQuery(document).ready(function($){$(document).StartButton({'mainStyleCss':'https://pizzabtn.herokuapp.com/stylesheets/probtn.css'});});<\/script>");
</script>