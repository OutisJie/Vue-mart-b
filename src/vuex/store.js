import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    tokenid: '',
    username: '',
    realname: '',
    mobile: '',
    email: ''
  },
  projectId: 0
}

const mutations = {
  doLogin (user_input) {
    state.user.tokenid = user_input.tokenid;
    state.user.username = user_input.username;
    state.user.realname = user_input.realname;
    state.user.mobile = user_input.mobile;
    state.user.email = user_input.email;
  },
  setProjectId (projectId_input) {
    projectId = projectId_input;
  },
  getProjectId () {
    return projectId;
  }
}


export default new Vuex.Store({
  state,
  //projectId: 0,
  mutations
})
