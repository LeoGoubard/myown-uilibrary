import Section from "./components/site/Section";
import Container from "./components/site/Container";
import Layout from "./components/site/Layout";
import Button from "./components/library/Button";
import { BlockLinkCard, ContentCard } from "./components/library/Card";
import { SiNextdotjs, SiVite } from "react-icons/si";
import Input from "./components/library/Input";

export default function App() {
	return (
    <Layout>
      <Container
        title="Button"
        description="A button is a widget that enables users to trigger an action or event"
      >


        {/* Section */}
        <Section
          title="Primary"
          description="Primary actions should be obvious. Solid, high contast background colors work great here."
        >

          <Button>Default Primary</Button>
          <Button disabled>Default Primary</Button>
          <Button colors={ { bg: 'bg-amber-500 ', hoverBg: "hover:bg-amber-600", focusRing: "focus:ring-amber-500"}}>Amber</Button>
          <Button colors={ { bg: 'bg-rose-500 ', hoverBg: "hover:bg-rose-600", focusRing: "focus:ring-rose-500"}}>Rose</Button>
          <Button colors={ { bg: 'bg-fuchsia-500 ', hoverBg: "hover:bg-fuchsia-600", focusRing: "focus:ring-fuchsia-500"}}>Fuchsia</Button>
          <Button colors={ { bg: 'bg-indigo-500 ', hoverBg: "hover:bg-indigo-600", focusRing: "focus:ring-indigo-500"}}>Indigo</Button>
          <Button colors={ { bg: 'bg-[#1da1f2] ', hoverBg: "hover:bg-[#1da1f2]", focusRing: "focus:ring-[#1da1f2]"}}>Twitter Blue</Button>
        </Section>

        <Section
          title="Secondary"
          description="Secondary actions should be obvious. Solid, high contast background colors work great here."
        >

          <Button variant="secondary">Default Secondary</Button>
          <Button variant="secondary" disabled>Default Secondary</Button>
          <Button variant="secondary" colors={ { text: 'text-amber-500 ', hoverBorder: "hover:border-amber-500", hoverBg: "hover:bg-amber-500", focusRing: "focus:ring-amber-500"}}>Amber</Button>
          <Button variant="secondary" colors={ { text: 'text-rose-500 ', hoverBorder: "hover:border-rose-500", hoverBg: "hover:bg-rose-500", focusRing: "focus:ring-amber-500"}}>Rose</Button>
          <Button variant="secondary" colors={ { text: 'text-fuchsia-500 ', hoverBorder: "hover:border-fuchsia-500", hoverBg: "hover:bg-fuchsia-500", focusRing: "focus:ring-amber-500"}}>Fuchsia</Button>
          <Button variant="secondary" colors={ { text: 'text-indigo-500 ', hoverBorder: "hover:border-indigo-500", hoverBg: "hover:bg-indigo-500", focusRing: "focus:ring-amber-500"}}>Indigo</Button>
          <Button variant="secondary" colors={ { text: 'text-[#1da1f2] ', hoverBorder: "hover:border-[#1da1f2]", hoverBg: "hover:bg-[#1da1f2]", focusRing: "focus:ring-[#1da1f2]"}}>Twitter Blue</Button>


        </Section>

        <Section
          title="Tertiary"
          description="Tertiary actions should be obvious. Solid, high contast background colors work great here."
        >

          <Button variant="tertiary">Default Tertiary</Button>
          <Button variant="tertiary" disabled>Default Tertiary</Button>
          <Button variant="tertiary" colors={ { text: 'text-amber-500 ', hoverText: "hover:text-amber-700", focusRing: "focus:ring-amber-500" }}>Amber</Button>
          <Button variant="tertiary" colors={ { text: 'text-rose-500 ', hoverText: "hover:text-rose-700", focusRing: "focus:ring-rose-500" }}>Rose</Button>
          <Button variant="tertiary" colors={ { text: 'text-indigo-500 ', hoverText: "hover:text-indigo-700", focusRing: "focus:ring-indigo-500" }}>Fuchsia</Button>
          <Button variant="tertiary" colors={ { text: 'text-fuchsia-500 ', hoverText: "hover:text-fuchsia-700", focusRing: "focus:ring-fuchsia-500" }}>Indigo</Button>
          <Button variant="tertiary" colors={ { text: 'text-[#1da1f2] ', hoverText: "hover:text-[#1da1f2]", focusRing: "focus:ring-[#1da1f2]" }}>Twitter Blue</Button>

        </Section>

        <Section
          title="Destructive"
          description="Destructive actions should be obvious. Solid, high contast background colors work great here."
        >

          <Button colors={ { bg: 'bg-red-500 ', hoverBg: "hover:bg-red-600", focusRing: "focus:ring-red-500"}}>Yes, I'm sure I want to delete this.</Button>
          <Button variant="secondary"colors={ { text: 'text-red-500 ', hoverBg: "hover:bg-red-500", hoverBorder: "hover:border-red-500", focusRing: "focus:ring-red-500"}}>Yes, I'm sure I want to delete this.</Button>
          <Button variant="tertiary" colors={ { text: 'text-gray-500 ', hoverText: "hover:text-gray-700", focusRing: "focus:ring-gray-500"}}>Unsubscribe</Button>


        </Section>
        
      </Container>
      <Container
        title="Card"
        description="A card us a flexible and extensible conten container."
      >


        {/* Section */}
        <Section
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

      <Container
        title="Inputs"
        description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with and manipulate content on a web page."
      >


        {/* Section */}
        <Section
          title="Basic"
          description="Basic input with a placeholder."
        >
          <Input type="text" placeholder="Type things here!" />
          <Input disabled type="text" placeholder="Disabled" />
        </Section>

        {/* Section */}
        <Section
          title="Label"
          description="Input with a label."
        >
          <Input type="email" label="Email" placeholder="you@site.com" />
        </Section>

        {/* Section */}
        <Section
          title="Description"
          description="Input with a description."
        >
          <Input type="password" label="Password" placeholder="super secret!" description="We'll totally hash this my friend ;)" />
        </Section>
        
      </Container>
    </Layout>
	)
}
