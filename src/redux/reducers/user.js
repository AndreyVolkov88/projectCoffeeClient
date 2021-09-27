const initialState = {
    all: [],
    loadAll: false,
    errorAll: false,
    errorAllMessage: "Data Not Found",

}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_USER_PENDING":
            return {
                ...state,
                loadAll: true
            }

        case "GET_USER_FULLFILLED":
            return {
                ...state,
                loadAll: false,
                all: action.payload.data,
                errorAllMessage: "Get User Success"
            }

        case "GET_USER_REJECTED":
            return {
                ...state,
                loadAll: false,
                errorAllMessage: action.payload
            }
    
        default:
            return state
    }
}

export default userReducer