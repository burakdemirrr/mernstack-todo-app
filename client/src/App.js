import axios from "axios"
import './App.css';
import {useState,useEffect} from "react";
function App() {

  const [giris,setGiris]=useState({
    task:"",
    days:0,
  });
  const [list,setList]=useState([]);

  const handleInputs=(e)=>{
    setGiris({...giris,[e.target.name]:e.target.value});
  }
  
  const onSubmit=()=>{
    axios.post("http://localhost:3001/insert",{
      task:giris.task,
      days:giris.days
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:3001/read").then((res)=>{
      setList(res.data);
    })
  },[]);

  


  return (
    <div className="App">
      <h1>To-Do App</h1>

      <div className="">
        <input type="text" placeholder="Enter your task" name="task" value={giris.task} onChange={(e)=>handleInputs(e)}/>
        <input type="text" placeholder="How many days remained?" name="days"  value={giris.days} onChange={(e)=>handleInputs(e)}  />
      
        <button onClick={onSubmit}>+</button>
      </div>


      {list && list.map((item)=>(
        <div className="" key={item._id}>
          <p>{item.days}</p>
          <p>{item.task}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
