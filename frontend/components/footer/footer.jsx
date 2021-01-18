import React from 'react'; 
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      popMessage: false 
    };
    this.subs = this.subs.bind(this);
  }

  subs(){
    this.setState({ popMesssage: true })
    setTimeout(() => { this.setState({ popMesssage: false }) }, 2000)
  }

  render() {

    const displayMessage = this.state.popMesssage ? <div className="popup2"><div className="popuptext2">Thank you for subscribing!</div></div> : null;
    return (
      <div className='footer-container'>
        <img src={window.footer} alt="" />
        <div className=''>

        <div className='mailing-list-container'>

          <p>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Sellsy.</p>

          <div className='mailing-list-input'>
            <input type="text" placeholder='Enter your email' />
              <button onClick={this.subs}>Subscribe </button>
              {displayMessage}

          </div>
        </div>

        <div className='footer-links-container'>

          <div className='footer-blocks'>
            <div className='footer-shop fblock'>
              <a href="https://github.com/juancattaneo92" target="_blank">
              <h2>Shop</h2>
              <p>Gift cards</p>
              <p>Sellsy blog</p>
                </a>
            </div>

            <div className='footer-sell fblock'>
              <a href="https://github.com/juancattaneo92" target="_blank">
              <h2>Sell</h2>
              <p>Sell on Sellsy</p>
              <p>Teams</p>
              <p>Forums</p>
              <p>Affiliates</p>
              </a>
            </div>

            <div className='footer-about fblock'>
              <a href="https://github.com/juancattaneo92" target="_blank">
              <h2>About</h2>
              <p>Sellsy, Inc.</p>
              <p>Policies</p>
              <p>Investors</p>
              <p>Careers</p>
              <p>Press</p>
              <p>Impact</p>
              </a>
            </div>

            <div className='footer-help fblock'>
              <a href="https://github.com/juancattaneo92" target="_blank">
              <h2>Help</h2>
              <p>Help Center</p>
              <p>Privacy settings</p>
              </a>

              <div className='footer-icon-section'>
                <div className="footer-download">
                    <a href="https://github.com/juancattaneo92/Sellsy" target="_blank"><div className='download-app-btn'><i className="fab fa-stripe-s letterS"></i> Download the Sellsy App</div></a>
                </div>
                <div className='footer-logo-container'>
                    {/* github */}
                    <a href="https://github.com/juancattaneo92/Sellsy" target="_blank"><i className="fab fa-github fa-lg github"></i></a>  
                    {/* personal page  */}
                    <a href="" target="_blank"><i className="far fa-address-card fa-lg personalPage"></i></a> 
                    {/* Linkedin */}
                    <a href="https://www.linkedin.com/in/juan-carlos-cattaneo-450a3b97/" target="_blank"><i className="fab fa-linkedin fa-lg linkedin"></i></a> 

                    <a href="https://github.com/juancattaneo92" target="_blank"></a>  
                </div> 
              </div>
            </div>

          </div>
        </div>

        <div className='footer-end-container'>
          <div className="block-background"></div>
          <div className='terms-policies'>
              <a href="https://github.com/juancattaneo92" target="_blank">
                <div className="terms-policies-sides">
                  <p> United States</p>
                  <p>|</p>
                  <p> English (US)</p>
                  <p>|</p>
                  <p> $ (USD)</p>
                </div>
                <div className="terms-policies-sides">
                  <p>© 2021 Sellsy, Inc</p>
                  <p><u>Terms of Use</u></p>
                  <p><u>Privacy</u></p>
                  <p><u>Interest-based ads</u></p>
                </div>
                </a>
          </div>

        </div>
        </div>

      </div>
    )
  }

}

export default Footer;