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
      publishedOn,
      releaseDate,
      price,
      affiliate,
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
    <main className="bg-gray-800 min-h-screen">
      <img
        src={singleReview.bgImage.asset.url}
        alt={singleReview.title}
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50"
      />
      <div className="p-10"></div>
      <header className="flex items-center flex-col text-center relative bg-gray-900 text-gray-100 backdrop-filter bg-opacity-50 backdrop-blur-lg w-full md:w-11/12 xl:max-w-7xl mx-auto border-l-2 border-t-2 border-r-2 border-b-4 border-gray-600 md:rounded-lg">
        <div className="p-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-loose">
          <h1>{singleReview.title}</h1>
        </div>
        <div>
          <div className="flex-row flex">
            <h3 className=" p-2 text-lg">
              Date:{' '}
              <span className="font-semibold">{singleReview.publishedOn}</span>
            </h3>
            <h3 className=" p-2 text-lg">
              By: <span className="font-semibold">{singleReview.name}</span>
            </h3>
          </div>
        </div>
        <div>
          <img
            src={singleReview.headerImg.asset.url}
            alt={singleReview.title}
            className="max-h-full shadow-xl my-6 md:rounded-lg"
          />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-5 gap-1">
          <div className="p-1 md:p-2 md:shadow md:rounded">
            <ul>
              <li>Reviewed On:</li>
              <li>{singleReview.reviewedOn}</li>
            </ul>
          </div>

          <div className="p-1 md:p-2 md:shadow md:rounded">
            <ul>
              <li>Release Date:</li>
              <li>{singleReview.releaseDate}</li>
            </ul>
          </div>
          <div className="p-1 md:p-2 md:shadow md:rounded">
            <ul>
              <li>Developer</li>
              <li>{singleReview.developer[0]}</li>
              <li>{singleReview.developer[1]}</li>
              <li>{singleReview.developer[2]}</li>
            </ul>
          </div>
          <div className="p-1 md:p-2 md:shadow md:rounded">
            <ul>
              <li>Publisher:</li>
              <li>{singleReview.publisher[0]}</li>
              <li>{singleReview.publisher[1]}</li>
              <li>{singleReview.publisher[2]}</li>
            </ul>
          </div>
          <div className="p-1 md:p-2 md:shadow md:rounded">
            <ul>
              <li>Engine:</li>
              <li>{singleReview.engine}</li>
            </ul>
          </div>
        </section>
      </header>
      <div className="p-10"></div>
      <article className="flex items-center md:items-start flex-col relative bg-gray-800 text-gray-100 leading-loose w-full md:w-11/12 xl:max-w-7xl mx-auto md:border-2 border-gray-600 md:rounded-lg p-6 md:p-10 shadow-xl tracking-wide">
        <div>
          {/* Heading */}
          <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
            {singleReview.heading}
          </h1>
          {/* Article Part 1 */}

          <BlockContent
            blocks={singleReview.article1}
            projectId="qc546n1u"
            dataset="production"
            className="md:text-lg"
          />
        </div>
        <div>
          {/* Heading 2 */}
          <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
            {singleReview.subHeading2}
          </h1>
          {/* Article Part 2 */}

          <BlockContent
            blocks={singleReview.article2}
            projectId="qc546n1u"
            dataset="production"
            className="md:text-lg"
          />
        </div>
        <div>
          {/* Heading 3 */}
          <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
            {singleReview.subHeading3}
          </h1>
          {/* Article Part 3 */}

          <BlockContent
            blocks={singleReview.article3}
            projectId="qc546n1u"
            dataset="production"
            className="md:text-lg"
          />
        </div>
      </article>
      <div className="p-10"></div>
      <article className="flex items-center md:items-start flex-col relative bg-gray-800 text-gray-100 leading-loose w-full md:w-11/12 xl:max-w-7xl mx-auto md:border-2 border-gray-600 md:rounded-lg p-6 md:p-10 shadow-xl tracking-wide">
        <section>
          <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
            Graphics
          </h1>
          <BlockContent
            blocks={singleReview.graphics}
            projectId="qc546n1u"
            dataset="production"
            className="md:text-lg"
          />
        </section>
        <section>
          <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
            Sound
          </h1>
          <BlockContent
            blocks={singleReview.sound}
            projectId="qc546n1u"
            dataset="production"
            className="md:text-lg"
          />
        </section>
        <section>
          <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
            Gameplay
          </h1>
          <BlockContent
            blocks={singleReview.gameplay}
            projectId="qc546n1u"
            dataset="production"
            className="md:text-lg"
          />
        </section>
        <section>
          <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
            Story
          </h1>
          <BlockContent
            blocks={singleReview.story}
            projectId="qc546n1u"
            dataset="production"
            className="md:text-lg"
          />
        </section>
      </article>
      <div className="p-10"></div>
      <article className="flex items-center md:items-start flex-col relative bg-gray-800 text-gray-100 leading-loose w-full md:w-11/12 xl:max-w-7xl mx-auto md:border-2 border-gray-600 md:rounded-lg p-6 md:p-10 shadow-xl tracking-wide">
        <section>
          <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
            Rating:{' '}
            <span className="text-green-500"> {singleReview.rating}</span>
          </h1>
          <h2 className="font-bold text-2xl leading-loose mb-4 items-center">
            {singleReview.sumHeading}
          </h2>
          <BlockContent
            blocks={singleReview.summary}
            projectId="qc546n1u"
            dataset="production"
            className="md:text-lg"
          />
        </section>
      </article>

      <div className="p-10"></div>
    </main>
  );
}
