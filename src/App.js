import React,{useState} from 'react'


const App=()=> {
  const[data,setData]=useState({
    
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const {username,email,password,confirmPassword}=data;
  const changeHandler=e=>{

    setData({...data,[e.target.name]:e.target.value})
  }
const submitHandler=e=>{
  e.preventDefault();
if(password===confirmPassword){
  console.log(data);
}
else{
  console.log("Passwords are not matching...")
}
 
}

  return (
    <div className="App">
      <center>
      <form onSubmit={submitHandler}>

<input type="text" name="username" value={username} onChange={changeHandler}/><br></br>
<input type="email" name="email" value={email}  onChange={changeHandler}/><br></br>
<input type="password" name="password" value={password}  onChange={changeHandler}/><br></br>
<input type="confirmPassword" name="confirmPassword" value={confirmPassword}  onChange={changeHandler}/><br></br>
<input type="submit" name="submit" /><br></br>

      </form>

      </center>
    </div>
  );
}

export default App;
