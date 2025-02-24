'use client'

import { createGlobalStyle, keyframes } from 'styled-components'
import spacing from './spacing'
import Z_INDEX from './z'

// https://github.com/necolas/normalize.css
const normalize = `
  html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
`

const gradient = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    box-sizing: border-box;
    width: 100%;
  }
  /* * {
    border: 1px solid #f00 !important;
  } */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  :root {
    ${spacing}
  }

  body {
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-variant-ligatures: common-ligatures;
    text-rendering: optimizelegibility;
    overflow-x: hidden;
    font-family: 'articulat-cf','San Francisco','SF Pro Text',-apple-system,system-ui,sans-serif;
    background: linear-gradient(270deg, #f5e4ff, #E5DFFF, #d4cbff, #fffbfb);
    background-size: 800% 800%;
    background-color: rgb(255,251,251);
    color: ${({ theme }) => `rgb(${theme.text})`};
    overscroll-behavior-y: none;
    animation: ${gradient} 15s ease infinite;
  }

  .overflow {
    overflow: hidden;
    height: fit-content;
    display: inline-flex;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  main {
    position: relative;
    pointer-events: none;
    /* z-index: ${Z_INDEX.main}; */
  }

  #canvas {
    position: fixed!important;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: ${Z_INDEX.canvas};
  }

  #ScrollRig-canvas {
    z-index: ${Z_INDEX.scroll};
  }

  @supports (font: -apple-system-body) and (-webkit-appearance: none) {
    img[loading='lazy'] {
      clip-path: inset(0.6px);
    }
  }
`

export default GlobalStyle
