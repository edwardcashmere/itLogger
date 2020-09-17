
import { ADD_TECHS,GET_TECHS,TECH_ERROR,DELETE_TECH,SET_LOADING} from '../actions/types'
const initialState ={
    techs:null,
    error:null,
    Loading:false

}

export default (state=initialState,action)=>{
    switch(action.type){
        case GET_TECHS:
            return {
                ...state,
                techs:action.payload,
                Loading:false
            }
        case ADD_TECHS :
            return {
                ...state,
                techs:[...state.techs,action.payload],
                Loading:false
            }
        case DELETE_TECH :
            return {
            ...state,
            techs:state.techs.filter(tech => tech.id !==action.payload),
            Loading:false
        }
        case TECH_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case SET_LOADING :
            return {
                ...state,
                Loading:true
            }
        default :
        return state

    }
}