import React, { use, useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { CocirculerContext } from '../context/cocirculer';
import { CoordinatorContext } from '../context/coordinater';
import login from '../utilities/App/login';
import { AppContext } from '../context/app';
const Login = () => {
        const {setCirToken}= useContext(CocirculerContext);
        const { setOrdiToken}= useContext(CoordinatorContext)
        const {backendURL}=useContext(AppContext)
        const [Username, setUsername]= useState();
        const [password, setPassword] = useState();
        const [role, setRole]= useState();
        console.log("backendUrl",backendURL);
  const  onSubmitHandler=(e)=>{
            e.preventDefault()
            console.log(Username,password,role)
            if(!role) {
                toast.info('please enter your role');
                return;
            }
           else if (role== 'cocircular'){
                login(backendURL,Username,password,role, setCirToken)
            }
        else if (role== 'coordinator'){
            login(backendURL,Username,password,role,setOrdiToken)
        }
    }
  return (
    <div className='mt-[13vh] w-3xl'>
        <div>Login Page</div>
        <form
        className='flex flex-col max-w-fit p-5 items-center gap-3 border-2 w-'
       onSubmit={onSubmitHandler}
        >
             
            <div  className='bg-blue-200'>
                <h3>Username</h3>
                <input 
                onChange={e=> setUsername(e.target.value)}
                value={Username}
                className='bg-blue-100 border-2 hover:border-3 hover:border-blue-700 rounded border-r-blue-700' type="text" 
                required
                />
            </div>
            <div  className='bg-blue-200'>
                
                <h3>Password</h3>
                <input 
                onChange={e=> setPassword(e.target.value)}
                value={password}
                className='bg-blue-100 border-2 hover:border-3 hover:border-blue-700 rounded border-r-blue-700'
                type="password"
                required
                 />
            </div >
            <div  className='bg-blue-200'>
                <label htmlFor="">
                    login as: 
            <select name="role" onChange={e=>setRole(e.target.value)} id="">
                <option value="">--select--</option>
                <option value="coordinator" >Coordinator</option>
                <option value="cocircular">Cocicular</option>
            </select>
            </label>
            </div>
            <button >Login</button>
        </form>


    </div>
  )
}

export default Login