import '@testing-library/jest-dom'
import 'jest-styled-components'

import React                 from 'react'
import {ThemeProvider}       from 'styled-components'
import { cleanup }           from '@testing-library/react'
import renderer              from 'react-test-renderer'

import theme                 from '../../GlobalStyle/themes/mejuri-pin'

import FlexRow   from '../FlexRow'


afterEach(cleanup)

test('Renders "FlexRow" component', () => {
  const testText        = "FlexRow Test Text"
  const component       = renderer.create(
    <ThemeProvider theme={theme}>
      <FlexRow>{testText}</FlexRow>
    </ThemeProvider>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
