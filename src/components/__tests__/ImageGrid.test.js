import '@testing-library/jest-dom'
import 'jest-styled-components'

import React         from 'react'
import { cleanup }   from '@testing-library/react'
import renderer      from 'react-test-renderer'

import ImageGrid   from '../ImageGrid'


afterEach(cleanup)

test('Renders "ImageGrid" component', () => {
  const testContent     = Array(6)
                            .fill(null)
                            .map((d,i) => <img key={i} src="/placeholder.png" alt="Test image" />)
  const component       = renderer.create(<ImageGrid>{testContent}</ImageGrid>);
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
