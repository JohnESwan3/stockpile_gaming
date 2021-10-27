import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'qc546n1u',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: true,
});
