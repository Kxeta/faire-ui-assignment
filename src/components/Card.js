import React from 'react';
import { PropTypes } from 'prop-types';
import ImageCarousel from './ImageCarousel';

import './Card.css';

const Card = props => {
  const getImagesList = imageList => {
    if (imageList.length > 3) {
      return imageList.slice(0, 3);
    }
    return imageList;
  };
  return (
    <div className="card">
      <a
        href={`https://www.faire.com/brand/${props.item.token}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.item.images && (
          <ImageCarousel imgList={getImagesList(props.item.images)} />
        )}
        <h3>{props.item.name}</h3>
        <div>
          <p className="minimum-order">{`$${props.item
            .minimum_order_amount_cents / 100} minimum`}</p>
          {props.item.has_new_products && (
            <p className="new-badge">New Things!</p>
          )}
        </div>
      </a>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
