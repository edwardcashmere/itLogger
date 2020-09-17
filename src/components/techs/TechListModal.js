import React,{useEffect} from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTech } from '../../actions/techAction';
import PropTypes from 'prop-types'






const AddTechModal = ({ tech:{techs,Loading },getTech}) => {
    useEffect(()=>{
        getTech()
        //eslint-disable-next-line   
    },[])

   
    return (
       <div id="tech-list-modal" className='modal'>
           <div className="modal-content">
               <h4>Technicians</h4>
               <ul className="collection">
                   {!Loading &&
                   techs !== null && techs.map(tech =>(
                       <TechItem tech={tech} key={tech.id} />
                   ))}
               </ul>
           </div>
       </div>
    )
}
AddTechModal.propTypes={
    getTech: PropTypes.func.isRequired,
    tech: PropTypes.object.isRequired,
}
const mapStateToProps=state=>({
    tech: state.tech
})
export default connect(mapStateToProps,{getTech})( AddTechModal);
