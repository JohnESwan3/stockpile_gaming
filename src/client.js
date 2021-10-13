import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'qc546n1u',
  dataset: 'production',
  useCdn: true,
});
