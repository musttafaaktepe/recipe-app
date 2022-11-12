export const initialState = {
    user : false
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, user:false};
        case "HOME":
            return {...state, user:true};
        default:
            break;
    } 
}
