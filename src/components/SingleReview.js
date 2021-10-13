import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

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

  if (!singleReview) return <div>Loading...</div>;

  return (
    <main className="bg-gray-300">
      <header className="flex items-center flex-col text-center">
        <div className="p-4">
          <h1 className="">{singleReview.title}</h1>
        </div>
        <div>
          <div className="md:flex-row md:flex">
            <h3 className="sm:px-6 md:py-2">
              Reviewed On: {singleReview.publishedOn}
            </h3>
            <h3 className="sm:px-6 md:py-2">
              Release Date: {singleReview.releaseDate}
            </h3>
          </div>
        </div>
        <div>
          <img
            src={singleReview.headerImg.asset.url}
            alt={singleReview.title}
            className="max-h-full"
          />
        </div>
      </header>
    </main>
  );
}
