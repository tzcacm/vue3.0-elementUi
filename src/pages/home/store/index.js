const HomeModule = {
    state: {
        person: [
            { name: '张飞' },
            { name: '关羽' },
            { name: '刘备' }
        ]
    },
    getters: {
        exitPerson: function (state) {
            return state.person.filter(val => val.name != '曹操')
        }
    },
    mutations: {
        setPerson: function (state, options) {
            state.person.push(options)
        }
    },
    actions: {
        savePerson: function (context, options) {
            setTimeout(() => {
                context.commit('setPerson', options)
            }, 100)
        }
    }
}


export default HomeModule