const hide = `body > :not(.pop-image) {
    display: none;
}`;

function listenforclicks(){
  document.addEventListener('click', function(e){
    if(e.target.classList.contains('pop-image')){
      document.body.style.cssText = hide;
    }
    function(click){
        switch(click){
            case 'pop':
                return browser.runtime.sendMessage("POP");
            case 'pull':
                return browser.runtime.sendMessage("PULL");
            case 'push':
                return browser.runtime.sendMessage("PUSH");
        }
    }
  }
}