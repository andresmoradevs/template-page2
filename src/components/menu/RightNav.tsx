import React from 'react'
import * as S from './styles';

import Logo from '../../assets/logo.png';
import IconReact from '../../assets/react.svg';
import IconMegamen from '../../assets/megamen.png';
import IconMario from '../../assets/mario.png';
import IconTurtle from '../../assets/turtle.png';

import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

type Props = {
  open: boolean;
}

function RightNav(props: Props) {

  return (
    //Routes
    <Router>
      <S.Ul open={props.open}>
        <S.LogoUl src={Logo}/>

        <NavLink to="/inicio"
          activeStyle={{
            fontWeight: "bold",
            color: "#f57c00"
          }}
        >
          <li>Inicio</li>
        </NavLink>
        <NavLink to="/nosotros"
          activeStyle={{
            fontWeight: "bold",
            color: "#f57c00"
          }}
        >
          <li>Nosotros</li>
        </NavLink>
        <NavLink to="/productosyservicios"
          activeStyle={{
            fontWeight: "bold",
            color: "#f57c00"
          }}
        >
          <li>Productos y Servicios</li>
        </NavLink>
        <NavLink to="/contactanos"
          activeStyle={{
            fontWeight: "bold",
            color: "#f57c00"
          }}
        >
          <li>Contáctanos</li>
        </NavLink>
      </S.Ul>

      
      <Switch>
        <Route exact path="/inicio">
          <S.Icon>
            <img src={IconReact}/>
          </S.Icon>
        </Route>
        <Route exact path="/nosotros" >
          
          <S.Icon>
            <img src={IconMegamen}/>
          </S.Icon>
        </Route>
        <Route exact path="/productosyservicios" >
          <S.Icon>
            <img src={IconMario}/>
          </S.Icon>
        </Route>
        <Route exact path="/contactanos">
          <S.Icon>
            <img src={IconTurtle}/>
          </S.Icon>
        </Route>

        <Redirect to='/inicio'/>
      </Switch>
    </Router >
  )
}

export default RightNav
