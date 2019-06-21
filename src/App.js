import React,{Component,Fragment} from 'react';
import { TabBar } from 'antd-mobile';
// import logo from './logo.svg';
import './App.css';
import MyLayout from './components/Mylayouts';

class App extends React.Component {
   render(){
     return (
       <Fragment>
         <MyLayout></MyLayout>
       </Fragment>
     )
   }
    
  }

  

 


export default App;
