import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function AllReviews() {
  const [allReviewsData, setAllReviews] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "document"]{
        gameName,
        slug,
        cover{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllReviews(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        {allReviewsData &&
          allReviewsData.map((review, index) => (
            <Link to={'/' + review.slug.current} key={review.slug.current}>
              <span key={index}>
                <img src="{review.cover.asset.url}" alt="" />
                <span>
                  <h2>{review.gameName}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
