import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as fn from '../../functions/functions'

@connect(store => {
	return {
		user: store.user,
		follow: store.follow,
		note: store.notes
	}
})

export default class Banner extends React.Component {

	state = { is_following: false }

	componentWillReceiveProps = ({ follow: { is_following } }) =>
    this.setState({ is_following })

	follow = e => {
		e.preventDefault()
		let { dispatch, user: { user_details: { id, username } } } = this.props
    fn.follow({
      user: id,
      username,
      dispatch,
      update_followers: true,
      done: () => this.setState({ is_following: true })
    })
	}

	unfollow = e => {
    e.preventDefault()
    let { dispatch, user: { user_details: { id } } } = this.props
    fn.unfollow({
      user: id,
      dispatch,
      update_followers: true,
      done: () => this.setState({ is_following: false })
    })
	}

	toNotes = () => $('html, body').animate({ scrollTop: 390 }, 450)

	render(){
    let
      { url,
        user: { user_details },
        notes,
        follow: { profile_views, followers, followings}
      } = this.props,
      { is_following } = this.state,
      s_username = $('.data').data('username')

    return(
      <div>
        <div class='user_banner'>

          <div className="profile_img_div">
            <img src={ user_details.id ? `/users/${user_details.id}/user.jpg` : '/images/spacecraft.jpg' } alt="Your profile"/>
          </div>

          <div className="user_buttons">
            {
              fn.Me(user_details.id) ?
                <Link
                  to={{
                    pathname: `/profile/${s_username}/create-note`,
                    state: { modal: true }
                  }}
                  className={`create_note_btn pri_btn ${!fn.e_v() ? "a_disabled" : ""}`}
                >{fn.e_v() ? "Crear nota" : "Verificar email para crear nota"}</Link>
              :
              is_following ?
                <a href="#" className="unfollow pri_btn" onClick={this.unfollow} >Dejar de seguir</a>
              :
                <a href="#" className="follow pri_btn" onClick={this.follow} >Seguir</a>
            }
          </div>

          <div className="user_info">
            <Link to='#' className="user_main_link">{user_details.username}</Link>
            <span className="user_no_notes">{user_details.email}</span>
            <div className={`user_bio ${!user_details.bio ? 'no_bio' : null}`}>
              {
                user_details.bio ?
                  <span>{user_details.bio}</span>
                :
                  fn.Me(user_details.id) ?
                    <span>No tienes biografía</span>
                  :
                    <span>{`${user_details.username} no tiene biografía`}</span>
              }
            </div>
            <hr />
            <div className="user_stats">
              <div class="stat_post" onClick={this.toNotes} >
                <span class="stat_hg">{notes.length}</span>
                <span class="stat_nhg">Notas</span>
              </div>
              <Link to={`${url}/followers`} class="stat_followers" >
                <span class="stat_hg">{followers.length}</span>
                <span class="stat_nhg">Seguidores</span>
              </Link>
              <Link to={`${url}/followings`} class="stat_followings">
                <span class="stat_hg">{followings.length}</span>
                <span class="stat_nhg">Seguidos</span>
              </Link>
              <div class="stat_views stat_disabled ">
                <span class="stat_hg">{profile_views}</span>
                <span class="stat_nhg">Vistas al perfil</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    )

	}

}
