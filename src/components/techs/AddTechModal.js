import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techAction';
import PropTypes from 'prop-types'


const AddTechModal = ({ addTech }) => {
    const [firstName,setfirstName]=useState('')
    const [lastName,setlastName]=useState('');

    const onSubmit =()=>{
        if(firstName === '' ||lastName === '' ){
            M.toast({html :'please enter firstname and lastname'})
        }else{
            const technician ={
                firstName,lastName
            }
            addTech(technician)
            M.toast({html:`${firstName} ${lastName} was added as a tech`})
            setfirstName('')
            setlastName('')

        }
    }

    return (
        <div id ='add-tech-modal' className='modal' >
            <div className="modal-content">
                <h4>New Technician </h4>
                <div className="name">
                    <div className="row">
                        <div className="input-field">
                            <input 
                            type="text"
                             name="firstName"
                             value ={firstName} 
                             onChange={(e)=>setfirstName(e.target.value)}
                              />
                              <label htmlFor="firstName" className='active'>firstName</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input 
                            type="text"
                             name="lastName"
                             value ={lastName} 
                             onChange={(e)=>setlastName(e.target.value)}
                              />
                              <label htmlFor="lastName" className='active'>lastName</label>
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
AddTechModal.propTypes={
    addTech: PropTypes.func.isRequired,
}


export default connect(null,{addTech})(AddTechModal);
