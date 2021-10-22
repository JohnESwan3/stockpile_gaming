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
        description,
        tags,
        mainImage{
          asset->{
            _id,
            url,
          },
          alt,
        },
        secondaryImage{
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
              <section className="w-full md:w-11/12 lg:10/12 xl:w-3/5 m-auto">
                <Link
                  to={'/article/' + article.slug.current}
                  key={article.slug.current}
                >
                  <div className="bg-gray-800 border-1 border-gray-800 md:rounded-lg shadow-xl">
                    <div className="flex">
                      <img
                        src={article.mainImage.asset.url}
                        alt={article.mainImage.alt}
                        className="w-1/3 md:w-1/5 shadow-xl rounded-none md:rounded-l-lg object-cover"
                      />
                      <div className="p-4 flex flex-col gap-2 md:gap-4">
                        <h1 className="text-md md:text-lg font-semibold">
                          {article.title}
                        </h1>
                        <p className="text-sm md:text-md">
                          <BlockContent
                            blocks={article.description}
                            projectId="qc546n1u"
                            dataset="production"
                          />
                        </p>
                        <p className="text-sm text-gray-300">
                          By:&nbsp;{article.name}&nbsp; -{article.publishDate}
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
