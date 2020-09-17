import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { getTech } from '../../actions/techAction';
import PropTypes from 'prop-types';


const TechOptions = ({getTech,tech:{techs,Loading}
}) => {
    useEffect(()=>{
        getTech()
        //eslint-disable-next-line
    },[])
    return (
        !Loading && techs !== null && techs.map(t => (
        <option key ={t.id} value={`${t.firstName} ${t.lastName}`} >{t.firstName} {t.lastName}</option>
        ))
    )
}
TechOptions.propTypes={
    getTech: PropTypes.func.isRequired,
    tech: PropTypes.object.isRequired,
}
const mapStateToProps=state=>({
    tech:state.tech

})

export default connect(mapStateToProps,{ getTech })(TechOptions);
