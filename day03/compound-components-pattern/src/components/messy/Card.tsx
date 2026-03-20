import type React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  status: string;
  upvote: number;
  comments: number;
  reviews: number;
  primaryAction: React.ReactElement;
}
const Card = ({
  imageSrc,
  title,
  subtitle,
  upvote,
  comments,
  reviews,
  primaryAction,
}: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>

      <div className="card-body">
        <img src={imageSrc} alt="card image" />

        <div className="content">
          <div>
            <h3>{upvote}</h3>
            <p>Upvotes</p>
          </div>

          <div>
            <h3>{comments}</h3>
            <p>Comments</p>
          </div>

          <div>
            <h3>{reviews}</h3>
            <p>reviews</p>
          </div>
        </div>
      </div>

      <div className="card-footer">{primaryAction}</div>
    </div>
  );
};

export default Card;
