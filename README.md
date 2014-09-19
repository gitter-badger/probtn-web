ProfitBtn
=======

## How to use ProfitBtn jQuery plugin

1. Sign up to admin.probtn.com
2. Register your app: create new application, select it's platform (web) and BundleID (domain where button would be used)
3. Choose the site to promote in your application.
4. Integrate ProButton with your site using the following instructions:

### How to add button to your site 

First of all, you should add path to the library. Make sure you also add the jQuery library (require jQuery 1.9 or later). For example:

```
<head>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="/probtn.js"></script>
</head>
```

And then init button:

```
        <script>
        	$(document).ready(function() {
        		$(document).StartButton({
        			'mainStyleCss':'/style.css'
        		});
        	});
        </script>
```

#### Rewrite default path for libs

You can set your own path for plugin additional libraries and path, for example:

```
jQuery(document).StartButton({
		"mainStyleCss": "https://pizzabtn.herokuapp.com/stylesheets/probtn.css",
		"jqueryPepPath": "https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js",
		"fancyboxJsPath": "https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js",
		"fancyboxCssPath": "https://pizzabtn.herokuapp.com/stylesheets/jquery.fancybox.css",
	});
```

Params list:
* mainStyleCss - path for button style.css file
* jqueryPepPath - path for jquery.pep.js file
* fancyboxJsPath: path for jquery.fancybox.js
* fancyboxCssPath: path for styles https://pizzabtn.herokuapp.com/stylesheets/jquery.fancybox.css

### How to add button to your site (simple way when your site don't have jquery)

First of all, you should add path to the library:

```
<script src="https://pizzabtn.herokuapp.com/javascripts/script.js"></script>
```

And thats all.

### How to add button to your site (simple way when your site have jquery)

First of all, you should add path to the library:

```
<script src="https://pizzabtn.herokuapp.com/javascripts/script-which-dont-inject-jquery.js"></script>
```

And thats all.

## Update library at your site

1. Copy probtn.js and style.css to your site

If previous version of file called pizzabtn.js your should:

2. Delete pizzabtn.js
3. In code of your page rename pizzabtn.js to probtn.js

## Add iframe commands support

You can add support of functions, which allow you to control button and modal window state from page shown in button's iframe.
To add this support you need include js code from iframe.js file at your page (example of integration is shown at iframe.html page with available commands).

```
	var proBtn = {
		hide: function() {
			try {
				parent.proBtn.hide();
				parent.proBtn.hideContent();
			} catch(ex) {}
		},
		hideContent: function() {
			try {			
			parent.proBtn.hideContent(); } catch(ex) {}
		},
		performAction: function() {
			try { parent.proBtn.performAction(); } catch(ex) {}
		}
	}

	
## Add statistics send support (from opened in new tab page)

You can add statistics sending support (for page opened in new tab).
To add this support you need include js code from stats_probtn_send.js file at your page (example of integration is shown at iframe.html ).

```
var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    	// If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    	// If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    	// If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} ();

$(document).ready(function() {
	var XProBtnToken = "b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b";
	if (QueryString.CampaignID!==null) {
                    $.getJSON("https://pizzabtn.herokuapp.com/1/functions/performAction?DeviceType=web&DeviceUID="+QueryString._ProBtnDeviceUID+"&X-ProBtn-Token="+XProBtnToken+"&CampaignID="+QueryString.CampaignID+"&random="+Math.random()+"&callback=?",
                        function(data) {
                            console.log(data);
                        }
                    );
    }
});
```

## Demo sites

* http://probtn.com/
* http://probtnexample1.azurewebsites.net/
* http://vknopke.azurewebsites.net/
* http://vknopke.azurewebsites.net/example2/
* http://vknopke.azurewebsites.net/example3/

## Used libraries

* Fancybox (http://fancyapps.com/fancybox/)
* jQuery.Pep (http://pep.briangonzalez.org)

## FAQ

Q: What if I don't want that on every page on my site?

A: You can manually add code
```
jQuery(document).StartButton
```
only on nessesary pages. And if you use Joomla module, you can set in settings nessesary menu items, where button would be shown.

Q: Or what if I want different ones on different pages?

A: Then you can manually override button settings. For example:
```
jQuery(document).StartButton({
		"mainStyleCss": "https://pizzabtn.herokuapp.com/stylesheets/probtn.css",
		"ContentURL": "http://example.com"
	});
```
Will ovveride ContentURL param and on button click would be opened fancybox with http://example.com site.

Q: Or what if I want several on one page?

A: Such option isn't available at current version (case several buttons on one page will case some conflicts).


## Wordpress example:
![ScreenShot](https://dl.dropboxusercontent.com/u/3482508/wordpress-screenshot-1.gif)
