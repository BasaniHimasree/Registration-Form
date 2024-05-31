import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstnameInput: '',
    lastnameInput: '',
    isFormSubmitted: false,
    showFirstnameError: false,
    showLastnameError: false,
  }

  onAddFirstnameInput = event => {
    this.setState({firstnameInput: event.target.value})
  }

  onAddLastnameInput = event => {
    this.setState({lastnameInput: event.target.value})
  }

  onBlurFirstname = () => {
    const firstName = this.validateFirstName()
    this.setState({showFirstnameError: !firstName})
  }

  onBlurLastname = () => {
    const lastName = this.validateLastname()
    this.setState({showLastnameError: !lastName})
  }

  renderFirstnameInput = () => (
    <div className="input-card">
      <label htmlFor="firstName">FIRST NAME</label>
      <input
        id="firstname"
        onBlur={this.onBlurFirstname}
        onChange={this.onAddFirstnameInput}
        type="text"
        placeholder="First name"
        className="input"
      />
    </div>
  )

  renderLastnameInput = () => (
    <div className="input-card">
      <label htmlFor="lastName">LAST NAME</label>
      <input
        id="lastname"
        onBlur={this.onBlurLastname}
        onChange={this.onAddLastnameInput}
        type="text"
        placeholder="Last name"
        className="input"
      />
    </div>
  )

  validateFirstName = () => {
    const {firstnameInput} = this.state
    return firstnameInput !== ''
  }

  validateLastname = () => {
    const {lastnameInput} = this.state
    return lastnameInput !== ''
  }

  onAddRegistration = event => {
    event.preventDefault()
    const firstName = this.validateFirstName()
    const lastName = this.validateLastname()
    if (firstName && lastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        isFormSubmitted: false,
        showFirstnameError: !firstName,
        showLastnameError: !lastName,
      })
    }
  }

  renderFormSubmission = () => {
    const {showFirstnameError, showLastnameError} = this.state
    return (
      <div className="card">
        <form className="form" onSubmit={this.onAddRegistration}>
          {this.renderFirstnameInput()}
          {showFirstnameError && <p className="paragraph">Required</p>}
          {this.renderLastnameInput()}
          {showLastnameError && <p className="paragraph">Required</p>}
          <div className="button-card">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }

  submitAnotherResponse = () => {
    const {isFormSubmitted} = this.state
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstnameInput: '',
      lastnameInput: '',
    }))
  }

  renderSuccessSubmisttion = () => (
    <div className="container">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-image"
        />
        <p className="paragraph">Submitted Successfully</p>
        <button
          type="button"
          className="button"
          onClick={this.submitAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted
          ? this.renderSuccessSubmisttion()
          : this.renderFormSubmission()}
      </div>
    )
  }
}

export default RegistrationForm
