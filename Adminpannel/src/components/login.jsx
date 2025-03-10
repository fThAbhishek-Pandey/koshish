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
    <div className='max-w-lg mx-auto bg-white p-6 shadow-md border border-gray-200 mt-20'>
        <div className='text-center text-2xl font-bold mb-5'>Login Page</div>
        <form
        className='space-y-8'
       onSubmit={onSubmitHandler}
        >
             
            <div>
                <label className='block text-sm font-medium text-gray-700'>Username</label>
                <input 
                onChange={e=> setUsername(e.target.value)}
                value={Username}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg hover:border-3 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                />
            </div>
            <div>
                
                <label className='block text-sm font-medium text-gray-700'>Password</label>
                <input 
                onChange={e=> setPassword(e.target.value)}
                value={password}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg hover:border-3 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                required
                 />
            </div>
            <div>
            
                <label className='block text-sm font-medium text-gray-700'>Login as:</label>
                <select name="role" onChange={e=>setRole(e.target.value)} id="" className='w-full mt-1 p-2 border rounded-lg hover:border-3 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    <option value="">--select--</option>
                    <option value="coordinator" >Coordinator</option>
                    <option value="cocircular">Cocircular</option>
                </select>
            </div>
            <button className='mt-8 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-500' type='submit'>Login</button>
        </form>


    </div>
  )
}

export default Login