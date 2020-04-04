import '@testing-library/jest-dom'
import 'jest-styled-components'

import configureStore    from 'redux-mock-store'
import React             from 'react'
import { cleanup }       from '@testing-library/react'
import { Provider }      from 'react-redux'
import renderer          from 'react-test-renderer'
import {ThemeProvider}   from 'styled-components'

import Index             from '../Index'
import theme             from '../../components/GlobalStyle/themes/mejuri-pin'

const mockStore = configureStore([]);


describe('Index component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
        filter : [],
        likes : [],
        categories : { data :
          {
            "0" : { name : "test category" , id: "0", products : []}
          }
        },
        products : { data : {} }
    });
  });

  it("Should render",()=>{
    const component       = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Index magicCategoryId="0"/>
        </ThemeProvider>
      </Provider>
    );
    const tree            = component.toJSON()
    expect(tree).toMatchSnapshot();
  })

  afterEach(cleanup)


});
