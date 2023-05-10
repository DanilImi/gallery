import { PreviewViewer } from "components/preview-viewer"
import { Header } from "components/header"
import { SEO } from "components/seo"
import { NextPage } from "next"
import { Laptop } from "components/laptop"
import { Satergo } from "@/components/satergo"
import { Aline } from "@/components/aline"
import { Ergonodes } from "@/components/ergonodes"
import { Samurai } from "@/components/samurai"
import { Emporas } from "@/components/emporas"
import { Gooseart } from "@/components/gooseart"
import { Kbs } from "@/components/kbs"
import { Girl } from "@/components/girl"
import { GraphicDesign } from "@/components/graphic-design"
import { Footer } from "@/components/footer"
import { useRef } from "react"


const HomeGallery: NextPage = () => {
  const myRefGirl = useRef<any>(null)
  const myRefGraphic = useRef<any>(null)
  const myRefContact = useRef<any>(null)
  const handleClickGirl = () => {
    myRefGirl.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
  }
  const handleClickGraphic = () => {
    myRefGraphic.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
  }
  const handleClickContact = () => {
    myRefContact.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' })
  }
  return (
    <>
      <SEO
				title={"CODEPENDENCYONART"}
				pageDescription={"We understand both the client and the brand, and we create a golden mean that unites them"}
				pageUrl={"codependencyonart.com/"}
				keywords={"design studio, order a logo, order branding, logo design, order an illustration, graphic design order, order brand design, codependencyonart, codependency on art, corporate identity order"}
			/>
      <Header 
        handleClickGirl={handleClickGirl}
        handleClickGraphic={handleClickGraphic}
        handleClickContact={handleClickContact}
      />
      <PreviewViewer />
      <div ref={myRefGirl}><Laptop /></div>
      <Satergo />
      <Ergonodes />
      <Aline />
      <Samurai />
      <Emporas />
      <Gooseart />
      <Kbs />
      <Girl />
      <div ref={myRefGraphic}><GraphicDesign /></div>
      <div ref={myRefContact}><Footer /></div>
    </>
  )
}

export default HomeGallery