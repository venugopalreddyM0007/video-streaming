import { configureStore } from "@reduxjs/toolkit"
import AppSlice from "./slices/AppSlice"
import SearchSlice from "./slices/SearchSlice"
import chatSlice from "./slices/ChatSlice"

const store = configureStore({
    reducer: {
        app: AppSlice,
        search: SearchSlice,
        chat: chatSlice
    }
})

export default store


// createing of reduces 
// 1. first create store and  configure the configureStore({ reducer :{ app: AppSlice}})
// 2. create slice with name, initial state, and reducers
// 3. add this in configureStore
// Provider store={store} in app level
