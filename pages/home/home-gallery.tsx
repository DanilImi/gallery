import { PreviewViewer } from "components/preview-viewer"
import { Header } from "components/header"
import { SEO } from "components/seo"
import { NextPage } from "next"
import { Laptop } from "components/laptop"
import { Satergo } from "@/components/satergo"
import { Aline } from "@/components/aline"


const HomeGallery: NextPage = () => {
  return (
    <>
      <SEO
				title={"Codependencyonart"}
				pageDescription={"Create your renters profile, pick all the features and amenities and let rental options come to you. Just like that your new apartment will find you."}
				pageUrl={"codependencyonart.com/"}
				keywords={"Home, A”flat, affflat, renting apartment"}
			/>
      <Header />
      <PreviewViewer />
      <Laptop />
      <Satergo />
      <Aline />
    </>
  )
}

export default HomeGallery