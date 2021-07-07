const LIST = "LIST"

const defaultState = {
    currentUser: [],
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case LIST:
            return {
                ...state,
                currentUser: action.payload,
                create: false,
                update: false,
            }
        default:
            return state
    }

}


export const setList = user => ({ type: LIST, payload: user })

