const initialState = {
    token: '',
    id: 0,
    email: '',
    firstName: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                token: action.payload.token,
                id: action.payload.user.id,
                email: action.payload.user.email,
                firstName: action.payload.user.first_name
            }
        
        case "LOGOUT":
            return initialState
        
        case "UPDATE_ACCOUNT":
            return {
                token: state.token,
                id: action.payload.id,
                email: action.payload.email,
                firstName: action.payload.first_name
            }

        default: return state
    }
}