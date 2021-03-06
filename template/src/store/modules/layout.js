import * as types from '../mutation-types'

// initial state
const state = {
  navigatorVisible: false,
  chooserVisible: false,
  settingsVisible: false
}

// getters
const getters = {
  navigatorVisible: state => state.navigatorVisible,
  chooserVisible: state => state.chooserVisible,
  settingsVisible: state => state.settingsVisible
}

// actions
const actions = {
  toggleNavigator ({ commit }) {
    commit(types.TOGGLE_NAVIGATOR)
  },
  closeNavigator ({ commit }) {
    commit(types.CLOSE_NAVIGATOR)
  },
  toggleChooser ({ commit, state }) {
    commit(types.TOGGLE_CHOOSER)
  },
  closeChooser ({ commit, state }) {
    commit(types.CLOSE_CHOOSER)
  },
  openSettings ({ commit, state }) {
    commit(types.OPEN_SETTINGS)
  },
  closeSettings ({ commit, state }) {
    commit(types.CLOSE_SETTINGS)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_NAVIGATOR] (state) {
    // toggle the navigator
    state.navigatorVisible = !state.navigatorVisible
  },
  [types.CLOSE_NAVIGATOR] (state) {
    // toggle the navigator
    state.navigatorVisible = false
  },
  [types.TOGGLE_CHOOSER] (state) {
    // toggle the chooser
    state.chooserVisible = !state.chooserVisible
  },
  [types.CLOSE_CHOOSER] (state) {
    // close the chooser
    state.chooserVisible = false
  },
  [types.OPEN_SETTINGS] (state) {
    state.navigatorVisible = false
    state.settingsVisible = true
  },
  [types.CLOSE_SETTINGS] (state) {
    state.settingsVisible = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
