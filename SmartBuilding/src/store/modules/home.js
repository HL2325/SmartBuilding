import * as types from '../types'

const state = {
  second_title: [],
  three_title: {}
}

const mutations = {
  [types.SECONDTITLE]:(state, payload) => {
    state.second_title = payload
  },
  [types.THREETITLE]:(state, payload) => {
    state.three_title = payload
  }
}

const actions = {
  setSecondTit({ commit }, second_title) {
    commit(types.SECONDTITLE, second_title)
  },
  setThreeTit({ commit }, three_title) {
    commit(types.THREETITLE, three_title)
  }
}

const getters = {
  secondTitle: state => {
    return state.second_title
  },
  threeTitle: state => {
    return state.three_title.subset
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}