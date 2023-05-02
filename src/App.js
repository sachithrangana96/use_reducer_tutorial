import { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

const reducer = (state,action)=>{
 if(action.type==="setName"){
  return {...state,name:action.payload};
 }else if(action.type==="setCity"){
  return {...state,city:action.payload};
 }else if(action.type==="setPosition"){
  return {...state,position:action.payload};
 }else{
  return state;
 }
}

function App() {
  //setState => dispatch function
  const[state,setState] = useReducer(reducer,{
    name:'',
    city:'',
    position:'',
    dataArray:[],
  })
  console.log(state)
  return (
    <div className="App">
      <input type="text" value={state.name} onChange={(e)=>setState({
        type:'setName',
        payload:e.target.value
      })} />
      <input type="text" value={state.city} onChange={(e)=>setState({
        type:'setCity',
        payload:e.target.value
      })} />
      <input type="text" value={state.position} onChange={(e)=>setState({
        type:'setPosition',
        payload:e.target.value
      })} />
     <button  onClick={()=>setState({
      type:"setArray",
      payload:{
        name:state.name,
        city:state.city,
        position:state.position
      }
      })}>Submit</button>
    </div>
  );
}

export default App;
