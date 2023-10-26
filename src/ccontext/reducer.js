const reducer=(state,action)=>{
    switch(action.type){
        case "User":
            return {
                ...state,
                user:action.user
            }

        default:
            return state
    }

}
export default reducer;