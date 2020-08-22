const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

        //Sort coping skills by name
        case "SET_COPING_SKILLS":
            return action.payload.sort((a, b) => a.name.localeCompare(b.name))

        case "ADD_COPING_SKILL":
            return [...state, action.payload]
        
        case "UPDATE_COPING_SKILL":
            const updatedCopingSkills = state.map(skill => {
                if (skill.id === action.payload.id) {
                    const updatedSkill = {
                        id: action.payload.id,
                        name: action.payload.name,
                        description: action.payload.description,
                        directions: action.payload.directions,
                        attempts: action.payload.attempts,
                        successful_attempts: action.payload.successful_attempts
                    }
    
                    return updatedSkill
                }
    
                else { return skill }
            })
            return updatedCopingSkills
        
        case "REMOVE_COPING_SKILL":
            const remainingCopingSkills = state.filter(skill => {
                return skill.id !== action.payload.id
            })
            return remainingCopingSkills
        
        case "LOGOUT":
            return initialState
        
        default: 
            return state
    }
}