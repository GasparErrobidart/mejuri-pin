import '@testing-library/jest-dom'
import 'jest-styled-components'

import React         from 'react'
import { cleanup }   from '@testing-library/react'
import renderer      from 'react-test-renderer'

import SidebarlayoutVariant   from '../SidebarlayoutVariant'


afterEach(cleanup)

test('Renders "SidebarlayoutVariant" component', () => {
  const component       = renderer.create(
    <SidebarlayoutVariant>
      <div>
        sidebar
      </div>
      <div>
        content
      </div>
    </SidebarlayoutVariant>
  );
  const tree            = component.toJSON()
  expect(tree).toMatchSnapshot();
});
