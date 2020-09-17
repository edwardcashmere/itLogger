import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLogs ,getCurrent} from '../../actions/logsAction';


const LogItem = ({log,deleteLogs,getCurrent})=> {
    return (
        <div className='collection-item'>
            <div>
               <a href="#edit-log-modal" onClick={()=>getCurrent(log)}
                className={`modal-trigger ${log.attention ? 'red-text' :
                'blue-text'}`}>{log.message}
                </a>
                <br/>
                <span className="grey-text">
                    <span className="black-text">
                        ID # {log.id}{' '}
                    </span>last updated by
                    <span className="black-text">
                       {' '} {log.tech}
                    </span> on <Moment format='MMMM Do YYYY, h:mm:ss a' >{log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content" onClick={ ()=>deleteLogs(log.id) }>
                    <i className="material-icons grey-text">delete</i>
                </a>

            </div>
            
        </div>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,

}

export default connect(null,{ deleteLogs,getCurrent }) (LogItem);
