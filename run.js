Handler.ui('screen');
Handler.setup("screen");
var assert = chai.assert,
    kineticContainer = document.getElementById('Main-screen'),
    origAssertEqual = assert.equal,
    origAssert = assert,
    origNotEqual = assert.notEqual,
    assertionCount = 0,
    assertions = document.createElement('em');

window.requestAnimFrame = (function(callback){
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback){
      window.setTimeout(callback, 1000 / 30);
  };
})();
