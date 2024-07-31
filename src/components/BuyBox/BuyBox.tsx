import "./BuyBox.css";

interface Props {
  imageLink: string;
}

function BuyBox({ imageLink }: Props) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imageLink})`}}>
      <span>30% off</span>
      <button>Comprar</button>
    </div>
  );
}

export default BuyBox;
