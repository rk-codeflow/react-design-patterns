interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  status: string;
  upvote: number;
  comments: number;
  reviews: number;
}
const Card = ({
  imageSrc,
  title,
  subtitle,
  status,
  upvote,
  comments,
  reviews,
}: CardProps) => {
  return (
    <div className="card-wrapper">
      <div className="card-header">
        <img src={imageSrc} alt="card image" height={80} width={80} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h5>{title}</h5>
          <p>{subtitle}</p>
          <button>{status}</button>
        </div>
      </div>

      <div className="card-body">
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
  );
};

export default Card;
