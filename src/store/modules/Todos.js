export default {
    state: {
        todos: [
            {id: 1, title: "Todo 1"},
            {id: 2, title: "Todo 2"},
            {id: 3, title: "Todo 3"},
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        todos(state) {
            return state.todos;
        }
    }
}