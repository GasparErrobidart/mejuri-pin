import '@testing-library/jest-dom'
import 'jest-styled-components'

import React                 from 'react'
import {ThemeProvider}       from 'styled-components'
import { cleanup }           from '@testing-library/react'
import renderer              from 'react-test-renderer'

import theme                 from '../GlobalStyle/themes/mejuri-pin'
import Button                from '../Button'


afterEach(cleanup)

test('Renders "Button" component', () => {
  const testText        = "Button Test Text"
  const component       = renderer.create(<ThemeProvider theme={theme}><Button>{testText}</Button></ThemeProvider>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
