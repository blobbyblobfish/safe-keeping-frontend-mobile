//Currently a user can only have one therapist at a time
const initialState = {name: '', email: '', id: 0}

export default (state = initialState, action) => {
    switch (action.type) {

        // Currently can't fetch user_therapists or therapists from users without infinite loop

        case "SET_THERAPIST":
            return action.payload.therapist
        
        case "ADD_THERAPIST":
            return action.payload.therapist
        
        case "REMOVE_THERAPIST":
            return initialState

        default: 
            return state
    }
}