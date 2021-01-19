import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
    
  }
  
  demoLogin(e) {
    e.preventDefault();
    let login = this.props.login ? this.props.login : this.props.processForm;
    let that = this;
    let count = 0;
    let demo = 'demoGuest@sellsy.comdemopassword';
      if (this.demo) return;
          this.setState({
                        email: '',
                        password: ''
      });
    this.demo = setInterval(() => {
      let type = count < 20 ? 'email' : 'password';
      that.setState({ [type]: that.state[type] + demo[count] });
      count++;
      if (count === 32) {
        clearInterval(this.demo)
        login({
          email: 'demoGuest@sellsy.com',
          password: 'demopassword'
        }).then(this.props.closeModal);
      }
    }, 50)
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <h2 key={`error-${i}`}>{error}</h2>
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
    
          
          <div className="top-login">
          <h2 className="login-message">{this.props.formType}</h2> 
            <h2 className="button-top">{this.props.otherForm}</h2>
          </div>

          <div className="sf-login">
            <br />
            <label className="input-label">Email address
                <br />
              <input type="text" className="session-input" value={this.state.email} onChange={this.update('email')} />
            </label>
            <br />
            <label className="input-label">Password
                <br />
              <input type="password" className="session-input" value={this.state.password} onChange={this.update('password')} />
            </label>
            <br />
            <button type="submit" className="session-button" value={this.props.formType}>{this.props.formType}</button>
            <button onClick={this.demoLogin} className='session-button'>Demo Guest</button>
          </div>
          <div className="session-errors">{this.renderErrors()}</div>
          <div className="bottom-login">
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
      </div >
    );
  }
}

export default LoginForm;
