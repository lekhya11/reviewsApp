import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state

    if (activeIndex > 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props

    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIndex
    ]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="profile-container">
          <button
            type="button"
            className="button"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          <div className="profile-block">
            <div className="align-center">
              <img src={imgUrl} alt={username} className="profile-image" />
            </div>
            <h3 className="name-heading">{username}</h3>
            <p className="company-name">{companyName}</p>
            <p className="review-description">{description}</p>
          </div>
          <button
            type="button"
            className="button"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel


