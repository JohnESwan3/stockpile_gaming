import image from '../img/bg-1.jpg';

export default function Home() {
  return (
    <main className="min-h-screena">
      <img
        src={image}
        alt="Background"
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50 z-0"
      />
      <section className="relative flex-column justify-center text-center pt-12 lg:pt-64 px-8 ">
        <h2 className="text-green-400 text-3xl font-bold leading-none lg:leading-snug">
          Stockpile Gaming
        </h2>
      </section>
    </main>
  );
}
