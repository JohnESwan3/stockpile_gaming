export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      options: {
        maxLength: 90,
      },
    },
    {
      name: 'bannerImage',
      title: 'Banner image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image',
      title: 'Article Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'article',
      title: 'Article',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'heading2',
      title: 'Heading 2',
      type: 'string',
    },
    {
      name: 'article2',
      title: 'Article Part 2',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'heading3',
      title: 'Heading 3',
      type: 'string',
    },
    {
      name: 'article3',
      title: 'Article Part 3',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'heading4',
      title: 'Heading 4',
      type: 'string',
    },
    {
      name: 'article4',
      title: 'Article Part 4',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'carousel',
      title: 'Carousel',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'bannerImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
