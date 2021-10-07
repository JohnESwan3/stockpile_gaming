export default {
  title: 'Articles',
  name: 'articles',
  type: 'document',
  fields: [
    {
      title: 'Article Name',
      name: 'articleName',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'articleName',
        maxLength: 200, // will be ignored if slugify is set
      },
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'articleName',
      media: 'mainImage',
    },
  },
};
