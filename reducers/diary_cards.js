const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

    case "SET_DIARY_CARDS": 
        return action.payload
        
    case "ADD_DIARY_CARD":
        return [...state, action.payload]
        
    case "UPDATE_DIARY_CARD":
        const updatedDiaryCards = state.map(diaryCard => {
            if (diaryCard.id === action.payload.id) {
                const updatedDiaryCard = {
                    id: action.payload.id,
                    created_at: action.payload.created_at,
                    thoughts: action.payload.thoughts,
                    feelings: action.payload.feelings,
                    diary_card_trackers: action.payload.diary_card_trackers,
                }

                return updatedDiaryCard
            }

            else { return diaryCard }
        })
        return updatedDiaryCards
        
    case "REMOVE_DIARY_CARD":
        const remainingDiaryCards = state.filter(diaryCard => {
            return diaryCard.id !== action.payload.id
        })
        return remainingDiaryCards
            
    default: 
        return state
    }
}