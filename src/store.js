import Vuex from 'vuex';

export default function createStore() {
  return new Vuex.Store({
    state: {
      headerHeight: 0,
      searchFocused: false,
      sidebarOpen: false,
    },
    getters: {
      headerHeight: state => state.headerHeight,
      searchFocused: state => state.searchFocused,
      sidebarOpen: state => state.sidebarOpen,
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
      setSidebarOpen(state, isOpen) {
        state.sidebarOpen = isOpen;
      },
    },
    actions: {
      setHeaderHeight({ commit }, headerHeight) {
        commit('setHeaderHeight', headerHeight);
      },
      setSearchFocused({ commit }, isFocused) {
        commit('setSearchFocused', isFocused);
      },
      setSidebarOpen({ commit }, isOpen) {
        commit('setSidebarOpen', isOpen);
      },
    },
  });
}
