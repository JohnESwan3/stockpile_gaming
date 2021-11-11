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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      options: {
        maxLength: 90,
      },
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          { value: 'Action', title: 'Action' },
          { value: 'Adventure', title: 'Adventure' },
          { value: 'RPG', title: 'RPG' },
          { value: 'Strategy', title: 'Strategy' },
          { value: 'Sports', title: 'Sports' },
        ],
      },
    },
    {
      name: 'subGenre',
      title: 'Sub-Genre',
      type: 'string',
      options: {
        list: [
          { value: 'Action RPG', title: 'Action RPG' },
          { value: 'Beat em Up', title: 'Beat em Up' },
          { value: 'Brawler', title: 'Brawler' },
          { value: 'CRPG', title: 'CRPG' },
          { value: 'Fighting', title: 'Fighting' },
          { value: 'First Person RPG', title: 'First Person RPG' },
          { value: 'FPS', title: 'FPS' },
          { value: 'Horror', title: 'Horror' },
          { value: 'JRPG', title: 'JRPG' },
          { value: 'Metroidvania', title: 'Metroidvania' },
          { value: 'MOBA', title: 'MOBA' },
          { value: 'Monster Tamer', title: 'Monster Tamer' },
          { value: 'Music/Rhythm', title: 'Music/Rhythm' },
          { value: 'Platform', title: 'Platform' },
          { value: 'Puzzle', title: 'Puzzle' },
          { value: 'MMORPG', title: 'MMORPG' },
          { value: 'Racing', title: 'Racing' },
          { value: 'Rouge-light', title: 'Rogue-light' },
          { value: 'Rogue-like', title: 'Rogue-like' },
          { value: 'Real-Time Strategy', title: 'Real-Time Strategy' },
          { value: 'Real-Time Tactics', title: 'Real-Time Tactics' },
          { value: 'Sandbox', title: 'Sandbox' },
          { value: 'Shoot em Up', title: 'Shoot em Up' },
          { value: 'Stealth', title: 'Stealth' },
          { value: 'Survival', title: 'Survival' },
          { value: 'Survival Horror', title: 'Survival Horror' },
          { value: 'Tower Defense', title: 'Tower Defense' },
          { value: 'Turn-Based Strategy', title: 'Turn-Based Strategy' },
          { value: 'Turn-Based Tactics', title: 'Turn-Based Tactics' },
          { value: 'Third-Person Shooter', title: 'Third-Person Shooter' },
          { value: 'Visual Novel', title: 'Visual Novel' },
          { value: '4X', title: '4X' },
        ],
      },
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // Cant figure out how to reformat sanity dates. This is an awful workaround but Sanity documentation sucks
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'publishMonth',
      title: 'Publish Month',
      type: 'number',
    },
    {
      name: 'publishDay',
      title: 'Publish Day',
      type: 'number',
    },
    {
      name: 'publishYear',
      title: 'Publish Year',
      type: 'number',
    },

    {
      name: 'releaseDate',
      title: 'release Date',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'releaseMonth',
      title: 'release Month',
      type: 'number',
    },
    {
      name: 'releaseDay',
      title: 'release Day',
      type: 'number',
    },
    {
      name: 'releaseYear',
      title: 'release Year',
      type: 'number',
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
      type: 'array',
      of: [
        {
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
      ],
    },
    {
      name: 'reviewedOn',
      title: 'Platform Reviewed On',
      type: 'string',
      options: {
        list: [
          { value: 'PC: Steam', title: 'PC: Steam' },
          { value: 'PC: Epic', title: 'PC: Epic Games Store' },
          { value: 'PC: GOG', title: 'PC: GOG' },
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
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
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          of: [{ type: 'author' }],
        },
        {
          type: 'image',
          title: 'Main Image',
          options: { hotspot: true },
        },
      ],
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
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          of: [{ type: 'author' }],
        },
        {
          type: 'image',
          title: 'Main Image',
          options: { hotspot: true },
        },
      ],
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
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          of: [{ type: 'author' }],
        },
        {
          type: 'image',
          title: 'Main Image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'graphics',
      title: 'Graphics Review',
      type: 'array',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          of: [{ type: 'author' }],
        },
        {
          type: 'image',
          title: 'Main Image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'sound',
      title: 'Sound Review',
      type: 'array',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          of: [{ type: 'author' }],
        },
        {
          type: 'image',
          title: 'Main Image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'gameplay',
      title: 'Gameplay Review',
      type: 'array',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          of: [{ type: 'author' }],
        },
        {
          type: 'image',
          title: 'Main Image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'story',
      title: 'Story Review',
      type: 'array',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          of: [{ type: 'author' }],
        },
        {
          type: 'image',
          title: 'Main Image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          { value: 'Excellent', title: 'Excellent' },
          { value: 'Above Average', title: 'Above Average' },
          { value: 'Average', title: 'Average' },
          { value: 'Below Average', title: 'Below Average' },
          { value: 'Stay Away', title: 'Stay Away' },
        ],
      },
    },
    {
      name: 'sumHeading',
      title: 'Summary Heading',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [
        {
          type: 'block',
          title: 'Block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
          of: [{ type: 'author' }],
        },
        {
          type: 'image',
          title: 'Main Image',
          options: { hotspot: true },
        },
      ],
    },

    // Screenshots
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
