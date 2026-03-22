import Countdown from '../src/components/Countdown';

export default function Home() {
  return (
    <section className="page center">
      <h1>We're Getting Married</h1>
      <p className="date">May 3, 2026</p>
      <Countdown />
      <p className="subtitle">We can't wait to celebrate with you</p>
    </section>
  );
}
