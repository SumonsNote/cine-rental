import Star from "../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img src={star} key={index} />
      ))}
    </>
  );
}
