import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
// import review from '../../studio/schemas/review.js';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function ReviewPage() {
  const [reviewData, setReviewData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}" {
        gameName,
        slug,
        cover{
          asset->{
            _id,
            url
          }
        },
        releaseDate,
        affiliateLink,
        platforms,
        reviewedOn,
        price,
        bgImage{
          asset->{
            _id,
            url
          }
        },
        developer,
        publisher,
        engine,
        article,
        graphicsReview,
        graphicsScore,
        soundReview,
        soundScore,
        gameplayReview,
        gameplayScore,
        storyReview,
        storyScore,
        reviewSummary,
        reviewScore,
        screenshot1{
          asset->{
            _id,
            url
          }
        },
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
        video,
        "name": author-name,
        "authorImage": author->image
      }`,
        { slug }
      )
      .then((data) => setReviewData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!reviewData) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{reviewData.gameName}</h2>
        <div>
          <img
            src={urlFor(reviewData.authorImage).width(100).url()}
            alt="Author is John"
          />
          <h4>{reviewData.name}</h4>
        </div>
      </div>
      <img src={urlFor(reviewData.cover).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={reviewData.article}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </div>
    </div>
  );
}
