import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Review() {
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="review"]{
        title,
        slug,
        coverImage {
          asset->{
            _id,
            url,
          },
          alt,
        }
      }`
      )
      .then((data) => setReviewData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-300 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-4xl flex justify-center p-10">All Reviews</h1>
        <section className="grid grid-cols-1 lg:grid-cols-8 md:grid-cols-4 gap-8">
          {reviewData &&
            reviewData.map((review, index) => (
              <article>
                <Link
                  to={'/review/' + review.slug.current}
                  key={review.slug.current}
                >
                  <span
                    className="block h-96 md:h-64 lg:h-54 relative leading-snug mb-4"
                    key={index}
                  >
                    <img
                      src={review.coverImage.asset.url}
                      alt={review.coverImage.alt}
                      className="w-full h-full object-cover absolute rounded-lg shadow-xl"
                    />
                    <span className="relative h-full flex justify-end items-end pb-4 mx-2 ">
                      <h3 className="text-md font-bold px-3 py-4 bg-gray-800 text-gray-100 bg-opacity-75 rounded-lg backdrop-filter backdrop-blur-md shadow">
                        {review.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
