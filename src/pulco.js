export { Pulco }

import {log} from "./zutils"
import "./pulco.css"

log("😃 pulco.js")

function Block(html) {
  let e = document.createElement('span')
  e.innerHTML = html
  e.className = 'block'
  return e;
}

function NewLine() {
  let e = document.createElement('span')
  e.innerHTML = '<br>'
  return e;
}

function Pulco(e) {

  
  for (let i=0; i<10000; i++) {
    let c = Block('PRINT')
    e.appendChild(c)
    
    if (Math.random()>0.8) {
      let c = NewLine()
      e.appendChild(c)
      
    }
  }

}