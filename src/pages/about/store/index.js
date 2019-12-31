const AboutModule = {
    actions: {
        delLastData: function (store) {
            const { commit, dispatch, state, rootState, rootGetters } = store
            return rootState.HomeModule.person.pop();
        }
    }
}


export default AboutModule