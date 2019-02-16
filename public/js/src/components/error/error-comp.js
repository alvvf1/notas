import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Title from '../others/title-comp'
import { FadeIn } from 'animate-components'

export default class Error extends React.Component{
  render(){
    let
      username = $('.data').data('username'),
      { params: { what } } = this.props.match,
      title,
      desc

    if(what == "notfound"){
      title = "Usuario no encontrado"
      desc = "user"
    } else if(what == "note_notfound"){
      title = "Nota no encontrada"
      desc = "note"
    } else {
      title = "Error"
      desc = "page"
    }

    return(
      <div class='error' >
        <Title value="Error {title}" />
        <FadeIn duration="300ms" >
          <div className="welcome_div error_div">
            <div className="error_info">
              <span>Lo sentimos. El {desc} que buscas no existe</span>
            </div>
            <img src="/images/error-3.svg" alt="" />
            <div class="error_bottom">
              <Link to={`/profile/${username}`} className="sec_btn error_home" >Ver perfil</Link>
              <Link to='/' className="pri_btn error_login" >Regresar a Inicio</Link>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  }
}
