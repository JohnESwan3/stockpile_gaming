import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';

export default function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current =="${slug}"] {
        title,
        _id,
        slug,
        "name": author->name,
        "authorImage": author->image,
        publishDate,
        tags,
        heading,
        article,
        mainImage{
          asset->{
            _id,
            url
          },
          alt,
        },
        secondaryImage{
          asset->{
            _id,
            url
          },
          alt,
        },
        carousel{
          asset->{
            _id,
            url
          },
          alt,
        },
      }`
      )
      .then((data) => setSingleArticle(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleArticle)
    return (
      <div className="min-h-screen bg-gray-800 text-gray-100 text-4xl">
        Loading...
      </div>
    );

  return (
    <main className="bg-gray-800 min-h-screen">
      <section></section>
    </main>
  );
}
