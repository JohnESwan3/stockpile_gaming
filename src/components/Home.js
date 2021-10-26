// import bg from '../img/bg-1.jpg';
import bgwebp from '../img/bg-1.webp';
import logo from '../img/SPLogo.svg';

export default function Home() {
  return (
    <main className="min-h-screena">
      <img
        src={bgwebp}
        alt="Background"
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50 z-0"
      />
      <section className="relative flex-column justify-center text-center pt-12 px-8 ">
        <img src={logo} alt="" className="w-1/2 md:w-1/3 m-auto" />
        <h1 className="text-green-400 text-3xl font-bold leading-none lg:leading-snug">
          Stockpile Gaming
        </h1>
      </section>
    </main>
  );
}
