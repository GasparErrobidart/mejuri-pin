import '@testing-library/jest-dom'
import 'jest-styled-components'

import React                 from 'react'
import {ThemeProvider}       from 'styled-components'
import { cleanup }           from '@testing-library/react'
import renderer              from 'react-test-renderer'

import theme                 from '../../GlobalStyle/themes/mejuri-pin'

import FlexColumn   from '../FlexColumn'


afterEach(cleanup)

test('Renders "FlexColumn" component', () => {
  const testText        = "FlexColumn Test Text"
  const component       = renderer.create(
    <ThemeProvider theme={theme}>
      <FlexColumn>{testText}</FlexColumn>
    </ThemeProvider>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
