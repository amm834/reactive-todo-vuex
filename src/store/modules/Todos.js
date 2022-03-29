import axios from 'axios'

export default {
    state: {
        todos: [],
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        },
    },
    actions: {
        async getAllTodos({commit}) {
            const response = await axios.get('http://localhost:4000/todos')
            const todos = response.data
            commit('setTodos', todos)
        }
    },
    getters: {
        todos(state) {
            return state.todos;
        }
    }
}