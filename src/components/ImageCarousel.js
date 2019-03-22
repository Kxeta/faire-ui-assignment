import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: null,
    };
  }

  componentDidMount() {
    this.setState({
      imgUrl: this.props.imgList[0].url,
    });
  }

  onHoverHandler = e => {
    const { imgUrl } = this.state;
    const url = e.target.getAttribute('src');
    if (imgUrl !== url) {
      this.setState({
        imgUrl: url,
      });
    }
  };

  render() {
    console.log(this.props.imgList);
    return (
      <div
        className="image-carousel"
        style={{
          backgroundImage: `url("${this.state.imgUrl}")`,
          height: '200px',
          width: '150px',
        }}
      >
        <div className="images-list">
          {this.props.imgList.map((image, index) => (
            <img
              src={image.url}
              alt="champs"
              key={index}
              onMouseEnter={this.onHoverHandler}
              style={{ height: 'auto', width: '50px' }}
            />
          ))}
        </div>
      </div>
    );
  }
}

ImageCarousel.propTypes = {
  imgList: PropTypes.array,
};

export default ImageCarousel;
