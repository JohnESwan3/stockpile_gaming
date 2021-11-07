import { SocialIcon } from 'react-social-icons';
import image from '../img/bg-1.svg';
import logo from '../img/SPLogo.svg';
import odysee from '../img/odyseeLogo.svg';

export default function About() {
  return (
    <main className="bg-gray-900 min-h-screen text-gray-100">
      <img
        src={image}
        alt="Background"
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50  z-0"
      />
      <br />
      <br />
      <div className="relative bg-gray-900 w-full md:w-11/12 lg:10/12 xl:w-3/5 m-auto shadow-none xl:shadow-xl p-4 md:p-6  backdrop-filter bg-opacity-70 backdrop-blur-lg rounded-none md:rounded-xl">
        <div className="flex justify-center">
          <img src={logo} alt="Stockpile Gaming" className="w-full md:w-1/3" />
        </div>
        <br />

        <div className="flex flex-col md:flex-row">
          <article className="w-auto md:w-4/5 p-4">
            <div>
              <h1 className="text-center text-xl p-4">Stockpile Gaming</h1>
              <p>
                I am John Swan, the creator of Stockpile Gaming. I created this
                website to write reviews of both old and new games, news and
                information that I find interesting, and anything else that
                comes that I feel would be a good fit for the website. As far as
                reviews go, my focus is currently on PC games, however, I will
                be covering news for consoles and possibly mobile gaming as
                well.
              </p>
            </div>
          </article>
          <aside className="bg-green-900 bg-opacity-25 shadow-xl rounded-xl w-auto md:w-1/5 text-center justify-center flex p-4">
            <div className=" m-auto">
              <button className="p-3 mb-4 bg-blue-500 rounded-xl shadow-lg hover:bg-blue-600">
                <a href="mailto:stockpilegaming@protonmail.com">
                  Business Email
                </a>
              </button>
              <br />
              <hr />
              <br />
              <h1 className="font-semibold text-lg">Social Media</h1>
              <div className="flex flex-row flex-wrap gap-2 mt-4">
                <SocialIcon
                  url="https://twitter.com/StockpileGamer"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://www.youtube.com/channel/UCkX43FLaQZYBCjRWX-SdHKg"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                  url="https://www.instagram.com/stockpilegaming/"
                  target="_blank"
                  fgColor="#fff"
                  style={{ height: 40, width: 40 }}
                />

                <a
                  href="https://odysee.com/@StockpileGaming:bac71a2d5a62ba0173408db53150a26e3b2e333c"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={odysee}
                    alt="Odysee"
                    style={{ height: 40, width: 40 }}
                  />
                </a>
              </div>
            </div>
          </aside>
        </div>
        <article className="w-full md:w-4/5 p-4">
          <p>
            I am a new web developer and I wanted to create a long-term project.
            Stockpile is still very much in development, but it is currently in
            the MVP stage, which you can read more about{' '}
            <a
              href="https://www.stockpilegaming.com/article/website-mvp"
              className="text-green-300 font-semibold tracking-wider px-2 hover:bg-gray-700 rounded-lg"
            >
              HERE
            </a>
            I am a life-long gamer, and I play all kinds of games, from JRPGs to
            Shooters (I don't usually play sports games so I probably won't be
            reviewing them).
            <br />
            <br />
            Articles on Stockpile Gaming may contain affiliate links. These
            links give me a commision for each purchase made with them. I will
            not ever post an affiliate link unless it is made very clear.
            Affiliate links allow Stockpile Gaming to make money, so thank you
            for using them if you choose to do so!
            <br />
            <br />
            Thank-you for stopping by!
            <br />
            <br />
            -John Swan 11/7/2021
          </p>
        </article>
      </div>
    </main>
  );
}
