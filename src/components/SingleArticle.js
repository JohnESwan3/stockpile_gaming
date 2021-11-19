import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'react-share';
import { FaFacebook, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
// import PortableText from 'react-portable-text';

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
        publishMonth,
        publishDay,
        publishYear,
        tags,
        article,
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
          <section className="relative p-10 md:p-24">
            <div className="absolute inset-0 h-auto">
              <img
                src={singleArticle.bannerImage.asset.url}
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
          </section>
          <section className=" text-center md:text-left bg-gray-800 py-4 shadow-xl">
            <div className="py-2 px-4">
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
            <div className="py-4 px-6">
              <h1 className="text-4xl md:text-6xl my-2">
                {singleArticle.title}
              </h1>
              <p>
                {singleArticle.name}&nbsp; | &nbsp;
                {singleArticle.publishMonth}-{singleArticle.publishDay}-
                {singleArticle.publishYear}
              </p>
              {/* Social Media Sharing */}
              <div className="w-48 mx-auto mt-4 bg-gray-900 gap-2 rounded-lg text-center shadow-lg">
                <h1 className="p-2">SHARE ON:</h1>
                <FacebookShareButton
                  quote={singleArticle.title}
                  hashtag={singleArticle.tags[0]}
                  url={'https://www.stockpilegaming.com/article/' + `${slug}`}
                >
                  <FaFacebook
                    style={{
                      height: 30,
                      width: 30,
                      color: '#3b5998',
                      margin: '.5rem',
                    }}
                  />
                </FacebookShareButton>
                <TwitterShareButton
                  title={singleArticle.title}
                  hastags={singleArticle.tags[0]}
                  url={'https://www.stockpilegaming.com/article/' + `${slug}`}
                >
                  <FaTwitter
                    style={{
                      height: 30,
                      width: 30,
                      color: '#1da1f2',
                      margin: '.5rem',
                    }}
                  />
                </TwitterShareButton>
                <TelegramShareButton
                  title={singleArticle.title}
                  url={'https://www.stockpilegaming.com/article/' + `${slug}`}
                >
                  <FaTelegramPlane
                    style={{
                      backgroundColor: '#0088CC',
                      height: 30,
                      width: 30,
                      padding: 5,
                      borderRadius: 100,
                      margin: '.5rem',
                    }}
                  />
                </TelegramShareButton>
              </div>
            </div>
          </section>
        </header>
        <article>
          <BlockContent
            blocks={singleArticle.article}
            projectId="qc546n1u"
            dataset="production"
            className="article p-3 md:p-6 m-auto w-auto md:w-10/12 shadow  text-md md:text-lg tracking-wide leading-relaxed"
          />
        </article>
        {/* <section>
          <div className="flex justify-center ">
            <img
              src={singleArticle.bannerImage.asset.url}
              alt="banner image"
              className="w-11/12 rounded my-8 mx-4"
            />
          </div>
        </section> */}
      </div>
    </main>
  );
}
