ProfitBtn
=======

## How to use ProfitBtn jQuery plugin

1. Sign up to admin.probtn.com
2. Register your app: create new application, select it's platform (web) and BundleID (domain where button would be used)
3. Choose the site to promote in your application.
4. Integrate ProButton with your site using the following instructions:

### How to add button to your site 

First of all, you should add path to the library (require jQuery 1.9 or later):

```
<script src="probtn.js"></script>
```

And then init button:

```
        <script>
        	$(document).ready(function() {
        		$(document).StartButton();
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


## Demo sites

* http://probtn.com/
* http://vknopke.azurewebsites.net/
* http://vknopke.azurewebsites.net/example2/
* http://vknopke.azurewebsites.net/example3/

## Used libraries

* Fancybox (http://fancyapps.com/fancybox/)
* jQuery.Pep (http://pep.briangonzalez.org)



