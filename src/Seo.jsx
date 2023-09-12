/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async"

const Seo = ({title, description, image}) => {
  return (
     <>
     <Helmet>
     <title>{title}</title>
     <meta name="description" content={description} />
     <meta property="og:image" content={image} />
     <meta property="og:title" content={title} />
     <meta property="og:description" content={description} />
     <meta name="twitter:creator" content={name} />
     <meta name="twitter:image" content={image} />
     <meta name="twitter:title" content={title} />
     <meta name="twitter:description" content={description} />
   </Helmet>
   <div>
     <h1>{title}</h1>
     <p>{description}</p>
     <img src={image} />
   </div>
   </>
     )
}

export default Seo