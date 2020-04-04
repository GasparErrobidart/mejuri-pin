import '@testing-library/jest-dom'
import 'jest-styled-components'

import React                 from 'react'
import {ThemeProvider}       from 'styled-components'
import { cleanup }           from '@testing-library/react'
import renderer              from 'react-test-renderer'

import theme                 from '../../GlobalStyle/themes/mejuri-pin'

import RemoveFilterButton   from '../RemoveFilterButton'


afterEach(cleanup)

test('Renders "RemoveFilterButton" component', () => {
  const testText        = "RemoveFilterButton Test Text"
  const component       = renderer.create(
    <ThemeProvider theme={theme}>
      <RemoveFilterButton>{testText}</RemoveFilterButton>
    </ThemeProvider>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
