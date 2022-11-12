export const initialState = {
    user : false,
    userName:"",
    password:""
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state, user:false};
        case "HOME":
            return {...state, user:true, userName:action.username, password:action.password};
        default:
            break;
    } 
}
