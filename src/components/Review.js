import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';

export default function Review() {
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="review"]{
        title,
        slug,
        description,
        genre,
        subGenre,
        publishedOn,
        summary,
        coverImage {
          asset->{
            _id,
            url,
          },
          alt,
        },
        tags,
      }`
      )
      .then((data) => setReviewData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-900 min-h-screen text-gray-100 pb-20">
      <section className=" mx-auto">
        <div>
          <h1 className="text-4xl flex justify-center p-10">Reviews</h1>
        </div>
        <div className="flex flex-col gap-6 md:gap-12">
          {reviewData &&
            reviewData.map((review, index) => (
              <section className="w-full md:w-11/12 lg:10/12 xl:w-3/5 m-auto">
                <Link
                  to={'/review/' + review.slug.current}
                  key={review.slug.current}
                >
                  <div className=" bg-gray-800 h-36 border-1 border-gray-800 rounded-none md:rounded-lg shadow-xl hover:bg-gray-700">
                    <div className="flex flex-row">
                      <img
                        src={review.coverImage.asset.url}
                        alt={review.coverImage.alt}
                        className="h-36 object-cover p-0 m-0 shadow-xl rounded-none md:rounded-l-lg"
                      />
                      <div className="p-5">
                        <ul className=" hidden md:visible md:flex flex-row gap-2">
                          <li className="bg-red-600 p-1 rounded-lg text-xs">
                            {review.genre}
                          </li>
                          <li className="bg-blue-600 p-1 rounded-lg text-xs">
                            {review.subGenre}
                          </li>
                          <li>{review.publishedOn}</li>
                        </ul>
                        <h1 className="font-bold text-lg m-1">
                          {review.title}
                        </h1>
                        <div className="m-1 text-md">
                          <BlockContent
                            blocks={review.description}
                            projectId="qc546n1u"
                            dataset="production"
                            className="object-cover"
                            // className="p-4 md:p-10 md:text-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
            ))}
        </div>
      </section>
    </main>
  );
}
