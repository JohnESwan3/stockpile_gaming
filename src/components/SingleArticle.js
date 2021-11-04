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
        "type": category->title,
        publishDate,
        tags,
        heading,
        article,
        article2,
        bannerImage{
          asset->{
            _id,
            url
          },
          alt,
        },
        image{
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
    <main className="bg-gray-900 min-h-screen text-gray-100">
      <div className="4xl:m-auto w-full 4xl:w-5/6">
        <header className="m-auto">
          <section className="relative py-24 px-4">
            <div className="absolute inset-0 h-auto">
              <img
                src={singleArticle.bannerImage.asset.url}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </section>
          <section className=" text-center md:text-left bg-gray-800 py-4 shadow-xl">
            <div className="my-2 mx-4">
              <p className="text-xs">
                <span className="bg-indigo-600 p-1 rounded-lg">
                  {singleArticle.type}
                </span>
                &nbsp; - &nbsp;
                <span className="bg-green-600 p-1 rounded-lg">
                  {singleArticle.tags[0]}
                </span>
              </p>
            </div>
            <div className="my-4 mx-6">
              <h1 className="text-4xl md:text-6xl my-2">
                {singleArticle.title}
              </h1>
              <p>
                {singleArticle.name}&nbsp; | &nbsp;{singleArticle.publishDate}
              </p>
            </div>
          </section>
        </header>
        <article>
          <BlockContent
            blocks={singleArticle.article}
            projectId="qc546n1u"
            dataset="production"
            className="p-6"
          />
        </article>
        <section>
          <div className="float-none md:float-right flex justify-center ">
            <img
              src={singleArticle.bannerImage.asset.url}
              alt=""
              className="w-60 md:w-80 rounded my-8 mx-4"
            />
          </div>
          <article className="p-6">
            <BlockContent
              blocks={singleArticle.article2}
              projectId="qc546n1u"
              dataset="production"
            />
          </article>
        </section>
      </div>
    </main>
  );
}
