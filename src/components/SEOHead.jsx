import { Helmet } from "react-helmet-async";
import { DEFAULT_SEO } from "../seoConfig";

const SEOHead = ({ title, description, url, image }) => {
  const seo = {
    title: title || DEFAULT_SEO.title,
    description: description || DEFAULT_SEO.description,
    url: url || DEFAULT_SEO.url,
    image: image || DEFAULT_SEO.image,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEOHead;
