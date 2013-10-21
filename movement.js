var privateDataClass = function() {
	this.startX = 0;			// mouse starting positions
	this.startY = 0;			
	
	this.offsetX = 0;			// current element offset
	this.offsetY = 0;			// needs to be passed from OnMouseDown to OnMouseMove
	
	this.dragElement = null;
	
	this.oldZIndex = 0;			// we temporarily increase the z-index during drag
	
	this.prevTime = null;
	
	this.prevX = 0;
	this.prevY = 0;
	
	this.velociryX = 0;
	this.velocityY = 0;
	
	this.timeInterval = 1000. * 1. / 60.;
	
	this.timeToAnimate = 0;
	
	this.timerId = null;
}

var _data = new privateDataClass();

//--------------------------//
		
function OnMouseDown(e) {
    // IE is retarded and doesn't pass the event object
    if (e == null) 
        e = window.event; 
    
    // IE uses srcElement, others use target
    var target = e.target != null ? e.target : e.srcElement;
    
    target.className == 'drag' ? 'draggable element clicked' : 'NON-draggable element clicked';

    // for IE, left click == 1
    // for Firefox, left click == 0
    if ((e.button == 1 && window.event != null ||  e.button == 0) && target.className == 'drag') {
        // grab the mouse position
        _data.startX = e.clientX;
        _data.startY = e.clientY;
        
        // grab the clicked element's position
        _data.offsetX = ExtractNumber(target.style.left);
        _data.offsetY = ExtractNumber(target.style.top);
        
        // previusX
        _data.prevX = _data.offsetX;
        _data.prevY = _data.offsetY;
        
        _data.prevTime = new Date();
        
        // bring the clicked element to the front while it is being dragged
        _data.oldZIndex = target.style.zIndex;
        target.style.zIndex = 10000;
        
        // we need to access the element in OnMouseMove
        _data.dragElement = target;

        // tell our code to start moving the element with the mouse
        document.onmousemove = OnMouseMove;
        
        // cancel out any text selections
        document.body.focus();

        // prevent text selection in IE
        document.onselectstart = function () { return false; };
        // prevent IE from trying to drag an image
        target.ondragstart = function() { return false; };
        
        // prevent text selection (except IE)
        return false;
    }
}

function OnMouseMove(e) {
    if (e == null) 
        var e = window.event; 

	var currentTime = new Date();
	
	_data.velocityX = (e.clientX - _data.prevX)/(currentTime - _data.previousTime);
	_data.velocityY = (e.clientY - _data.prevY)/(currentTime - _data.previousTime);
	
	_data.prevX = e.clientX;
    _data.prevY = e.clientY;
    
    _data.previousTime = currentTime;
    // this is the actual "drag code"
    _data.dragElement.style.left = (_data.offsetX + e.clientX - _data.startX) + 'px';
    _data.dragElement.style.top = (_data.offsetY + e.clientY - _data.startY) + 'px';
}

function v2c(x, y) {
	return "(" + x + ", " + y + ")";
}

function OnMouseUp(e) {
    if (_data.dragElement != null) {
    	
    	// we're done with these events until the next OnMouseDown
        document.onmousemove = null;
        document.onselectstart = null;
        _data.dragElement.ondragstart = null;
        
        startAnimation(); 
    }
}

function startAnimation() {
	$(_data.dragElement).animate({top: "0px"},{
			duration: 3000,
			progress: stepFunction
		});
}

function stepFunction(t, step) {
	console.log(step);
}

function animation(){
	var currentTime = new Date();
	var deltaTime = currentTime - _data.previousTime;
	_data.previousTime = currentTime;
	
	_data.timeToAnimate -= deltaTime;
	
	console.log("Velocity: " + v2c(_data.velocityX, _data.velocityY));
	console.log("Delta time: " + deltaTime);
	
	if(_data.timeToAnimate >= 0) {
		var currX = 0;
		var currY = 0;
		
		currX = ExtractNumber(_data.dragElement.style.left) + _data.velocityX * deltaTime;
		currY = ExtractNumber(_data.dragElement.style.top) + _data.velocityY * deltaTime;
		
		_data.dragElement.style.left = currX + 'px';
	    _data.dragElement.style.top  = currY + 'px';
	    
	    _data.prevX = currX;
	    _data.prevY = currY;
		
		console.log("Velocity: " + v2c(currX, currY));
		
	} else {
		clearInterval(_data.timerId);
		_data.timerId = null;
		_data.dragElement.style.zIndex = _data.oldZIndex;

        // this is how we know we're not dragging      
        _data.dragElement = null;
	}
}
//--------------------------//

function ExtractNumber(value) {
    var n = parseInt(value);
    return n == null || isNaN(n) ? 0 : n;
}

//--------------------------//

(function initDrag() {
    document.onmousedown = OnMouseDown;
    document.onmouseup = OnMouseUp;
})();

