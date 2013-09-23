ProfitBtn
=======

Plugin parameters description
=======

* url - site url which would be open after button click
* buttonImage - url for default button image
* buttonDragImage - url for dragged button image
* buttonWidth - button width
* buttonHeight - button height
* buttonDragHeight - button height when button dragged
* buttonDragWidth - button width when button dragged
* closeButtonImage - image for close area
* closeButtonWidth - close area width
* closeButtonHeight - close area height
* closeButtonHoverHeight - close area height when button is under close area
* closeButtonHoverWidth - close area width when button is under close area
* fancyboxJsPath - путь к jquery.fancybox.js библиотеке
* fancyboxCssPath - путь к файлу стилей jquery.fancybox.css
* mainStyleCss - url to file with base button styles (css)
* hammerJsPath - url for hammer.js file
* jqueryPepPath - url for jquery.pep.js file
* buttonAnimationTimeAfterFancybox - animation duration for button before opened and after closed fancybox
* buttonOpacity - default button opacity 
* buttonDragedOpacity - dragged button opacity
* buttonCloseOpacity - close area opacity
* buttonActiveCloseOpacity - close area opacity when button is under close area

Default parameters
=======
            url: "http://app.ecwid.com/jsp/2557212/m", //site url address
            type: "iframe",
            buttonImage: "http://vknopke.azurewebsites.net/PizzaBtn/Images/gray.png",
            buttonDragImage: "http://vknopke.azurewebsites.net/PizzaBtn/Images/drag_gray.png",
            buttonWidth: "100px", // default button width
            buttonHeight: "100px", // default button height
            buttonDragHeight: "110px", //button height when user drag button
            buttonDragWidth: "110px", //button width when user drag button
            closeButtonImage: "http://vknopke.azurewebsites.net/PizzaBtn/Images/close.png",
            closeButtonWidth: "100px",
            closeButtonHeight: "100px",
            closeButtonHoverHeight: "110px",
            closeButtonHoverWidth: "110px",
            fancyboxJsPath: "http://vknopke.azurewebsites.net/libs/fancybox/jquery.fancybox.js",
            fancyboxCssPath: "http://vknopke.azurewebsites.net/libs/fancybox/jquery.fancybox.css",
            mainStyleCss: "http://vknopke.azurewebsites.net/style.css",
            hammerJsPath: "http://vknopke.azurewebsites.net/libs/jquery.hammer.min.js",
            jqueryPepPath: "http://vknopke.azurewebsites.net/libs/jquery.pep.js"
            buttonAnimationTimeAfterFancybox: 400,
            buttonOpacity: 0.8,
            buttonDragedOpacity: 1,
            buttonCloseOpacity: 0.6,
            buttonActiveCloseOpacity: 1

Example of using button plugin
=======

        <script>
        	$(document).ready(function() {
        		$(document).StartButton({url: "http://app.ecwid.com/jsp/2557212/m"});
        	});
        </script>

Demo sites
=======

* http://vknopke.azurewebsites.net/
* http://vknopke.azurewebsites.net/example2/

