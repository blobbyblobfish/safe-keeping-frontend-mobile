const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_EMERGENCY_CONTACTS": 
            return action.payload
        
        case "ADD_EMERGENCY_CONTACT":
            return [...state, action.payload]
        
        case "UPDATE_EMERGENCY_CONTACT":
            const updatedContacts = state.map(emergencyContact => {
                if (emergencyContact.id === action.payload.id) {
                    const updatedEmergencyContact = {
                        id: action.payload.id,
                        name: action.payload.name,
                        phone_number: action.payload.phone_number,
                        professional: action.payload.professional,
                    }
    
                    return updatedEmergencyContact
                }
    
                else { return emergencyContact }
            })
            return updatedContacts
        
        case "REMOVE_EMERGENCY_CONTACT":
            const remainingContacts = state.filter(emergencyContact => {
                return emergencyContact.id !== action.payload.id
            })
            return remainingContacts
        
        case "LOGOUT":
            return initialState
        
        default: 
            return state
    }
}