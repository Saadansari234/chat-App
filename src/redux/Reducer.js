import { Actions } from "./Action";

const initialState = {
    message1: [],
    message2: []
}

const { SENDCHAT1, SENDCHAT2 } = Actions

export const message1Reducer = (state = initialState.message1, action) => {
    switch (action.type) {
        case SENDCHAT1:
            return [...state, action.payload];
        

        default:
            return state

    }
}

export const message2Reducer = (state = initialState.message2, action) => {
    switch (action.type) {
        case SENDCHAT2:
            return [...state, action.payload];
        

        default:
            return state

    }
}