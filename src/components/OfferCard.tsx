interface offerCardDetails {
  title: string;
  offer: number;
  img: string;
}

const OfferCard = ({ title, offer, img }: offerCardDetails) => {
  return (
    <div className="relative flex flex-col items-start gap-3 bg-[#CCE5CC] p-8 rounded-2xl overflow-hidden">
      <h3 className="capitalize text-light-green text-2xl md:text-3xl font-semibold">
        {title}
      </h3>
      <p className="text-primary text-2xl">
        Up to<span className="font-semibold"> {offer}% OFF</span>
      </p>
      <button className="bg-primary text-white px-5 py-2 rounded-2xl">
        Shop Now
      </button>
      <div className="absolute right-3 top-3 flex flex-col items-center justify-center text-white linear rounded-full w-18 h-18 z-10">
        <div>
          <p className="font-semibold text-2xl inline">{offer}</p>
          <span className="text-xs">%</span>
        </div>
        <p>OFF</p>
      </div>
      <div className="absolute right-0 -bottom-2">
        <img src={img} className="w-45 h-45 md:w-50 md:h-50" alt="img" />
      </div>
    </div>
  );
};

export default OfferCard;
