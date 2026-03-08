import type { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="card-wrapper">{children}</div>;
};

const CardHeader = ({ children }: { children: ReactNode }) => {
  return <div className="card-header">{children}</div>;
};

const CardImage = ({ children }: { children: ReactNode }) => {
  return <div className="card-image">{children}</div>;
};

const CardBody = ({ children }: { children: ReactNode }) => {
  return <div className="card-body">{children}</div>;
};
const CardFooter = ({ children }: { children: ReactNode }) => {
  return <div className="card-footer">{children}</div>;
};

Card.Header = CardHeader;
Card.Image = CardImage;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
