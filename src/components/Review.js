import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Review() {
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="review"] | order(date desc){
        title,
        slug,
        cover {
          asset->{
            _id,
            url,
          },
          alt,
          publishedOn
        }
      }`
      )
      .then((data) => setReviewData(data))
      .catch(console.error);
  }, []);

  return <main className="bg-gray-300 min-h-screen p-12"></main>;
}
