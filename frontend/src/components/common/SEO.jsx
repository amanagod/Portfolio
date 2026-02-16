import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../utils/constants';

/**
 * SEO component - sets per-page meta tags and Open Graph data.
 */
const SEO = ({
  title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  url = SITE_CONFIG.url,
}) => {
  const pageTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;

