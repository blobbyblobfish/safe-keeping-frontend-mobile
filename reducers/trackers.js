const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

    case "SET_TRACKERS": 
        return action.payload

    case "LOGOUT":
        return initialState
        
    default: 
        return state
    }
}