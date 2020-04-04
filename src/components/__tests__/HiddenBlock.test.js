import '@testing-library/jest-dom'
import 'jest-styled-components'

import React         from 'react'
import { cleanup }   from '@testing-library/react'
import renderer      from 'react-test-renderer'

import HiddenBlock   from '../HiddenBlock'


afterEach(cleanup)

test('Renders "HiddenBlock" component', () => {
  const testText        = "HiddenBlock Test Text"
  const component       = renderer.create(<HiddenBlock>{testText}</HiddenBlock>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
