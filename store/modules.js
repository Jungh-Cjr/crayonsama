export const state = () => ({
	module: "home"
})

export const mutations = {
	setModule(state, mod) {
		state.module = mod;
	}
}

export const actions = {
	setModule({
		commit
	}, mod) {
		commit('setModule', mod)
	}
}
