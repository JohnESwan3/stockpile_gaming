import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import { useParams } from 'react-router-dom';
// import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function SingleReview() {
  const [singleReview, setSingleReview] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    // GROQ
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
      title,
      description,
      _id,
      slug,
      coverImage{
        asset->{
          _id,
          url
        }
      },
      "name": author->name,
      "authorImage":author->image,
      "type": category->title,
      publishDate,
      publishMonth,
      publishDay,
      publishYear,
      releaseDate,
      releaseMonth,
      releaseDay,
      releaseYear,
      price,
      affiliate,
      genre,
      subGenre,
      bgImage{
        asset->{
          _id,
          url
        }
      },
      gameLogo{
        asset->{
          _id,
          url
        }
      },
      hero{
        asset->{
          _id,
          url
        }
      },
      headerImg{
        asset->{
          _id,
          url
        }
      },
      developer,
      publisher,
      engine,
      platforms,
      reviewedOn,
      heading,
      subText,
      article1,
      article2,
      rating,
      summary,
      carousel{
        asset->{
          _id,
          url
        }
      },

    }`
      )
      .then((data) => setSingleReview(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleReview)
    return (
      <div className="min-h-screen bg-gray-800 text-gray-100 text-4xl">
        Loading...
      </div>
    );
  // Variables for GROQ / Sanity Queries
  // Lists
  // Platform Lists
  // const platforms = singleReview.platforms;
  // const developer = singleReview.developer;
  // const publisher = singleReview.publisher;

  return (
    <main className="bg-gray-800 min-h-screen text-gray-100">
      {/* BG Image */}
      <img
        src={singleReview.bgImage.asset.url}
        alt={singleReview.title}
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50"
      />
      <div className="m-auto w-full 2xl:w-5/6 4xl:w-1/2">
        <header className="relative bg-gray-800 shadow-xl z-20">
          {/* Header Image */}
          <section>
            <img
              src={singleReview.hero.asset.url}
              alt={singleReview.title}
              className="m-auto"
            />
          </section>
          {/* Review Info */}
          <section className="p-4 border-t-4 border-green-600">
            <div className="py-4">
              <p className="text-md md:text-xl">
                <span className="bg-green-600 p-1 rounded-lg">
                  {singleReview.type}
                </span>
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl md:text-5xl">{singleReview.title}</h1>
              <div className="text-lg md:text-2xl text-gray-400 tracking-widest leading-relaxed italic px-0 py-0 md:py-2 md:px-4">
                <BlockContent
                  blocks={singleReview.description}
                  projectId="qc546n1u"
                  dataset="production"
                />
              </div>
              <br />
              <p>
                Published On: {singleReview.publishMonth}-
                {singleReview.publishDay}-{singleReview.publishYear}
              </p>
              <p>By: {singleReview.name}</p>
              <p>Reviewed On: {singleReview.reviewedOn}</p>
              <p>MSRP: {singleReview.price}</p>
            </div>
            {/* Affiliate Link and Price */}
            <div className="text-center p-4">
              <a
                href={singleReview.affiliate}
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 cursor-pointer shadow-xl"
              >
                Buy Now *
              </a>
              <p className="p-4 my-4 w-full md:w-1/2 max-w-sm  m-auto bg-gray-900 rounded shadow-xl">
                * This link may be an affiliate link. Affiliate Links provide
                Stockpile Gaming with a commision for each sale - at no
                additional cost to you.
              </p>
            </div>
            {/* Button to Hide Game Info */}
            <div className="text-center p-4">
              {/* <button
                className="bg-green-600 p-2 my-2 rounded hover:bg-green-500"
                id="gameInfoBtn"
              >
                More Info
              </button> */}
            </div>
            <hr />
          </section>

          {/* Game Info - Hidden by Button - Grid + Tailwind NOT WORKING!!!! */}
          <section className="flex flex-col text-center 2xl:text-left p-4 shadow-xl">
            <div className="p-2">
              <h1 className="text-3xl tracking-wide ">Platforms</h1>
              <p className="py-2">
                {singleReview.platforms[0]}&nbsp;&nbsp;
                {singleReview.platforms[1]}&nbsp;&nbsp;
                {singleReview.platforms[2]}&nbsp;&nbsp;
                {singleReview.platforms[3]}&nbsp;&nbsp;
                {singleReview.platforms[4]}&nbsp;&nbsp;
                {singleReview.platforms[5]}&nbsp;&nbsp;
                {singleReview.platforms[6]}
              </p>
            </div>
            <div className="p-2">
              <h1 className="text-3xl tracking-wide">Developer</h1>
              <p className="py-2">
                {singleReview.developer[0]}&nbsp;&nbsp;
                {singleReview.developer[1]}&nbsp;&nbsp;
                {singleReview.developer[2]}&nbsp;&nbsp;
                {singleReview.developer[3]}
              </p>
            </div>
            <div className="p-2">
              <h1 className="text-3xl tracking-wide">Publisher</h1>
              <p className="py-2">
                {singleReview.publisher[0]}&nbsp;&nbsp;
                {singleReview.publisher[1]}&nbsp;&nbsp;
                {singleReview.publisher[2]}&nbsp;&nbsp;
                {singleReview.publisher[3]}&nbsp;&nbsp;
                {singleReview.publisher[4]}&nbsp;&nbsp;
              </p>
            </div>
            <div className="p-2">
              <h1 className="text-3xl">Engine</h1>
              <p className="py-2">{singleReview.engine}</p>
            </div>
          </section>
        </header>
        {/* Spacer - To Show BG-Image */}
        <div className="p-8"></div>

        {/* Article Part 1 */}
        <section className="relative article bg-gray-900 py-4 px-1 md:p-4">
          <article className="flex flex-col">
            <BlockContent
              blocks={singleReview.article1}
              projectId="qc546n1u"
              dataset="production"
              className="article tracking-wide leading-relaxed"
            />
          </article>
        </section>

        {/* Spacer - To Show BG-Image */}
        <div className="p-8"></div>

        {/* Article Part 2 */}
        <section className="relative article bg-gray-900 py-4 px-1 md:p-4">
          <article className="flex flex-col">
            <BlockContent
              blocks={singleReview.article2}
              projectId="qc546n1u"
              dataset="production"
              className="article tracking-wide leading-relaxed"
            />
          </article>
        </section>

        {/* Spacer - To Show BG-Image */}
        <div className="p-8"></div>

        {/* Article Summary */}
        <section className="relative article bg-gray-900 py-4 px-1 md:p-4">
          <article className="flex flex-col">
            <BlockContent
              blocks={singleReview.summary}
              projectId="qc546n1u"
              dataset="production"
              className="article tracking-wide leading-relaxed"
            />
          </article>
        </section>
      </div>
      <div className="p-8"></div>
    </main>
  );
}
