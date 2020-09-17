import React,{useState,useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechOptions from '../techs/TechOptions';

import { connect } from 'react-redux';
import  { updateLog,clearCurrent } from '../../actions/logsAction';
import PropTypes from 'prop-types';



const EditLogModal = ({ current ,updateLog,clearCurrent}) => {
    const [message,setMessage]=useState('')
    const [attention,setAttention]=useState(false);
    const [tech,setTech] =useState('');


    useEffect(()=>{
        if (current){
            setAttention(current.attention);
            setMessage(current.message);
            setTech(current.tech);
        }

    },[current])

    const onSubmit =()=>{
        if(message === '' ||tech === '' ){
            M.toast({html :'please enter message or tech'})
        }else{
            const updatedLog={
                id:current.id,
                message,
                attention,
                tech,
                date: new Date()

            }
            updateLog(updatedLog)
            M.toast({ html :`update log by ${tech}`})
            clearCurrent()
            setAttention(false)
            setMessage('')
            setTech('')

        }
    }

    return (
        <div id ='edit-log-modal' className='modal' style={{width:'75%',height:'75%'}}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="name">
                    <div className="row">
                        <div className="input-field">
                            <input 
                            type="text"
                             name="message"
                             value ={message} 
                             onChange={(e)=>setMessage(e.target.value)}
                              />
                              
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <select 
                            type="text"
                            name="tech"
                            value ={tech}
                            className="browser-default"
                            onChange ={e => setTech(e.target.value)}>
                                <option value="" disabled>
                                    Select Technician
                                </option>
                                <TechOptions/>

                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <p>
                                <label >
                                    <input type="checkbox"
                                    value={attention} 
                                    checked={attention} 
                                    className="filled-in"
                                    onChange={e=>setAttention(!attention)}
                                    />
                                    <span>Needs Attention</span>
                                </label>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close blue waves-effect waves-green btn-flat">Enter</a>
            </div>
            
        </div>
    )
}
EditLogModal.propTypes={
    updateLog : PropTypes.func.isRequired,
    current : PropTypes.object
}
const mapStateToProps = state =>({
    current:state.log.current
})

export default connect(mapStateToProps,{updateLog,clearCurrent})(EditLogModal);
