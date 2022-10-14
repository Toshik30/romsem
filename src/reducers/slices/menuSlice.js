import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

const toRender = Object.entries(data).filter((item) => item[0] === window.location.pathname.split('/').pop()).flat(2)
const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        pathLocation: window.location.pathname.split('/').pop(),
        menu: toRender
    },
    reducers: {
        setMenu(state, action) {
            state.pathLocation = action.payload.split('/').pop()
            if(state.pathLocation !== 'stoks') {
                state.menu = Object.entries(data).filter((item) => item[0] === state.pathLocation).flat(2)
            } else {
                state.menu = Object.entries(data).flat(Infinity).filter((item) => item.discount > 0)
            }
       }
    }
})
export const { setMenu } = menuSlice.actions
export default menuSlice.reducer