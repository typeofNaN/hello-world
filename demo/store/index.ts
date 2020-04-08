import Vuex from 'vuex'

import titleModule from './modules/title'

const store = () => {
  return new Vuex.Store({
    modules: {
      titleModule
    }
  })
}

export default store
