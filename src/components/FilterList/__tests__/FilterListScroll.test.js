import '@testing-library/jest-dom'
import 'jest-styled-components'

import React                 from 'react'
import {ThemeProvider}       from 'styled-components'
import { cleanup }           from '@testing-library/react'
import renderer              from 'react-test-renderer'

import theme                 from '../../GlobalStyle/themes/mejuri-pin'

import FilterListScroll   from '../FilterListScroll'


afterEach(cleanup)

test('Renders "FilterListScroll" component', () => {
  const testText        = "FilterListScroll Test Text"
  const component       = renderer.create(
    <ThemeProvider theme={theme}>
      <FilterListScroll>{testText}</FilterListScroll>
    </ThemeProvider>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
