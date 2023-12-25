import './App.css';
import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

class App extends React.Component {
  state = {
    advice: '',
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleTwitterClick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(this.state.advice)}`, '_blank');
  }

  handleFacebookClick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  }

  render() {
    const { advice } = this.state;

    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={this.fetchAdvice}>
            <span>Give me advice!</span>
          </button>

          {/* Icon Row */}
          <div className='icon-row'>
            {/* Twitter Icon */}
            <div className='icon' onClick={this.handleTwitterClick}>
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#1DA1F2' }} />
            </div>

            {/* Gap */}
            <div className='icon-gap'></div>

            {/* Facebook Icon */}
            <div className='icon' onClick={this.handleFacebookClick}>
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
