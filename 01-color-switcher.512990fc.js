const t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")};t.startButton.addEventListener("click",(function(){o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),console.log(o)})),t.stopButton.addEventListener("click",(function(){clearInterval(o)}));let o=null;
//# sourceMappingURL=01-color-switcher.512990fc.js.map
