export default {
  name: 'home',
  title: 'Home Screen',
  type: 'document',
  fields: [
    {
      name: 'background',
      title: 'Background Image',
      type: 'image',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'content1',
      title: 'Content 1',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'content2',
      title: 'Content 2',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'article1',
      title: 'Article 1',
      type: 'reference',
      to: { type: 'article' },
    },
    {
      name: 'article2',
      title: 'Article 2',
      type: 'reference',
      to: { type: 'article' },
    },
    {
      name: 'article3',
      title: 'Article 3',
      type: 'reference',
      to: { type: 'article' },
    },
    {
      name: 'article4',
      title: 'Article 4',
      type: 'reference',
      to: { type: 'article' },
    },
    {
      name: 'review1',
      title: 'Review 1',
      type: 'reference',
      to: { type: 'review' },
    },
    {
      name: 'review2',
      title: 'Review 2',
      type: 'reference',
      to: { type: 'review' },
    },
    {
      name: 'review3',
      title: 'Review 3',
      type: 'reference',
      to: { type: 'review' },
    },
    {
      name: 'review4',
      title: 'Review 4',
      type: 'reference',
      to: { type: 'review' },
    },
  ],
};
