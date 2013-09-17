vknopke
=======

Описание параметров плагина
=======

* url - адрес сайта для открытия по нажатию кнопки
* buttonImage - ссылка на изображение кнопки
* buttonDragImage - ссылка на изображение перетаскиваемой кнопки
* buttonWidth - ширина кнопки
* buttonHeight - высота кнопки
* buttonDragHeight - высота кнопки при перетаскивании
* buttonDragWidth - ширина кнопки при перетаскивании
* closeButtonImage - изображение области закрытия кнопки
* closeButtonWidth - щирина области закрытия
* closeButtonHeight - высота области закрытия
* closeButtonHoverHeight - высота области закрытия при наведении кнопки
* closeButtonHoverWidth - ширина области закрытия при наведении кнопки
* fancyboxJsPath - путь к jquery.fancybox.js библиотеке
* fancyboxCssPath - путь к файлу стилей jquery.fancybox.css
* mainStyleCss - файл с основными стилями кнопки
* hammerJsPath - путь к библиотеке hammer.js
* jqueryPepPath - путь к библиотеке jquery.pep.js
* buttonAnimationTimeAfterFancybox - длительность анимации кнопки до открытия и после закрытия fancybox
* buttonOpacity - прозрачность кнопки по умолчанию
* buttonDragedOpacity - прозрачность кнопки при перетаскивании
* buttonCloseOpacity - прозрачность области закрытия
* buttonActiveCloseOpacity - прозрачность области закрытия при наведении кнопки

Параметры по умолчанию
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

Пример вызова кнопки
=======

        <script>
        	$(document).ready(function() {
        		$(document).StartButton({url: "http://app.ecwid.com/jsp/2557212/m"});
        	});
        </script>

Пример сайта с кнопкой
=======

* http://vknopke.azurewebsites.net/
* http://vknopke.azurewebsites.net/example2/

