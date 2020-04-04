import '@testing-library/jest-dom'
import 'jest-styled-components'

import React            from 'react'
import { cleanup }      from '@testing-library/react'
import renderer         from 'react-test-renderer'
import {ThemeProvider}  from 'styled-components'

import ItemBox       from '../ItemBox'
import theme         from '../GlobalStyle/themes/mejuri-pin'
import testProduct   from '../../mock/product.js'

// MOCK GLOBAL EXTERNAL FUNCTION JIT_IMG (LAZY LOADING HANDLER)
global.JIT_IMG = ()=> true

// MOCK REACT REF FOR IMAGES
function createNodeMock(element) {
  if (element.type === 'img') {
    return {
      current : {},
    };
  }
  return null;
}

afterEach(cleanup)

test('Renders "ItemBox" component', () => {
  const options = {createNodeMock};
  const component       = renderer.create(
    <ThemeProvider theme={theme}>
      <ItemBox product={testProduct}/>
    </ThemeProvider>
  ,options);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});

/*
    TODO
    - Test getSrcSet method
    - Test start state
*/
