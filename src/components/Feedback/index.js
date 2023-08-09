import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedBack: true}

  onChangeButton = () => {
    this.setState({isFeedBack: false})
  }

  renderBackFeed = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg">
        <div className="container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <div className="">
            <ul className="un-order">
              {emojis.map(emoji => (
                <li key={emoji.id}>
                  <button
                    className="btn"
                    type="button"
                    onClick={this.onChangeButton}
                  >
                    <img
                      src={emoji.imageUrl}
                      className="img"
                      alt={emoji.name}
                    />
                    <br />
                    <span className="span1">{emoji.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderFeedBack = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg">
        <img src={loveEmojiUrl} className="img" alt="love emoji" />
        <h1 className="heading1">Thank You!</h1>
        <p className="para">
          We will use your feedback to improve the customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBack} = this.state

    return (
      <div className="bg1">
        {isFeedBack ? this.renderBackFeed() : this.renderFeedBack()}
      </div>
    )
  }
}
export default Feedback
