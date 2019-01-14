import Vuex from 'vuex'

import mutations from './mutations'
import state from './state'

const createStore = () => {
	return new Vuex.Store({
		state,
        mutations,
        // actions
	})
}

export default createStore