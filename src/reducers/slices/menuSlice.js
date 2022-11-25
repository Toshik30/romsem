import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data/data";

const toRender = Object.entries(data).filter((item) => item[0] === window.location.pathname.split('/').pop()).flat(2)
const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        pathLocation: window.location.pathname.split('/').pop(),
        menu: toRender,
        basket: [],
        popupIsOpen: false,
    },
    reducers: {
        setMenu(state, action) {
            state.pathLocation = action.payload.split('/').pop()
            if(state.pathLocation !== 'stoks') {
                state.menu = Object.entries(data).filter((item) => item[0] === state.pathLocation).flat(2)
            } else {
                state.menu = Object.entries(data).flat(Infinity).filter((item) => item.discount > 0)
            }
       },
       addToBasket(state, action) {
            state.basket.push(action.payload)
       },
       deleteFromBasket(state, action) {
            console.log(action.payload);
            console.log(state.basket);
            state.basket = state.basket.filter(({name}, index) => index !== action.payload)
       },
       openPopup(state) {
            state.popupIsOpen = true
       },
       closePopup(state) {
            state.popupIsOpen = false
       }
    }
})
export const { setMenu, addToBasket, deleteFromBasket, openPopup, closePopup } = menuSlice.actions
export default menuSlice.reducer