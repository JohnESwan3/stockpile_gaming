import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';

export default function Article() {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type =="article"]{
        title,
        slug,
        "name": author->name,
        "authorImage":author->image,
        publishDate,
        publishMonth,
        publishDay,
        publishYear,
        description,
        "type": category->title,
        tags,
        bannerImage{
          asset->{
            _id,
            url,
          },
          alt,
        },
        mainImage{
          asset->{
            _id,
            url,
          },
          alt,
        },
      }`
      )
      .then((data) => setArticleData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-900 min-h-screen text-gray-100 pb-20">
      <section className="mx-auto">
        <div>
          <h1 className="text-4xl flex justify-center p-10">Articles</h1>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          {articleData &&
            articleData.map((article, index) => (
              <section className="w-full md:w-11/12 lg:max-w-7xl m-auto">
                <Link
                  to={'/article/' + article.slug.current}
                  key={article.slug.current}
                >
                  <div className="bg-gray-800 h-40 border-1 border-gray-800 md:rounded-lg shadow-xl hover:bg-gray-700">
                    <div className="flex flex-row">
                      <img
                        src={article.bannerImage.asset.url}
                        alt={article.bannerImage.alt}
                        className="h-40 w-24 shadow-xl rounded-none md:rounded-l-lg object-cover"
                      />

                      <div className="p-4 flex flex-col gap-1 text-sm">
                        <ul className="flex flex-row gap-2">
                          <li className="bg-indigo-600 p-1 rounded-lg text-xs">
                            {article.type}
                          </li>
                          <li className="bg-green-900 p-1 rounded-lg text-xs">
                            {article.tags[0]}
                          </li>
                        </ul>
                        <h1 className="text-lg md:text-lg font-semibold">
                          {article.title}
                        </h1>
                        <BlockContent
                          blocks={article.description}
                          projectId="qc546n1u"
                          dataset="production"
                        />
                        <p className="text-sm text-gray-300">
                          {article.name}&nbsp; | &nbsp;
                          {article.publishMonth}-{article.publishDay}-
                          {article.publishYear}
                        </p>
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
