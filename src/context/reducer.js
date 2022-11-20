export const initalState = {
    user : false,
    userName:"",
    password:""
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state};
        case "USERNAME":
            return {...state, user:true, userName:action.username};
        case "PASSWORD":
            return {...state, user:true, password:action.password}
        default:
            break;
    }
}