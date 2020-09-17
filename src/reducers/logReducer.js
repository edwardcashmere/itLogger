
import { GET_LOGS,SET_LOADING,
    LOG_ERROR,ADD_LOGS,DELETE_LOG,
    SET_CURRENT,CLEAR_CURRENT,
    UPDATE_LOG,SEARCH_LOGS}  from '../actions/types';

const initialState ={
    logs:null,
    current:null,
    Loading:false,
    error:null
};

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                Loading:true
            }
        case SEARCH_LOGS:
            return {
                ...state,
                logs:action.payload
            }
        case SET_CURRENT :
            return {
                ...state,
                current:action.payload

            }
        case UPDATE_LOG:
            return {
                ...state,
                logs:state.logs.map(log => log.id ===action.payload.id ?action.payload :log),
                Loading:false


            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current:null
            }
        case ADD_LOGS:
            return {
                logs:[...state.logs,action.payload]
            }
        case GET_LOGS:
    
            return {
                ...state,
                logs:action.payload,
                Loading:false

            }
        case LOG_ERROR :
            console.error(action.payload)
            return {
                ...state,
                error:action.payload
            }
        case DELETE_LOG :
            return {
                ...state,
                logs:state.logs.filter(log => log.id !== action.payload) ,
                loading:false
            }
        
        default :
        return state
    }
}