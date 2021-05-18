'use strict'

function showElementAnimation() {
                    
    let element = document.getElementsByClassName('js-fadein');
    if(!element) return; 
                        
    let showTiming = window.innerHeight > 768 ? 200 : 80;
    let scrollY = window.pageYOffset; 
    let windowH = window.innerHeight; 
                      
    for(let i=0;i<element.length;i++) { 
      let elemClientRect = element[i].getBoundingClientRect(); 
      let elemY = scrollY + elemClientRect.top; 
      if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
        element[i].classList.remove('is-show');
      }
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);