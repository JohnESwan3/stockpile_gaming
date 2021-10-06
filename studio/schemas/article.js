export default {
  title: 'Articles',
  name: 'articles',
  type: 'document',
  fields: [
    {
      title: 'Article Name',
      name: 'articleName',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
};
