// const Cartes = (props) => {
//     let {monTitre, maDescription} = props
//     return(
// <div className="card card-idea m-2" style={{ width: '18rem' }}>
// <div className="card-body flex-column d-flex justify-content-between">
//     <div className="card-block-titre">
//       <h5 className="card-title fw-bold">{monTitre}</h5>
//       <h6 className="card-subtitle mb-2 text-gris">
//           approuvée / réfusée
//       </h6>
//     </div>
//     <p className="card-text">{maDescription}
//     </p>
//     <div className="d-flex justify-content-between">
//         <i
//             className="bi bi-check-circle text-success card-link btn"
//             style={{ fontSize: '2rem' }}
//         ></i>
//         <i
//             className="bi bi-x-circle card-link btn"
//             style={{ fontSize: '2rem', color: "#ce0033" }}
//         ></i>
//     </div>
// </div>
// </div>
//     );
// }

// export default Cartes;
import React, {useState} from 'react';
import StyledCard from './style/carte';
import axios from "axios";


const Cartes = ({idea}) => {
    const [statut, setStatut] = useState(idea.statut);

    const handleValid = () => {
        
        axios(`https://api-simplon-mk.herokuapp.com/api/idee/${idea.id}`, {
            method: 'patch',
            // headers: {
            //     apikey: "",
            //     "Content-Type": "application/json",
            // },
            data: {
                statut : true,
            }
        }).then( () => setStatut(true))
        }
    const handleUndo = () => {
        
        axios(`https://api-simplon-mk.herokuapp.com/api/idee/${idea.id}`, {
            method: 'patch',
            // headers: {
            //     apikey: "",
            //     "Content-Type": "application/json",
            // },
            data: {
                statut: false
            }
        }).then( () => setStatut(false))
    }
        
    
  return (
    <StyledCard 
        className="card card-idea m-2"
        etat={statut}
        >
        <div className="card-body flex-column d-flex justify-content-between">
            <div className="card-block-titre">
                <h5 className="card-title fw-bold">{idea.title}</h5>
                <h6 className="card-subtitle mb-2 text-gris">
                    {statut ? "approuvée" : "réfusée"}
                </h6>
            </div>
            <p className="card-text">{idea.suggestion} </p>
            <div className="d-flex justify-content-between">
                <i id={"approuve"} className="bi bi-check-circle text-success card-link btn" style={{fontSize: "2rem"}} onClick={handleValid}
                ></i>
                <i id={"desapprouve"} className="bi bi-x-circle card-link btn" style={{fontSize: "2rem", color: "#ce0033"}} onClick={handleUndo}
                ></i>
            </div>
        </div>
    </StyledCard>
  )
}

export default Cartes