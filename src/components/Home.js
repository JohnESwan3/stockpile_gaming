// import bg from '../img/bg-1.jpg';
import bgwebp from '../img/bg-1.webp';
import logo from '../img/SPLogo.svg';

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <img
        src={bgwebp}
        alt="Background"
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50 z-0"
      />
      <section className="relative flex-column justify-center text-center ">
        <img src={logo} alt="Stockpile Gaming Logo" className="m-auto" />
        <h1 className="text-green-400 text-3xl font-bold leading-none lg:leading-snug">
          Stockpile Gaming
        </h1>
      </section>
    </main>
  );
}
