import axios from "axios"
import './App.css';
import {useState,useEffect} from "react";
import {BsFillTrashFill} from "react-icons/bs";
import {FiEdit2} from "react-icons/fi";

function App() {

  const [giris,setGiris]=useState({
    task:"",
  });
  const [list,setList]=useState([]);

  const handleInputs=(e)=>{
    setGiris({...giris,[e.target.name]:e.target.value});
  }
  
  const onSubmit=()=>{
    axios.post("http://localhost:3001/insert",{
      task:giris.task,
      days:new Date()
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:3001/read").then((res)=>{
      setList(res.data);
    })
  },[]);


  return (
    <div className="App">
      <div className="box">
      <h1>Tasks</h1>
      <div className="">
        <input type="text" placeholder="Enter your task" name="task" value={giris.task} onChange={(e)=>handleInputs(e)}/>
        <button className="add" onClick={onSubmit}>+</button>
      </div>
      <div className="inside">
      {list && list.map((item)=>(
        <div className="details" key={item._id}>
          <p>{item.task}</p>
          <div className="">
          <button className="delete"><BsFillTrashFill/></button>
          <button className="edit"><FiEdit2/></button></div>
        </div>
      ))}</div></div>

    </div>
  );
}

export default App;
