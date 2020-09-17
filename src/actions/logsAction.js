import { GET_LOGS,SET_LOADING,
    LOG_ERROR,ADD_LOGS,DELETE_LOG,
    SET_CURRENT,CLEAR_CURRENT,
    UPDATE_LOG,SEARCH_LOGS}  from './types';

//get logs

export const getLogs =() => async dispatch => {
    try {

        setLoading()
        const res =await fetch('http://localhost:8080/logs');
        let data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        })
        
    } catch (err) {
        dispatch({
            type :LOG_ERROR,
            payload : err.response
        })
        
    }




}
//Update logs
export const updateLog= current => async dispatch =>{

    try {
        setLoading()
        const res = await fetch(`http://localhost:8080/logs/${current.id}`,{
        method:'PUT',
        body: JSON.stringify(current),
        headers:{'Content-type':'application/json'}

        })
        const data = await res.json()
        dispatch({
            type:UPDATE_LOG,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:LOG_ERROR,
            payload:error.response.data
        })
        
    }
}
//add logs
export const addLogs =(item) => async dispatch => {
    try {

        setLoading()
        const res =await fetch('http://localhost:8080/logs',{
            method:'POST',
            body: JSON.stringify(item),
            headers:{'Content-Type':'application/json'}
        });
        const data = await res.json()
        dispatch({
            type: ADD_LOGS,
            payload: data
        })
        
    } catch (err) {
        dispatch({
            type :LOG_ERROR,
            payload : err.response.data
        })
        
    }
   



}
//delete logs
export const deleteLogs =(id) => async dispatch => {
    try {

        setLoading()
        await fetch(`http://localhost:8080/logs/${id}`,{
            method: 'DELETE',
            
        });
        dispatch({
            type: DELETE_LOG,
            payload:id
        })
        
    } catch (err) {
        dispatch({
            type :LOG_ERROR,
            payload : err.response.data
        })
        
    }
}

    //get current 
export const  getCurrent = item=>{
    return {        type:SET_CURRENT,
                     payload:item

        }

        
    } 
export const clearCurrent = ()=>{
    return {
        type:CLEAR_CURRENT
    }
}


//search log
export const search =(text )=> async dispatch=>{

    try {
        setLoading();
        const res =await fetch(`http://localhost:8080/logs?q=${text}`)
        const data = await res.json();
        
        dispatch({
            type:SEARCH_LOGS,
            payload : data

        })
        
    } catch (error) {
        dispatch({
            type:LOG_ERROR,
            payload:error.response.data
        })
        
    }


}


//set loading
export const setLoading= ()=>{
    return {
        type:SET_LOADING
    }
}