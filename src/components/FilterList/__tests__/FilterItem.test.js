import '@testing-library/jest-dom'
import 'jest-styled-components'

import React                 from 'react'
import {ThemeProvider}       from 'styled-components'
import { cleanup }           from '@testing-library/react'
import renderer              from 'react-test-renderer'

import theme                 from '../../GlobalStyle/themes/mejuri-pin'

import FilterItem   from '../FilterItem'


afterEach(cleanup)

test('Renders "FilterItem" component', () => {
  const testText        = "FilterItem Test Text"
  const component       = renderer.create(
    <ThemeProvider theme={theme}>
      <FilterItem>{testText}</FilterItem>
    </ThemeProvider>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
