import { Link } from "react-router-dom"
import Container from "../components/site/Container"
import { BlockLinkCard } from "../components/library/Card"
import { RxButton, RxIdCard, RxInput } from "react-icons/rx"

export const HomePage = () => {
  return (
    <Container
      title="My Components"
      description="A collection of my customized components. Built with react and Tailwind CSS"
    >
      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
        <BlockLinkCard text="Button" widthLimit="none" CustomLinkedComponent={Link} customLinksProps={{
          to:"/button"
        }}>
          <RxButton className="h-10 w-10" />
        </BlockLinkCard>
        <BlockLinkCard text="Card"widthLimit="none" CustomLinkedComponent={Link} customLinksProps={{
          to:"/card"
        }}>
          <RxIdCard className="h-10 w-10" />
        </BlockLinkCard>
        <BlockLinkCard text="Input"widthLimit="none" CustomLinkedComponent={Link} customLinksProps={{
          to:"/input"
        }}>
          <RxInput className="h-10 w-10" />
        </BlockLinkCard>
      </div>
    </Container>
  )
}
