import React, {useContext, useEffect} from 'react';

import { AppContext } from '../../../context/App';

const IndexMentor = () => {
   const {allMentor,handelgetAllMentor} = useContext(AppContext);
 useEffect(()=>{
   handelgetAllMentor()
 },[])
  return (
 <div >
       this is mentor section

       { allMentor && <div>
         {
           allMentor.map ((item , index)=>{
              return <div key={index}>
                 <h2>hi  my name is {item.name}</h2>
              </div>
           })
         }
       </div> }
    </div>

  );
};

export default IndexMentor;
