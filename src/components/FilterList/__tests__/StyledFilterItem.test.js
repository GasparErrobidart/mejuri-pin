import '@testing-library/jest-dom'
import 'jest-styled-components'

import React                 from 'react'
import {ThemeProvider}       from 'styled-components'
import { cleanup }           from '@testing-library/react'
import renderer              from 'react-test-renderer'

import theme                 from '../../GlobalStyle/themes/mejuri-pin'

import StyledFilterItem   from '../StyledFilterItem'


afterEach(cleanup)

test('Renders "StyledFilterItem" component', () => {
  const testText        = "StyledFilterItem Test Text"
  const component       = renderer.create(
    <ThemeProvider theme={theme}>
      <StyledFilterItem>{testText}</StyledFilterItem>
    </ThemeProvider>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
