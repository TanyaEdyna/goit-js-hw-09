!function(){var t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")};t.startButton.addEventListener("click",(function(){o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),console.log(o)})),t.stopButton.addEventListener("click",(function(){clearInterval(o)}));var o=null}();
//# sourceMappingURL=01-color-switcher.f2c4250f.js.map