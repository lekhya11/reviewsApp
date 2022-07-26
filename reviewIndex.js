import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeIndex: 0,
  }

  onClickLeftArrow = () => {
    const {reviewsList} = this.props
    const activeIndex = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const activeIndex = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      activeIndex
    ]
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="profile-container">
          <button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
              className="arrow-image"
              onClick={this.onClickLeftArrow}
            />
          </button>
          <div className="profile-block">
            <img src={imgUrl} alt={username} className="profile-image" />
            <h3 className="name-heading">{username}</h3>
            <p className="company-name">{companyName}</p>
            <p className="review-description">{description}</p>
          </div>
          <button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="arrow-image"
              onClick={this.onClickRightArrow}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
