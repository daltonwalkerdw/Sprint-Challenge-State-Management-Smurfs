export const initialState = {
   api: [],
}

export const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_API": 
            return {...state, api: action.payload }   
        default:
            return state;
    }
}