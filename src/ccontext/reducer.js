const reducer=(state,action)=>{
    switch (action.type) {
        case "SET_INBOXES":
            return {
                ...state,
                inboxes: action.inboxes
            }
            case "SET_CURRENT_INBOX":
                return {
                    ...state,
                    inboxname: action.inboxname
                }
     
        default:
            return state;
    }

}
export default reducer;