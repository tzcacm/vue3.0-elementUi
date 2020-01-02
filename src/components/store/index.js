const TabModule = {
    state: {
        editableTabs: []
    },
    mutations: {
        setTabs: function (state, options) {
            if (state.editableTabs.find(val => val['path'] == options['path'])) return;
            state.editableTabs.push(options);
        }
    },
    actions: {
        delTabs: function (context, options) {
            return new Promise((resolve, reject) => {
                let {
                    state,
                    commit
                } = context;
                state.editableTabs = state.editableTabs.filter(val => val['path'] != options['path'])
                if (!state.editableTabs.length) {
                    let obj = {
                        path: '/',
                        name: '首页',
                        meta: true
                    };
                    commit('setTabs', obj)
                }
                resolve();
            })
        }
    }
}


export default TabModule