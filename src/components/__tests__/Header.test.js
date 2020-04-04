import '@testing-library/jest-dom'
import 'jest-styled-components'

import configureStore    from 'redux-mock-store'
import React             from 'react'
import { cleanup }       from '@testing-library/react'
import { Provider }      from 'react-redux'
import renderer          from 'react-test-renderer'
import {ThemeProvider}   from 'styled-components'

import Header            from '../Header'
import theme             from '../GlobalStyle/themes/mejuri-pin'

const mockStore = configureStore([]);


describe('Header component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      likes: [],
    });
  });

  it("Should render",()=>{
    const testText        = "Header Test Text"
    const component       = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header/>
        </ThemeProvider>
      </Provider>
    );
    const tree            = component.toJSON()
    expect(tree).toMatchSnapshot();
  })

  afterEach(cleanup)


});
