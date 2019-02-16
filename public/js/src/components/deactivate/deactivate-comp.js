import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import { FadeIn } from 'animate-components'
import Title from '../others/title-comp'
import * as fn from '../../functions/functions'

import Overlay from '../others/overlay-comp'
import Prompt from '../others/prompt-comp'

export default class Deactivate extends React.Component{

  state = { deactivate: false }

  toggle_ = (e, what) => {
    e ? e.preventDefault() : null
    switch (what) {
      case "deactivate":
        this.setState(state => ({ deactivate: !state.deactivate }))
        break
    }
  }

  deactivate = e => {
    e.preventDefault()
    fn.deactivate()
  }

  render(){
    let { deactivate } = this.state

    return (
      <div>
        <Title value="Borrar su cuenta" />
        <FadeIn duration="300ms" >
          <div class="registered deactivate" >
            <span className="deactivate_title" >Borrar su cuenta</span>
            <span>
            Todas tus notas, seguidores, seguidos e información será permanentemente borrado y no podrá recuperarse.</span>
            <div className="deactivate_btn">
              <a href="#" className="pri_btn d_btn"  >Borrar</a>
            
            </div>
          </div>
        </FadeIn>

        {deactivate ? <Overlay /> : null}
        {
          deactivate ?
            <Prompt
              title="Borrar tu cuenta"
              content="¿Estás seguro? Todas tus notas, seguidores, seguidos e información será permanentemente borrado y no podrá recuperarse."
              actionText="Deactivate"
              action={this.deactivate}
              state_updater="deactivate"
              close={this.toggle_}
            />
          : null
        }

      </div>
    )
  }

}


/*
<a href="#" className="pri_btn d_btn" onClick={e => this.toggle_(e, "deactivate")} >Borrar</a>  
*/