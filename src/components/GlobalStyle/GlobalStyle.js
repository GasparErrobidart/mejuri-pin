import { createGlobalStyle } from 'styled-components'
import reset from './reset.js'

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    font-family : ${({theme})=> theme.fonts.blockTextFamily};
    letter-spacing: 1px;
  }
  svg{
    vertical-align:bottom;
  }
  h4{
    font-size:0.9rem;
    line-height: 1.4rem;
    text-align:center;
  }
  html,body{
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
    padding-top:100px;
    display   : grid;
    grid-template-columns: 1fr;
    grid-template-rows : auto 1fr auto;
    grid-template-areas:
      "main-header"
      "main-content"
      "main-footer";
  }
  @media (min-width:768px){
    .app-wrapper{
      padding-top:60px;
    }
  }
  input{
    background: ${({theme})=> theme.colors.lightGray};
    border:none;
    border-radius: 3px;
    font-size:18px;
    padding:10px;
  }
  header.main-header{
    background: ${({theme})=> theme.colors.white};
    grid-area: main-header;
    text-align:center;
    position: fixed;
    top:0;
    left:0;
    width:100%;
  }
  main.main-content{
    grid-area: main-content;
  }
  footer.main-footer{
    grid-area:main-footer;
  }
`

export default GlobalStyle
