//Currently a user can only have one therapist at a time
const initialState = {name: '', email: '', id: 0}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_THERAPIST":
            return action.payload.therapist
        
        case "REMOVE_THERAPIST":
            return initialState

        default: 
            return state
    }
}