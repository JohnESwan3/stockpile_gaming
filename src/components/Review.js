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
        summary,
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
    <main className="bg-gray-900 min-h-screen text-gray-100 pb-20">
      <section className=" mx-auto">
        <h1 className="text-4xl flex justify-center p-10">All Reviews</h1>
        <section className="flex flex-col gap-12">
          {reviewData &&
            reviewData.map((review, index) => (
              <article className="w-full md:w-11/12 lg:10/12 xl:w-3/5 m-auto">
                <Link
                  to={'/review/' + review.slug.current}
                  key={review.slug.current}
                >
                  {/* <div
                    className="grid grid-cols-2 h-96 md:h-64 lg:h-54 relative leading-snug mb-4"
                    key={index}
                  >
                    <img
                      src={review.coverImage.asset.url}
                      alt={review.coverImage.alt}
                      className=" h-1/2 relative rounded-lg shadow-xl"
                    />
                    <div className="h-1/2 w-full bg-gray-500 flex justify-end items-end pb-4 mx-2 ">
                      <h3 className="text-md font-bold px-3 py-4 bg-gray-800 text-gray-100 bg-opacity-75 rounded-lg backdrop-filter backdrop-blur-md shadow">
                        {review.title}
                      </h3>
                    </div>
                  </div> */}
                  <div className=" bg-gray-800 border-1 border-gray-800 md:rounded-lg shadow-xl">
                    <div className="flex flex-row">
                      <img
                        src={review.coverImage.asset.url}
                        alt={review.coverImage.alt}
                        className="w-1/4 lg:w-32 sticky p-0 m-0 shadow-xl rounded-l-lg"
                      />
                      <div className="p-5">
                        <h1 className="font-bold text-xl">{review.title}</h1>
                        <ul className=" hidden md:visible md:flex flex-row gap-2 pt-1">
                          <li className="bg-red-600 px-1.5 py-1 rounded-lg text-md">
                            {review.genre}
                          </li>
                          <li className="bg-blue-600 px-1.5 py-1 rounded-lg text-md">
                            {review.subGenre}
                          </li>
                        </ul>
                        <div>
                          <p className="p-1 md:p-5 md:text-lg">
                            <BlockContent
                              blocks={review.description}
                              projectId="qc546n1u"
                              dataset="production"
                              // className="p-4 md:p-10 md:text-lg"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
