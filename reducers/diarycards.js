const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

    case "SET_DIARY_CARDS": 
        return action.payload
    
    default: 
        return state
    
    }
}