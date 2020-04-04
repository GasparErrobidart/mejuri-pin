import '@testing-library/jest-dom'
import 'jest-styled-components'

import configureStore    from 'redux-mock-store'
import React             from 'react'
import { cleanup }       from '@testing-library/react'
import { Provider }      from 'react-redux'
import renderer          from 'react-test-renderer'
import {ThemeProvider}   from 'styled-components'

import HeartContainer    from '../HeartContainer'
import theme             from '../../components/GlobalStyle/themes/mejuri-pin'

const mockStore = configureStore([]);


describe('HeartContainer component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      likes: [],
    });
  });

  it("Should render",()=>{
    const component       = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HeartContainer/>
        </ThemeProvider>
      </Provider>
    );
    const tree            = component.toJSON()
    expect(tree).toMatchSnapshot();
  })

  afterEach(cleanup)


});
