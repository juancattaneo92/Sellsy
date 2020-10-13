import React from 'react';

class SessionForm extends React.Component {
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
    this.props.processForm(user);
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

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Sellsy!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
            <div className="login-form">
                <br />
              <label>Email:
                <input type="text" className="login-input" value={this.state.email} onChange={this.update('email')}/>
              </label>
                <br />
              <label>Password:
                <input type="password" className="login-input" value={this.state.password} onChange={this.update('password')}/>
              </label>
                <br />
            <button type="submit" className="session-submit" value={this.props.formType}>{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
