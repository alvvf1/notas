import React from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'

export default class Header extends React.Component{
  render(){
    let
      username = $('.data').data('username'),
      id = $('.data').data('session')

    return (
      <div class='header_loggedin' >
        <div class="left">
          <NavLink activeClassName="ha_active" exact={true} to="/" >Seguidos</NavLink>
          <NavLink activeClassName="ha_active" to="/explore">Otros</NavLink>
          <NavLink activeClassName="ha_active" to="/deactivate" >Borrar cuenta</NavLink>
        </div>
        <div className="right">
          <NavLink activeClassName="ha_active" to={`/profile/${username}`} className='vp' >{username}</NavLink>
          <NavLink activeClassName="ha_active" to="/edit" >Editar perfil</NavLink>
          <a href="/logout" >Desconectar</a>
        </div>
      </div>
    )
  }
}
