import PropTypes from "prop-types";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={`../../public/images/${props.image}`}
          alt="image representing the experience"
        />
        <p className="">SOLD OUT</p>
      </div>
      <div className="card__info">
        <div className="card__rating">
          <img src="../../public/images/star.png" alt="" />
          <span>{props.rating}</span>
          <span>{props.totalRatings}</span>
          <span className="card__separator">&middot;</span>
          <span>{props.country}</span>
        </div>
        <div className="card__title">{props.title}</div>
        <div className="card__price">
          <span>From&nbsp;</span>
          <span>{props.price}</span>
          <span> / person</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  rating: PropTypes.string,
  totalRatings: PropTypes.string,
  country: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
};
