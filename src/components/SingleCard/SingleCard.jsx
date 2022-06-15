import React from "react";

export const SingleCard = ({
  topBanner,
  img,
  litText,
  mb,
  price,
  color,
  cardColor,
  figCaption,
  scale,
  borderColor,
  activeBorder,
}) => {
  return (
    <div
      className={`card-outer ${activeBorder}`}
      style={{ borderColor: `${borderColor}` }}
    >
      <div
        className="card-inner"
        style={{
          background: `${cardColor}`,
        }}
      >
        <h2>{litText}</h2>
        <div className="card-price">
          <span>£</span>
          <h1>{price}</h1>
        </div>
        <p>a month for 12 months</p>
        {topBanner && (
          <div
            className="popular-tag"
            style={{ borderColor: `${borderColor}` }}
          >
            <p style={{ color: `${color}` }}>Most Popular</p>
          </div>
        )}
      </div>
      <p className="mb-section" style={{ color: `${color}` }}>
        {mb}
      </p>
      <figure className="card-pic">
        <img
          src={img}
          alt="computer & mobile"
          style={{ transform: `scale(${scale})` }}
        />
        <figcaption className="card-pic_caption">{figCaption}</figcaption>
      </figure>

      <button className="card-btn" style={{ backgroundColor: `${color}` }}>
        Choose
      </button>
    </div>
  );
};
