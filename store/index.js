export const state = () => ({
  headerHeight: 0,
  subNavIndex: 0
})


export const mutations = {
  setHeaderHeight(state, height) {
    state.headerHeight = height
  },
  setSubNavIndex(state, index) {
    state.subNavIndex = index
  }
}

