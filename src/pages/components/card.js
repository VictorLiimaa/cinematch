import Image from 'next/image';

const Card = ({ title, image, rating, genre }) => {
  return (
    <div className="card">
      <Image src={image} alt={title} className="card-image" layout="responsive" width={300} height={450} />
      <div className="card-overlay">
        <h3 className="card-title">{title}</h3>
        <div className="card-rating">
          <Image src="/assets/star-yellow.png" alt="Estrela amarela" width={14} height={14} />
          <span>{rating}</span>
        </div>
        <p className="card-genre">{genre}</p>
      </div>
    </div>
  );
};

export default Card;
