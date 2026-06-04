interface CardProps {
  title: string;
  description: string;
}
const Card = ({ title, description }: CardProps) => {
  return (
    <div className="px-5 py-3 mb-5 text-white glass-effect w-full">
      <h2 className="text-xl">{title}</h2>
      <span className="text-md">{description}</span>
    </div>
  );
};

export default Card;
