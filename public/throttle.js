

var throttlecontainer = document.querySelectorAll(".throttlecontainer")[0];
var throttle = document.querySelectorAll(".throttle")[0];

function setThrottle(fraction) {
  throttle.style.height = (fraction * 100) + "%";
}


function setThrottleHelper(y) {
  var fraction = 1.0 - (y / throttlecontainer.offsetHeight);
  setThrottle(fraction);
}


function clickDragHandler(mouseEvent) {
  mouseEvent.preventDefault();
  if(mouseEvent.type === "mousemove" && mouseEvent.buttons === 0) {
    return;
  }
  setThrottleHelper(mouseEvent.y);
}

function touchHandler(touchEvent) {
  touchEvent.preventDefault();
  var touches = touchEvent.changedTouches;
  for (var i = 0; i < touches.length; i++) {
    // TODO: Maybe transform y into element local coordinate systems
    setThrottleHelper(touches[i].clientY);
  }
}

throttlecontainer.addEventListener('touchstart', touchHandler, false);
throttlecontainer.addEventListener('touchmove', touchHandler, false);
throttlecontainer.addEventListener('touchend', touchHandler, false);

throttlecontainer.addEventListener('mousedown', clickDragHandler, false);
throttlecontainer.addEventListener('mousemove', clickDragHandler, false);
throttlecontainer.addEventListener('mouseup', clickDragHandler, false);
