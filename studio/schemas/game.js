export default {
  name: 'game',
  title: 'Game',
  type: 'document',
  fields: [
    //   Game Information
    {
      name: 'name',
      title: 'Game Name',
      type: 'string',
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
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      title: 'Affiliate Link',
      name: 'affiliateLink',
      type: 'url',
    },
    {
      title: 'Platforms Available',
      name: 'platforms',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Platform Reviewed On',
      name: 'reviewedOn',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Price At Publishing',
      name: 'price',
      type: 'string',
    },
    {
      title: 'Cover',
      name: 'cover',
      type: 'image',
    },
    {
      title: 'Background Image',
      name: 'bgImage',
      type: 'image',
    },

    {
      title: 'Developer',
      name: 'developer',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Publisher',
      name: 'publisher',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Engine',
      name: 'engine',
      type: 'array',
      of: [{ type: 'string' }],
    },
    // Review Breakdown
    {
      title: 'Article',
      name: 'article',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Graphics Review',
      name: 'graphicsReview',
      type: 'text',
    },
    {
      title: 'Graphics Score',
      name: 'graphicsScore',
      type: 'number',
    },
    {
      title: 'Sound Review',
      name: 'soundReview',
      type: 'text',
    },
    {
      title: 'Sound Score',
      name: 'soundScore',
      type: 'number',
    },
    {
      title: 'Gameplay Review',
      name: 'gameplayReview',
      type: 'text',
    },
    {
      title: 'Gameplay Score',
      name: 'gameplayScore',
      type: 'number',
    },
    {
      title: 'Story Review',
      name: 'storyReview',
      type: 'text',
    },
    {
      title: 'Story Score',
      name: 'storyScore',
      type: 'number',
    },
    {
      title: 'Review Summary',
      name: 'reviewSummary',
      type: 'text',
    },
    {
      title: 'Review Score',
      name: 'reviewScore',
      type: 'number',
    },

    // Screenshots
    {
      title: 'Screenshot 1',
      name: 'screenshot1',
      type: 'image',
    },
    {
      title: 'Screenshot 2',
      name: 'screenshot2',
      type: 'image',
    },
    {
      title: 'Screenshot 3',
      name: 'screenshot3',
      type: 'image',
    },
    {
      title: 'Screenshot 4',
      name: 'screenshot4',
      type: 'image',
    },
    {
      title: 'Screenshot 5',
      name: 'screenshot5',
      type: 'image',
    },
    {
      title: 'Screenshot 6',
      name: 'screenshot6',
      type: 'image',
    },
    {
      title: 'Screenshot 7',
      name: 'screenshot7',
      type: 'image',
    },
    {
      title: 'Screenshot 8',
      name: 'screenshot8',
      type: 'image',
    },
    {
      title: 'Screenshot 9',
      name: 'screenshot9',
      type: 'image',
    },
    {
      title: 'Screenshot 10',
      name: 'screenshot10',
      type: 'image',
    },
    {
      title: 'Video',
      name: 'video',
      type: 'url',
    },
  ],
};
