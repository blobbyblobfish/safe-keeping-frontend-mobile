const initialState = {id: 0, first_name: "", email: ""}

export default (state = initialState, action) => {
    switch (action.type) {

    case "SET_USER": 
        return {
            id: action.payload.id,
            first_name: action.payload.first_name,
            email: action.payload.email,
        }
        
    default: 
        return state
    
    }
}