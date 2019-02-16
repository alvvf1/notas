import React from 'react'
import $ from 'jquery'
import { FadeIn } from 'animate-components'
import Title from '../others/title-comp'
import { connect } from 'react-redux'
import * as fn from '../../functions/functions'
import Goto from '../others/goto-comp'

@connect(store => {
	return {
		notes: store.notes
	}
})

export default class Create_note extends React.Component{

  back = e => fn.back(e, this.props.history)

  addNote = e => {
    e.preventDefault()
    let
      title = $('.c_n_middle input[type="text"]').val(),
      content = $('.c_n_middle textarea').val(),
      { dispatch, history } = this.props
    fn.createNote({ title, content, dispatch, history })
  }

  render(){
    return (
      <div class='create_note modal'>
        <Title value="Crear nota" />
        <FadeIn duration="300ms" >
          <form onSubmit={this.addNote} >
            <div className="c_n_header modal_header">
              <span className="title" >Crear una nota</span>
              <Goto />
            </div>
            <div className="c_n_middle modal_middle">
              <input type="text" placeholder='Título...' required spellCheck="false" autoComplete="false" autoFocus />
              <textarea placeholder='Tu nota...' required spellCheck='false' autoComplete='false' ></textarea>
            </div>
            <div className="c_n_bottom modal_bottom">
              <a href="#" className='c_n_cancel sec_btn' onClick={this.back} >Regresar</a>
              <input type="submit" className='c_n_add pri_btn' value='Añadir nota' />
            </div>
          </form>
        </FadeIn>
      </div>
    )
  }

}
