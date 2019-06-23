import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import './navigation.css';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';


const Navigation = (props) => {
  let MenuEvent = ()=>{
    return true;
  };
  if(props.movil){
    MenuEvent = props.handleToggle;
  }
  return (
    <div className="Nav-container">
        <aside className="Nav-user">
          <MaterialIcon hasRipple icon='explore'/>
        </aside>
        <ul className="Nav-menu-list">
          <li>
            <NavLink to="/" activeClassName="active-menu" onClick={ MenuEvent }>
              Emergencias
            </NavLink>
          </li>
          <li>
            <NavLink to="/salas" activeClassName="active-menu" onClick={ MenuEvent }>
              Salas
            </NavLink>
          </li>
          <li>
            <NavLink to="/enfermeras" activeClassName="active-menu" onClick={ MenuEvent }>
              Enfermeras
            </NavLink>
          </li>
          
        </ul>
    </div>
  )
}

export default Navigation;