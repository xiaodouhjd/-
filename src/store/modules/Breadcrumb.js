//面包屑

const state = {
    hasCrumbs: true,
    indexPage: [
        {
            path: '/index',
            meta: {
                title: '首页'
            }
        }
    ],
    crumbsList: []
};
const mutations = {
    SET_CRUMBS(state, list) {
        if (list.length == 1 && list[0].path == '/index') {
            state.crumbsList = []
        } else {
            state.crumbsList = state.indexPage.concat(list)
        }
    }
};
const actions ={
    setCrumbs({ commit }, list) {
        commit("SET_CRUMBS", list)
    }
}

var Breadcrumb = {
    namespaced: true,
    state,
    mutations,
    actions
};
export default Breadcrumb;