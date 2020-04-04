import '@testing-library/jest-dom'
import 'jest-styled-components'

import React         from 'react';
import { cleanup }   from '@testing-library/react'
import renderer      from 'react-test-renderer'

import Container     from '../Container'


afterEach(cleanup)

test('Renders "Container" component', () => {
  const testText        = "Container Test Text"
  const component       = renderer.create(<Container>{testText}</Container>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
