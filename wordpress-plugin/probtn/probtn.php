<?php
/**
 * Plugin Name: Profit Button
 * Plugin URI: http://probtn.com
 * Description: Profit Button is an interactive element that used to show custom content inside your application. If the button is tapped then the popup with Browser would open. The url in the Browser is set using settings on our server.
 * Version: 1.0
 * Author: hintsolutions
 * Author URI: http://probtn.com
 * License: -
 */
 
 /**
 * Register with hook 'wp_enqueue_scripts', which can be used for front end CSS and JavaScript
 */
add_action( 'wp_enqueue_scripts', 'probtn_add_my_stylesheet' );

/**
 * Enqueue plugin style-file
 */
function probtn_add_my_stylesheet() {
    // Respects SSL, Style.css is relative to the current file
    wp_register_style( 'probtn-style', plugins_url('style.css', __FILE__) );
    wp_enqueue_style( 'probtn-style' );
	
	wp_register_script( 'probtn-script', plugins_url('pizzabtn.js', __FILE__) );
	wp_enqueue_script( 'probtn-script' );
	
	$mainStyleCss = parse_url(plugins_url('style.css', __FILE__));
	$jqueryPepPath = parse_url(plugins_url('libs/jquery.pep.min.js', __FILE__));
	$fancyboxJsPath = parse_url(plugins_url('libs/fancybox/jquery.fancybox.js', __FILE__));
	$fancyboxCssPath = parse_url(plugins_url('libs/fancybox/jquery.fancybox.css', __FILE__));
	
	wp_register_script( 'probtn-start-script', plugins_url("start_probtn.php?mainStyleCss=".$mainStyleCss["path"]."&jqueryPepPath=".$jqueryPepPath["path"]."&fancyboxJsPath=".$fancyboxJsPath["path"]."&fancyboxCssPath=".$fancyboxCssPath["path"]."", __FILE__) );
	wp_enqueue_script( 'probtn-start-script' );
}


/** Step 2 (from text above). */
add_action( 'admin_menu', 'probtn_menu' );

/** Step 1. */
function probtn_menu() {
	add_options_page( 'Profit Button options', 'Profit Button', 'manage_options', 'probtn-identifier1', 'probtn_options' );
}

/** Step 3. */
function probtn_options() {
	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	echo '<div class="wrap">';
	echo '<iframe src="http://admin.probtn.com/" width="100%" height="700" style="width: 100%; height: 700px;"/>';
	echo '</div>';
}
?>
