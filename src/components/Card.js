import React from 'react';
import { PropTypes } from 'prop-types';

const Card = props => {
  console.log(props.item);
  return (
    <div className="card">
      <a
        href={`https://www.faire.com/brand/${props.item.token}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={props.item.images && props.item.images[0].url} />
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
