import '@testing-library/jest-dom'
import 'jest-styled-components'

import React         from 'react'
import { cleanup }   from '@testing-library/react'
import renderer      from 'react-test-renderer'

import Spy           from '../Spy'


afterEach(cleanup)

test('Renders "Spy" component', () => {
  const testText        = "Spy Test Text"
  const component       = renderer.create(<Spy>{testText}</Spy>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
