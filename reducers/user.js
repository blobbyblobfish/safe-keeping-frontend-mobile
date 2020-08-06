const initialState = {first_name: "", email: ""}

export default (state = initialState, action) => {
    switch (action.type) {

    case "SET_USER": 
        return {
            first_name: action.payload.first_name,
            email: action.payload.email
        }
    
    default: 
        return state
    
    }
}