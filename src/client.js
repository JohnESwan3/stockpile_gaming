import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'dowiucww',
  dataset: 'production',
  useCdn: true,
});
