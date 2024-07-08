import heroImage from "/images/airbnb-hero.png";

export default function Hero() {
  return (
    <section className="hero-banner">
      <img
        src={heroImage}
        alt="hero banner with images of people on vacation"
      />
      <div className="hero-banner__info">
        <h3>Online Experiences</h3>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
