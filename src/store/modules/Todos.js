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
        },
        removeTodo(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        updateTodo(state, updateTodo) {
            state.todos.forEach(todo => {
                if (todo.id === updateTodo.id) {
                    todo = updateTodo
                }
            })
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
        },
        async deleteTodo({commit}, todoId) {
            await axios.delete(`http://localhost:4000/todos/${todoId}`)
            commit('removeTodo', todoId)
        },
        async limitTodos({commit}, limit) {
            const response = await axios.get(`http://localhost:4000/todos?_limit=${limit}`)
            commit('setTodos', response.data)
        },
        async updateTodo({commit}, todo) {
            const response = await axios.get(`http://localhost:4000/todos/${todo.id}`, todo)
            commit('updateTodo', todo)
        }
    },
    getters: {
        todos(state) {
            return state.todos;
        }
    }
}