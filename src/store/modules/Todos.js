import axios from 'axios'

export default {
    state: {
        todos: [],
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        },
        setNewTodo(state, newTodo) {
            state.todos.unshift(newTodo)
        }
    },
    actions: {
        async getAllTodos({commit}) {
            const response = await axios.get('http://localhost:4000/todos')
            const todos = response.data
            commit('setTodos', todos)
        },
        async addNewTodo({commit}, newTodo) {
            const response = await axios.post('http://localhost:4000/todos', newTodo)
            commit('setNewTodo', response.data)
        }
    },
    getters: {
        todos(state) {
            return state.todos;
        }
    }
}