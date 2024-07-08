import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

export default function App() {
  const cardElements = cardData.map((data, index) => {
    return <Card key={index + 1} item={data} />;
  });

  return (
    <>
      <Header />
      <Hero />
      <div className="card-wrapper">{cardElements}</div>
    </>
  );
}
