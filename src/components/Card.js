import React from 'react';
import { PropTypes } from 'prop-types';
import ImageCarousel from './ImageCarousel';

const Card = props => {
  return (
    <div className="card">
      <a
        href={`https://www.faire.com/brand/${props.item.token}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.item.images && <ImageCarousel imgList={props.item.images} />}
        <div>{props.item.name}</div>
        <div>
          <span>
            {`$${props.item.minimum_order_amount_cents / 100} minimum`}
          </span>
          {props.item.has_new_products && <span>They have new things!</span>}
        </div>
      </a>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};

export default Card;
