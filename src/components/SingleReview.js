import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import { useParams } from 'react-router-dom';
// import imageUrlBuilder from '@sanity/image-url';
// import BlockContent from '@sanity/block-content-to-react';

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
      subHeading1,
      subHeading2,
      subHeading3,
      article1,
      article2,
      article3,
      graphics,
      sound,
      gameplay,
      story,
      rating,
      sumHeading,
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

  return (
    <main className="bg-gray-800 min-h-screen text-gray-100">
      <img
        src={singleReview.bgImage.asset.url}
        alt={singleReview.title}
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50"
      />
      <header className="relative bg-gray-800 m-auto w-full 2xl:w-5/6 4xl:w-1/2 shadow-xl z-20">
        <section>
          <img
            src={singleReview.hero.asset.url}
            alt={singleReview.title}
            className="m-auto"
          />
        </section>
        <section className="p-4 border-t-4 border-green-600">
          <div className="py-4">
            <p className="text-xs">
              <span className="bg-green-600 p-1 rounded-lg">
                {singleReview.type}
              </span>
            </p>
          </div>
          <div className="">
            <h1 className="text-3xl md:text-5xl">{singleReview.title}</h1>
            <br />
            <p>
              Reviewed On: {singleReview.publishMonth}-{singleReview.publishDay}
              -{singleReview.publishYear}
            </p>
            <p>By: {singleReview.name}</p>
          </div>
        </section>
      </header>
    </main>
  );
}
