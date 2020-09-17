import { ADD_TECHS,GET_TECHS,TECH_ERROR,DELETE_TECH,SET_LOADING} from './types';

//get techs
export const getTech = () => async dispatch =>{
    try {
        setLoading();
        const res = await fetch('http://localhost:8080/techs');
        const data =await res.json();
        dispatch({
            type:GET_TECHS,
            payload:data
        });
        
    } catch (err) {
        dispatch({
            type:TECH_ERROR,
            payload: err.response
        })
        
    }
    
}
//
//add techs
export const addTech =(tech) =>async  dispatch =>{
    try {
        setLoading();
        const res = await fetch('http://localhost:8080/techs',{
            method:'POST',
            body:JSON.stringify(tech),
            headers:{'Content-Type':'application/json'}
        })
        const data = await res.json();
        dispatch({
            type:ADD_TECHS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:TECH_ERROR,
            payload: error.response.data
        })

        
    }
}


//delete techs


export const deleteTech =(id) =>async dispatch =>{

    try {
        setLoading()
        await fetch(`http:localhost:8080/techs/${id}`,{
            method:'DELETE',
        })
        dispatch({
            type:DELETE_TECH,
            payload:id
        })
    } catch (error) {
        
        dispatch({
            type:TECH_ERROR,
            payload:error.response.statusText
        })
        
    }

}


export const setLoading = ()=>{
    return {
        type:SET_LOADING
    }
}