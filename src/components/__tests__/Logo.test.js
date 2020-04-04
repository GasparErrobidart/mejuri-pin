import '@testing-library/jest-dom'
import 'jest-styled-components'

import React         from 'react'
import { cleanup }   from '@testing-library/react'
import renderer      from 'react-test-renderer'

import Logo   from '../Logo'


afterEach(cleanup)

test('Renders "Logo" component', () => {
  const testText        = "Logo Test Text"
  const component       = renderer.create(<Logo/>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
