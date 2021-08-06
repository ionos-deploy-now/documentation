import Vuex from 'vuex';

export default function createStore() {
  return new Vuex.Store({
    state: {
      headerHeight: 0,
    },
    getters: {
      headerHeight: (state) => state.headerHeight,
      sidebarStyle: (state) => {
        return {
          top: `${state.headerHeight}px`,
          height: `calc(100vh - ${state.headerHeight}px)`,
        };
      },
    },
    mutations: {
      setHeaderHeight(state, headerHeight) {
        state.headerHeight = headerHeight;
      },
    },
    actions: {
      setHeaderHeight({ commit }, headerHeight) {
        commit('setHeaderHeight', headerHeight);
      },
    },
  });
}
