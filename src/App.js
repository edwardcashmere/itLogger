import React,{Fragment,useEffect} from 'react';
import  "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddModal from './components/logs/AddLogModal';
import EditModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  useEffect(()=>{
    //initialize materialize javascript
    M.AutoInit();
  })
  return (
    <Provider store={store} >
      <Fragment>
        <SearchBar />
        <div className="container">
          <Logs />
          <AddModal />
          <EditModal />
          <AddTechModal/>
          <TechListModal />

          <AddBtn />
        

        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
