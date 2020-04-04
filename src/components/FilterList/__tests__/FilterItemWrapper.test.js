import '@testing-library/jest-dom'
import 'jest-styled-components'

import React                 from 'react'
import {ThemeProvider}       from 'styled-components'
import { cleanup }           from '@testing-library/react'
import renderer              from 'react-test-renderer'

import theme                 from '../../GlobalStyle/themes/mejuri-pin'

import FilterItemWrapper   from '../FilterItemWrapper'


afterEach(cleanup)

test('Renders "FilterItemWrapper" component', () => {
  const testText        = "FilterItemWrapper Test Text"
  const component       = renderer.create(
    <ThemeProvider theme={theme}>
      <FilterItemWrapper>{testText}</FilterItemWrapper>
    </ThemeProvider>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
