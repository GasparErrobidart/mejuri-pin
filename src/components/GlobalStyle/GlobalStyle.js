import { createGlobalStyle } from 'styled-components'
import reset from './reset.js'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,body{
    font-family : ${({theme})=> theme.fonts.blockTextFamily};
    background  : ${({theme})=> theme.colors.lightGray};
    color       : ${({theme})=> theme.colors.darkGray};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  b{
    font-weight:bold;
  }
  img{
    max-width:100%;
  }
  .app-wrapper{
    display   : grid;
    grid-template-columns: 1fr;
    grid-template-rows : auto 1fr auto;
    grid-template-areas:
      "main-header"
      "main-content"
      "main-footer";
  }
  input{
    background: ${({theme})=> theme.colors.lightGray};
    border:none;
    border-radius: 3px;
    font-size:18px;
    padding:10px;
  }
  header.main-header{
    background: ${({theme})=> theme.colors.blue};
    color: ${({theme})=> theme.colors.lightGray};
    grid-area: main-header;
    text-align:center;
  }
  main.main-content{
    grid-area: main-content;
  }
  footer.main-footer{
    grid-area:main-footer;
  }
`

export default GlobalStyle
