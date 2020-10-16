import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>{
    this.setState({ [field]: e.currentTarget.value })
  }}

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error) => (
          <li error={error} key={`error-${error.id}`}></li>
        ))}
      </ul>
    );
  }

  //  <h2 className="login-message">{this.props.formType}</h2>
  // <h2 className="button-change-session">{this.props.otherForm}</h2>

  render() {
    return (
      <div>
      <div className="close-x" onClick={this.props.closeModal}>x</div>

      <div className="session-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">



          <div className="top-signup">
              <h1 className="top-message1">Create your account</h1>
              <h1 className="top-message2">Registration is easy.</h1>
          </div>

            <div className="session-form">
                <br />
              <label className="input-label">Email address
                <br />
                <input type="text" className="session-input" value={this.state.email} onChange={this.update('email')}/>
              </label>
                <br />
              <label className="input-label">First name
                <br />
              <input type="text" className="session-input" value={this.state.f_name} onChange={this.update('f_name')} />
               </label>
                <br />
            <label className="input-label">Password
                <br />
                <input type="password" className="session-input" value={this.state.password} onChange={this.update('password')}/>
              </label>
                <br />
            <button type="submit" className="session-button" value={this.props.formType}>{this.props.formType}</button>
          </div>
        <h2>{this.renderErrors()}</h2>
        </form>
      </div>
      </div>
    );
  }
}

export default SignupForm;
