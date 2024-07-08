import PropTypes from "prop-types";

export default function Card(props) {
  let badgeText = "";
  if (props.item.count === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="card__image">
        <img
          src={`/images/${props.item.image}`}
          alt="image representing the experience"
        />
        {(props.item.count === 0 || props.item.location === "online") && (
          <p className="">{badgeText}</p>
        )}
      </div>
      <div className="card__info">
        <div className="card__rating">
          <img src="/images/star.png" alt="" />
          <span>{props.item.rating}</span>
          <span>{props.item.totalRatings}</span>
          <span className="card__separator">&middot;</span>
          <span>{props.item.country}</span>
        </div>
        <div className="card__title">{props.item.title}</div>
        <div className="card__price">
          <span>From&nbsp;</span>
          <span>{props.item.price}</span>
          <span> / person</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object,
};
