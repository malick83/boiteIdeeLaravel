import React, {useEffect, useState} from "react";
import axios from "axios";
import Cartes from './Cartes';
import {useRecoilState} from 'recoil';
import suggestions from "../atoms/suggestions";

const Proposition = (props) => {
    let {titre} = props;
    const [data, setData] = useRecoilState(suggestions);
    const [findValeur, setFindValeur] = useState("");
    const [findValeur1, setFindValeur1] = useState("");
    let [accepte, refuse] = [0,0];

    useEffect( ()=> {
        axios("https://api-simplon-mk.herokuapp.com/api/idee").then( response => setData(response.data));
    }, []);



    const filtrerefuser = (e) => {
        console.log("c'est bon");
        setFindValeur(false);

    }
    const filtreaccepter = (e) =>{
        setFindValeur1(true);
    }
    return(
        <>
        <div className="container">
            <div className="d-flex justify-content-between align-items-center my-5">
                <h3>{titre}</h3>
                <div>

                <a href='/'><button className="filtre-tous btn  me-2 btn-outline-secondary btn">Tous</button></a>
                    <button className="filtre-refuse btn btn-outline-danger btn me-2" onClick={filtrerefuser}>Refusée</button>
                    <button className="filtre-accepte btn btn-outline-success btn" onClick={filtreaccepter}>Acceptée</button>
                </div>

            </div>
            <div className="row">
                {console.log(data)}
                {data && data
                .filter((idea) => {
                    return idea.statut.toString().includes(findValeur1)
                })
                .filter((idea) => {
                    return idea.statut.toString().includes(findValeur)
                })
                .map( idea => { 
                    idea.statut ? accepte++ : refuse++;
                    return <Cartes key={idea.id} idea={idea} />;
                })
                }
            </div>
        </div>
        </>
    );
}

export default Proposition;
