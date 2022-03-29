import {createStore} from "vuex";
import Todos from "./modules/Todos";

export default createStore({
    modules: {
        Todos
    }
})