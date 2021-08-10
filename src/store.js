import Vuex from 'vuex';

export default function createStore() {
  return new Vuex.Store({
    state: {
      headerHeight: 0,
      searchFocused: false,
    },
    getters: {
      headerHeight: state => state.headerHeight,
      searchFocused: state => state.searchFocused,
      sidebarStyle: state => {
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
      setSearchFocused(state, isFocused) {
        state.searchFocused = isFocused;
      },
    },
    actions: {
      setHeaderHeight({ commit }, headerHeight) {
        commit('setHeaderHeight', headerHeight);
      },
      setSearchFocused({ commit }, isFocused) {
        commit('setSearchFocused', isFocused);
      },
    },
  });
}
