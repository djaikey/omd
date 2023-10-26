import "../Styles/Nav.css"
import { useState } from "react";

function Nav() {
   // state

   const [titres, setTitres]= useState ( [
    {id: 1, name: 'À propos de moi'},
    {id: 2,name: "Mes compétences"},
    { id: 3, name: "Modèles de Projets" },
    {id:3, name: "Formulaire de contact"}
  ]);   

// Render
   
    return (
       <div className="Nav-back">
            <nav className="Nav-barre">
                <div className="Logo"><img src="src/Asset/md.png" alt="logo OMD"/></div>
                <div className="line"></div>
                <div className="Nav-options">{titres.map((titre) => {
                    return <p className="option">{titre.name}</p>
                })}
                </div>  
                

            </nav>
        </div>
    );
  }
  
  export default Nav;