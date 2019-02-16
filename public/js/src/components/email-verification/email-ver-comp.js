import React from 'react'
import PropTypes from 'prop-types'
import Title from '../others/title-comp'
import { FadeIn } from 'animate-components'

export default class EmailVerification extends React.Component{
  render(){
    let
      { params: { is } } = this.props.match,
      mssg

    if(is == "yes"){
      mssg = "Tu email ha sido verificado correctamente"
    } else if(is == "alr"){
      mssg = "Email ya estaba verificado"
    } else {
      mssg = "Error"
    }

    return(
      <div>
        <Title value="E-mail verificacion"/>
        <FadeIn duration="300ms" >
          <div class="registered">
            <span>{mssg}</span>
          </div>
        </FadeIn>
      </div>
    )
  }
}
