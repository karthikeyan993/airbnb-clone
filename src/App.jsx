import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./Carddata";

export default function App() {
  const cardElements = cardData.map((data, index) => {
    console.log(data);
    return (
      <Card
        key={index}
        image={data.image}
        rating={data.rating}
        totalRatings={data.totalRatings}
        country={data.country}
        title={data.title}
        price={data.price}
      />
    );
  });

  return (
    <>
      <Header />
      <Hero />
      <div className="card-wrapper">{cardElements}</div>
    </>
  );
}
