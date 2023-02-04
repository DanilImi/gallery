import { PreviewViewer } from "components/preview-viewer"
import { Header } from "components/header"
import { SEO } from "components/seo"
import { NextPage } from "next"


const HomeGallery: NextPage = () => {
  return (
    <>
      <SEO
				title={"Gallery"}
				pageDescription={"Create your renters profile, pick all the features and amenities and let rental options come to you. Just like that your new apartment will find you."}
				pageUrl={""}
				keywords={"Home, A”flat, affflat, renting apartment"}
			/>
      <Header />
      <PreviewViewer />
    </>
  )
}

export default HomeGallery