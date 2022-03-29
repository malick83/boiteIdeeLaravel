// import React, { useEffect, useState } from 'react'
// import Cartes from './Cartes';
// import axios from "axios";
// import { useRecoilState }  from 'recoil';
// import suggestions from "../atoms/suggestions";

// const Liste = () => {
//     const [data, setData] = useRecoilState(suggestions);
//     let [accepte, refuse] = [0,0];
    
//     useEffect( ()=> {
//         axios("https://api-simplon-mk.herokuapp.com/api/idee").then( response => setData(response.data));
//     }, []);
    
//     return (
//         <div className="row">
//             {console.log(data)}
//             {data && data.map( idea =>
//                 { idea.statut ? accepte++ : refuse++;
//                 return <Cartes key={idea.id} idea={idea} />;
//                 })}
//         </div>
//       )
// }

// export default Liste