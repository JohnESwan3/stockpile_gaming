import { SocialIcon } from 'react-social-icons';
import image from '../img/bg-1.svg';
import odysee from '../img/odyseeLogo.svg';

export default function About() {
  return (
    <main className="bg-gray-900 min-h-screen text-gray-100">
      <img
        src={image}
        alt="Background"
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50 blur-sm z-0"
      />
      <div className="relative bg-gray-900 w-full md:w-11/12 lg:10/12 xl:w-4/5 m-auto shadow-none xl:shadow-xl p-4  backdrop-filter bg-opacity-70 backdrop-blur-lg">
        <div className="mt-10 flex justify-center text-3xl text-green-500">
          <h1>Stockpile Gaming</h1>
        </div>
        <br />
        <div className="flex flex-col md:flex-row">
          <article className="w-auto md:w-4/5 p-4">
            <div>
              <h1 className="text-center text-xl p-4">
                About Stockpile Gaming
              </h1>
              <p>
                I am John Swan, the creator of Stockpile Gaming. I created this
                website to write reviews of games that I am playing, news and
                information that I find interresting, and anything else that
                comes to mind.
              </p>
            </div>
          </article>
          <aside className="bg-green-900 bg-opacity-25 shadow-xl rounded-xl w-auto md:w-1/5 text-center justify-center flex p-4">
            <div className=" m-auto">
              <h1 className="font-semibold text-lg">Social Media</h1>
              <div className="flex flex-row gap-2 mt-4">
                <SocialIcon
                  url="https://twitter.com/StockpileGamer"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 35, width: 35 }}
                />
                <SocialIcon
                  url="https://www.youtube.com/channel/UCkX43FLaQZYBCjRWX-SdHKg"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 35, width: 35 }}
                />

                <a
                  href="https://odysee.com/@StockpileGaming:bac71a2d5a62ba0173408db53150a26e3b2e333c"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={odysee}
                    alt="Odysee"
                    style={{ height: 35, width: 35 }}
                  />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
