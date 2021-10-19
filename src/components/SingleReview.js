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
      graphicsScore,
      sound,
      soundScore,
      gameplay,
      gameplayScore,
      story,
      storyScore,
      summary,
      score,
      screenshot1{
        asset->{
          _id,
          url
        }
      },
      screenshot2{
        asset->{
          _id,
          url
        }
      },
      screenshot3{
        asset->{
          _id,
          url
        }
      },
      screenshot4{
        asset->{
          _id,
          url
        }
      },
      screenshot5{
        asset->{
          _id,
          url
        }
      },
      screenshot6{
        asset->{
          _id,
          url
        }
      },
      screenshot7{
        asset->{
          _id,
          url
        }
      },
      screenshot8{
        asset->{
          _id,
          url
        }
      },
      screenshot9{
        asset->{
          _id,
          url
        }
      },
      screenshot10{
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

  if (!singleReview) return <div className="min-h-screen">Loading...</div>;

  return (
    <main className="bg-gray-300 min-h-screen">
      <img
        src={singleReview.bgImage.asset.url}
        alt={singleReview.title}
        className="fixed object-cover w-full h-full before:absolute before:inset-0 filter brightness-50"
      />
      <br />
      <header className="flex items-center flex-col text-center relative bg-gray-900 text-gray-100 backdrop-filter bg-opacity-50 backdrop-blur-lg w-full md:w-5/6 mx-auto border-l-2 border-t-2 border-r-2 border-b-4 border-gray-600 md:rounded-lg">
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
            className="max-h-full shadow-xl mb-6 md:rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1">
          <p className="p-1 md:p-2 md:shadow md:rounded">
            Reviewed On: <br />
            {singleReview.reviewedOn}
          </p>
          <p className="p-1 md:p-2 md:shadow md:rounded">
            Release Date:
            <br /> {singleReview.releaseDate}
          </p>
          <p className="p-1 md:p-2 md:shadow md:rounded">
            Developer: <br /> {singleReview.developer[0]} <br />
            {singleReview.developer[1]}
            <br />
            {singleReview.developer[2]}
          </p>
          <p className="p-1 md:p-2 md:shadow md:rounded">
            Publisher: <br /> {singleReview.publisher[0]}
            <br />
            {singleReview.publisher[1]}
            <br />
            {singleReview.publisher[2]}
          </p>
          <p className="p-1 md:p-2 md:shadow md:rounded">
            Engine:
            <br /> {singleReview.engine}
          </p>
        </div>
      </header>
      <div className="p-10"></div>
      <article className="flex items-center md:items-start flex-col relative bg-gray-800 text-gray-100 leading-loose w-full md:w-5/6 mx-auto md:border-2 border-gray-600 md:rounded-lg p-6 md:p-10 shadow-xl">
        {/* Heading */}
        <h1 className="font-bold text-2xl leading-loose mb-4 items-center">
          {singleReview.heading}
        </h1>
        {/* Article Part 1 */}
        <p className="md:text-lg">
          <BlockContent
            blocks={singleReview.article1}
            projectId="qc546n1u"
            dataset="production"
          />
        </p>
      </article>
      <section>
        <div>
          <img
            src={singleReview.gameLogo.asset.url}
            alt={singleReview.title}
            className="max-h-full shadow-xl mb-6 md:rounded-lg"
          />
        </div>
      </section>
      <br />
      <br />
      <br />
    </main>
  );
}
