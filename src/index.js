////////////////////////////////////////////////////////
//
// INDEX.JS
//
import "./style1.css"
import "./style2.css"

import { beep, log } from "./zutils.js"

import { Pulco } from "./pulco.js"

log('🤩 index.js')

let button = document.createElement('button')
document.body.appendChild(button)
button.innerHTML = 'ola'
button.addEventListener('click',beep)

let editorDiv = document.getElementById('editor')
Pulco(editorDiv)
//
// INDEX.JS
//
////////////////////////////////////////////////////////