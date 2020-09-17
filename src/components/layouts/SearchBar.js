import React,{useRef} from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/logsAction';
import PropTypes from 'prop-types'


const SearchBar = ({ search }) => {
  const text =useRef('');
  const onChange =e =>{
    search(text.current.value)
  }
    return (
        
    <nav style={{marginBottom:'30px'}} className="blue">
        <div className="nav-wrapper">
          <form >
            <div className="input-field">
              <input id="search" type="search" ref={text} placeholder='search Logs ...' onChange={onChange} />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )
}

SearchBar.propTypes={
  search: PropTypes.func.isRequired,
}

export default connect(null,{search})(SearchBar);
