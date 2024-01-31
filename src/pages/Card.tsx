import Container from '../components/site/Container'
import Section from '../components/site/Section'
import { BlockLinkCard, ContentCard } from '../components/library/Card'
import { SiNextdotjs, SiVite } from 'react-icons/si'


const CardPage = () => {
  return (
    <Container
        title="Card"
        description="A card us a flexible and extensible conten container."
      >


        {/* Section */}
        <Section
          id="card-simple"
          title="Simple"
          description="Simple cards display content and can provide a distinct link that can be selected."
        >
          <ContentCard
            title="Card title"
            subtitle="Card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content"
            link={{
              url: "#",
              text: "Card link"
            }}
          >
            
          </ContentCard>
        </Section>

        {/* Section */}
        <Section
          id="card-header-footer"
          title="Simple with a header and footer"
          description="Add an optional header and/or footer within a card."
        >
          <ContentCard
            header="Featured"
            title="Card title"
            subtitle="Card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content"
            link={{
              url: "#",
              text: "Card link"
            }}
          >
            
          </ContentCard>
          <ContentCard
            footer="Last updated 5 mins ago"
            title="Card title"
            subtitle="Card subtitle"
            plaintext="Some quick example text to build on the card title and make up the bulk of the card's content"
            link={{
              url: "#",
              text: "Card link"
            }}
          >
            
          </ContentCard>
        </Section>

        {/* Section */}
        <Section
          id="card-block-link"
          title="Block link"
          description="A simple card enhanced into a selectable block link."
        >
          <BlockLinkCard url="https://vitejs.dev/" text="vite">
            <SiVite className="h-10 w-10" />
          </BlockLinkCard>

          <BlockLinkCard url="https://nextjs.org/" text="Next.js">
            <SiNextdotjs className="h-10 w-10" />
          </BlockLinkCard>
        </Section>
        
      </Container>
  )
}

export default CardPage