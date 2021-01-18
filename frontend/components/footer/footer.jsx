import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    // this.subscription = this.subscription.bind(this);
  }
 
  handleClick(){
    e.preventDefault(e);

  }
  // subscription(){
  //   let popup = document.getElementById("popUp1");
  //   popup.classList.toggle("show");
  // }

  render() {
    return (
      <div className='footer-container'>
        <img src={window.footer} alt="" />
        <div className=''>

        {/* <img src={window.footer} alt="" /> */}

        <div className='mailing-list-container'>

          <p>Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Sellsy.</p>

          <div className='mailing-list-input'>
            <input type="text" placeholder='Enter your email' />
            {/* <button className="popup" onClick={this.subscription()}  >Subscribe */}

                {/* <span className="popUpText1" id="popUp1">Thanks for using Sellsy!</span> */}
            {/* </button> */}
          </div>
        </div>

        <div className='footer-links-container'>

          <div className='footer-blocks'>
            <div className='footer-shop fblock'>
              <h2>Shop</h2>
              <p>Gift cards</p>
              <p>Sellsy blog</p>
            </div>

            <div className='footer-sell fblock'>
              <h2>Sell</h2>
              <p>Sell on Sellsy</p>
              <p>Teams</p>
              <p>Forums</p>
              <p>Affiliates</p>
            </div>

            <div className='footer-about fblock'>
              <h2>About</h2>
              <p>Sellsy, Inc.</p>
              <p>Policies</p>
              <p>Investors</p>
              <p>Careers</p>
              <p>Press</p>
              <p>Impact</p>
            </div>

            <div className='footer-help fblock'>
              <h2>Help</h2>
              <p>Help Center</p>
              <p>Privacy settings</p>

              <div className='footer-icon-section'>
               
                {/* <a href="" target="_blank"><div className='download-app-btn'><img src='' /> Download the Sellsy App</div></a> */}

                <div className='footer-logo-container'>
                  {/* <a href="" target="_blank">{githubIcon}</a>
                  <a href="" target="_blank">{linkedinIcon}</a>
                  <a href="" target="_blank">{briefcaseIcon}</a>
                  <a href="">{convoIcon}</a> */}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='footer-end-container'>
          <div className="block-background"></div>
          <div className='terms-policies'>
              <p>© 2021 Sellsy, Inc</p> 
              <p><u>Terms of Use</u></p>
              <p><u>Privacy</u></p>
              <p><u>Interest-based ads</u></p>
         
          </div>
        </div>
        </div>

      </div>
    )
  }

}

export default Footer;