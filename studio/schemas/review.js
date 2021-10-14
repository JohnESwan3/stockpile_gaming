export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    //   Game Information
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
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedOn',
      title: 'Published On',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'affiliate',
      title: 'Affiliate Link',
      type: 'url',
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gameLogo',
      title: 'Game Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'hero',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headerImg',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'developer',
      title: 'Developer',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publisher',
      title: 'Publisher',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'engine',
      title: 'Engine',
      type: 'string',
    },
    {
      name: 'platforms',
      title: 'Platforms',
      type: 'string',
      options: {
        list: [
          { value: 'PC: Steam', title: 'PC: Steam' },
          { value: 'PC: Epic', title: 'PC: Epic Games Store' },
          { value: 'PC: GOG', title: 'PC: Other' },
          { value: 'PS5', title: 'PS5' },
          { value: 'PS4', title: 'PS4' },
          { value: 'PS3', title: 'PS3' },
          { value: 'PSVita', title: 'PSVita' },
          { value: 'PSP', title: 'PSP' },
          { value: 'Xbox Series X|S', title: 'Xbox Series X|S' },
          { value: 'Xbox One', title: 'Xbox One' },
          { value: 'Nintendo Switch', title: 'Nintendo Switch' },
          { value: 'Nintendo 3DS', title: 'Nintendo 3DS' },
        ],
      },
    },
    {
      name: 'reviewedOn',
      title: 'Platform Reviewed On',
      type: 'string',
      options: {
        list: [
          { value: 'PC: Steam', title: 'PC: Steam' },
          { value: 'PC: Epic', title: 'PC: Epic Games Store' },
          { value: 'PC: GOG', title: 'PC: Other' },
          { value: 'PS5', title: 'PS5' },
          { value: 'PS4', title: 'PS4' },
          { value: 'PS3', title: 'PS3' },
          { value: 'PSVita', title: 'PSVita' },
          { value: 'PSP', title: 'PSP' },
          { value: 'Xbox Series X|S', title: 'Xbox Series X|S' },
          { value: 'Xbox One', title: 'Xbox One' },
          { value: 'Nintendo Switch', title: 'Nintendo Switch' },
          { value: 'Nintendo 3DS', title: 'Nintendo 3DS' },
        ],
      },
    },
    // Review Breakdown
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subText',
      title: 'Sub-Text',
      type: 'string',
    },
    {
      name: 'subHeading1',
      title: 'Sub-Heading1',
      type: 'string',
    },
    {
      name: 'article1',
      title: 'Article Part 1',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'subHeading2',
      title: 'Sub-Heading2',
      type: 'string',
    },
    {
      name: 'article2',
      title: 'Article Part 2',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'subHeading3',
      title: 'Sub-Heading3',
      type: 'string',
    },
    {
      name: 'article3',
      title: 'Article Part 3',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'graphics',
      title: 'Graphics Review',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'graphicsScore',
      title: 'Graphics Score',
      type: 'number',
    },
    {
      name: 'sound',
      title: 'Sound Review',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'soundScore',
      title: 'Sound Score',
      type: 'number',
    },
    {
      name: 'gameplay',
      title: 'Gameplay Review',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'gameplayScore',
      title: 'Gameplay Score',
      type: 'number',
    },
    {
      name: 'story',
      title: 'Story Review',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'storyScore',
      title: 'Story Score',
      type: 'number',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'score',
      title: 'Score',
      type: 'number',
    },
    // Screenshots
    {
      name: 'screenshot1',
      title: 'Screenshot 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot2',
      title: 'Screenshot 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot3',
      title: 'Screenshot 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot4',
      title: 'Screenshot 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot5',
      title: 'Screenshot 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot6',
      title: 'Screenshot 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot7',
      title: 'Screenshot 7',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot8',
      title: 'Screenshot 8',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot9',
      title: 'Screenshot 9',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'screenshot10',
      title: 'Screenshot 10',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
      date: 'publishedOn',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
