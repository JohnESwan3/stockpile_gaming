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
      <div className="min-h-screen bg-gray-900 text-gray-100 text-4xl">
        Loading...
      </div>
    );

  return (
    <main className="bg-gray-900 min-h-screen  text-gray-100">
      <div className="w-full md:w-11/12 xl:w-5/6 m-auto xl:border-l-2 xl:border-gray-800 xl:border-r-2 p-4">
        <header className="">
          <h1 className="text-4xl">{singleArticle.title}</h1>
          <p>by:&nbsp;{singleArticle.name}</p>
          <p>{singleArticle.publishDate}</p>
        </header>
        <section>
          <img
            src={singleArticle.mainImage.asset.url}
            alt={singleArticle.mainImage.url}
            className="w-5/6 object-cover m-auto rounded-none md:rounded-lg"
          />
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <p>By:&nbsp;{singleArticle.name}</p>
            <p>Posted:&nbsp;{singleArticle.publishDate}</p>
          </div>
        </section>
        <article className="block float-left">
          <h1>{singleArticle.heading}</h1>
          <p>
            <BlockContent
              blocks={singleArticle.article}
              projectId="qc546n1u"
              dataset="production"
            />
          </p>
        </article>
        <aside className="block float-right">
          <h1>Test</h1>
        </aside>
        <section>
          <img
            src={singleArticle.secondaryImage.asset.url}
            alt={singleArticle.secondaryImage.alt}
          />
        </section>
      </div>
    </main>
  );
}
