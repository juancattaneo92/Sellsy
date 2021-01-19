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

            <div className="sf-register">
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
            <div className="session-errors">{this.renderErrors()}</div>
            <div className="bottom-login-reg">
              <div className="divider"> OR </div>
              <div className="social-media">
                <a className="sm-buttons" href="https://www.google.com/account/about/" target="_blank"><i className="fab fa-google icon"></i>Continue with Google</a>
                <a className="sm-buttons" href="http://facebook.com" target="_blank"><i className="fab fa-facebook-f icon"></i>Continue with Facebook</a>
                <a className="sm-buttons" href="https://secure2.store.apple.com/shop/signIn?c=aHR0cHM6Ly93d3cuYXBwbGUuY29tL3wxYW9zZTQyMmM4Y2NkMTc4NWJhN2U2ZDI2NWFmYWU3NWI4YTJhZGIyYzAwZQ&r=SCDHYHP7CY4H9XK2H&s=aHR0cHM6Ly93d3cuYXBwbGUuY29tL3wxYW9zZTQyMmM4Y2NkMTc4NWJhN2U2ZDI2NWFmYWU3NWI4YTJhZGIyYzAwZQ" target="_blank"><i className="fab fa-apple icon"></i>Continue with Apple</a>
              </div>
              <div className="register-terms">
                By clicking Register or Continue you agree to use this Clone of Etsy
                Sellsy never send you communications; We'll never post without your permission.
                If you continue with Google, Facebook, or Apple, this is are only links and might not work.
            </div>
            </div>
        </form>
      </div>
      </div>
    );
  }
}

export default SignupForm;
