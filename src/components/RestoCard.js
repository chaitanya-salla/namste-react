const RestoCard = (props) => {
  return (
    <div className="resto-card" key={props.data.info.id}>
      <div className="img-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            props.data?.info.cloudinaryImageId
          }
          alt="image"
        />
      </div>
      <div className="desc">
        <h3>{props.data?.info.name}</h3>
        <h4>
          ⭐️
          {props.data?.info.avgRating || 3}
        </h4>
        <h3>Vaishali Nagar, Japur</h3>
      </div>
    </div>
  );
};

export default RestoCard;
