import React from "react"
import { Helmet } from "react-helmet"

const en_MetaData = {
  'title': 'Tattoo Discovery | Get inspired with +3000 tattoo designs 📱😍✅',
  'description':'🥇 A social network of tattoos. Find the best of all!',
  'url':'https://tattoodiscovery.app/'
};

const es_MetaData = {
  'title': 'Tattoo Discovery | Inspírate con +3000 diseños de tatuaje 📱😍✅',
  'description':'🥇 Una red social de tatuajes. Encuentra el mejor de todos!',
  'url':'https://tattoodiscovery.app/es/'
};

const rich_snippet = {
                       "@context": "https://schema.org",
                       "@type": "SoftwareApplication",
                       "name": "Tattoo Discovery",
                       "operatingSystem": "ANDROID",
                       "applicationCategory": "Social",
                       "aggregateRating": {
                         "@type": "AggregateRating",
                         "ratingValue": "4.556",
                         "ratingCount": "9"
                       },
                       "offers": {
                         "@type": "Offer",
                         "price": "0",
                         "seller": {
                          "@type": "Organization",
                          "name": "Palms Intelligence"
                          }
                       }
                     }



function SEO(props) {
  
  const { lang } = props
  var metaData

  if(lang === "es") {
    metaData = es_MetaData;
  }
  else {
    metaData = en_MetaData;
  }

  return (
    <Helmet>
      <html lang={lang} />
      <title>{metaData['title']}</title>
      <link rel="alternate" hreflang="en"
        href="https://tattoodiscovery.app/" />
      <link rel="alternate" hreflang="es"
        href="https://tattoodiscovery.app/es/" />
      <link rel="icon" type="image/x-icon"
        href="https://tattoodiscovery.app/icon.ico" />
      <meta name="robots" content="index,follow" />
      <meta name="og:title" content={metaData['title']} />
      <meta name="description" content={metaData['description']} />
      <meta name="og:description" content={metaData['description']} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaData['url']} />
      <meta property="og:site_name" content={metaData['title']} />
      <meta property="og:image" content="https://tattoodiscovery.app/icon-blank.png"/>
      <meta property="og:image:secure_url" content="https://tattoodiscovery.app/icon-blank.png"/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:title" content={metaData['title']}/>
      <meta property="twitter:description" content={metaData['description']}/>
      <meta property="twitter:image" content={metaData['highLightImage']}/>
      <meta property="lang" content={lang}/>
      <meta name="theme-color" content="#ee77a7"/>
      <script className='structured-data-list' type="application/ld+json">{JSON.stringify(rich_snippet)}</script>
    </Helmet>
  );
}

export default SEO