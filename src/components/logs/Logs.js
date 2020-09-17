import React,{useEffect} from 'react';
import LogItem from './LogItem'; 
import Preloader from '../layouts/Preloader';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logsAction';
import PropTypes from 'prop-types';





const Logs = ({ log:{logs,Loading},getLogs}) => {
    

    useEffect(()=>{
        getLogs()
        //eslint-disable-next-line    
    },[])

    
    if(Loading || logs ===null){
        return <Preloader/>
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
                {!Loading && logs.length ===0?(<p className="center">No logs to show...</p>):
                (logs.map(log=> <LogItem key={log.id} log={log}/>))}

            </li>

        </ul>
    )
}
const stateProptypesMap = state =>( {
    log :state.log
})
Logs.propTypes={
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

export default connect(stateProptypesMap,{ getLogs})(Logs);
