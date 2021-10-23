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
                  <div className=" bg-gray-800 border-1 border-gray-800 rounded-none md:rounded-lg shadow-xl hover:bg-gray-700">
                    <div className="flex flex-row">
                      <img
                        src={review.coverImage.asset.url}
                        alt={review.coverImage.alt}
                        className="w-5/12 md:w-1/4 lg:w-32 p-0 m-0 shadow-xl rounded-none md:rounded-l-lg"
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
                              className="object-cover"
                              // className="p-4 md:p-10 md:text-lg"
                            />
                          </p>
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
