// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMessage: '',
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    console.log(response)
    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.setState({
        errorMessage: data.error_msg,
        showErrorMessage: true,
      })
    }
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  inputName = event => {
    this.setState({username: event.target.value})
  }

  inputPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showErrorMessage, errorMessage, username, password} = this.state
    return (
      <div className="login-bg-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-img"
          />
          <form className="login-form" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-img"
            />
            <label htmlFor="name" className="input-label">
              USERNAME
            </label>
            <input
              type="text"
              id="name"
              className="input"
              placeholder="Username"
              value={username}
              onChange={this.inputName}
            />
            <label htmlFor="password" className="input-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={this.inputPassword}
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            {showErrorMessage && <p className="error-msg">*{errorMessage}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
