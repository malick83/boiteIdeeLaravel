import axios from "axios";
import {useState} from "react";

import fille from '../fille.svg';

const Formulaire = (props) =>{
    const longueurMax = 130;
    const[contenuSaisi, setContenuSaisi] = useState("");
    const[resteSaisi, setResteSaisi] = useState(longueurMax);
    const [title, setTitle] = useState("");


    const handlerTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChange = (e) => {
        setContenuSaisi(e.target.value);
        setResteSaisi(longueurMax - contenuSaisi.length);
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        axios("https://api-simplon-mk.herokuapp.com/api/idee", {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                title:title,
                suggestion:contenuSaisi,
                statut:true
            }
        })
    }
    return(
        <div className="container">
            <div className="row">
                <form onSubmit={handlerSubmit} action="index.html" method="post" className="col-md">
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">Titre</label>
                        <input
                            type="text"
                            className="form-control"
                            name="titre"
                            placeholder="Ex : Brief......"
                            aria-describedby="titreHelp"
                            onChange={handlerTitle}
                        />
                        <div className="form-text">
                            Merci de donner un titre clair pourla
                            catégorisation
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="suggestion" className="form-label"
                            >Suggestion</label
                        >
                        <textarea
                            className="form-control"
                            name="suggestion"
                            rows="3"
                            onChange={handleChange}
                        ></textarea>
                        <p id="limite-text">
                            Contenu saisi {contenuSaisi.length}
                            <span id="text-progress"></span> / 130
                        </p>
                        <p id="text-restant" style={{ color: resteSaisi > 100 ? "green":"red"}}>Il vous reste {resteSaisi}</p>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-danger float-end"
                        style={{ backgroundColor: "#ce0033" }}
                    >
                        Envoyer
                    </button>
                </form>
                <div className="col">
                    <img src={fille} className="img-fluid" />
                </div>
        </div>
    </div>
    );
}

export default Formulaire;