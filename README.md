ProfitBtn
=======

## How to use ProfitBtn jQuery plugin

1. Sign up to admin.probtn.com
2. Register your app: create new application, select it's platform (web) and BundleID (domain where button would be used)
3. Choose the site to promote in your application.
4. Integrate ProButton with your site using the following instructions:

### How to add button to your site

If you have jQuery at your site, add code

```
<script>
$(document).ready(function() { 
         $.getScript('https://pizzabtn.herokuapp.com/javascripts/probtn.js', function () {
             $(document).ready(function() {
                 $(document).StartButton({'mainStyleCss':'https://pizzabtn.herokuapp.com/stylesheets/probtn.css'});
             });
         });
});
</script>
```

If don't or you don't know, you can add (for example before ```</body>```) (without async call of this script):

```
<script src="//cdnjs.cloudflare.com/ajax/libs/probtn/1.0.1/includepb.min.js"></script>
```

And thats all.

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

## Documentation

More documentation about button could be found at wiki - https://github.com/probtn/probtn-web/wiki/Button-documentation

## Wordpress example:
![ScreenShot](https://dl.dropboxusercontent.com/u/3482508/wordpress-screenshot-1.gif)
