import Section from "./components/site/Section";
import Container from "./components/site/Container";
import Layout from "./components/site/Layout";
import Button from "./components/library/Button";

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
          <Button colors={ { bg: 'bg-amber-500 ', hoverBg: "hover:bg-amber-600", focusRing: "focus:ring-amber-500"}}>Amber Primary</Button>
        </Section>

        <Section
          title="Secondary"
          description="Secondary actions should be obvious. Solid, high contast background colors work great here."
        >

          <Button variant="secondary">Default Secondary</Button>
          <Button variant="secondary" disabled>Default Secondary</Button>
          <Button variant="secondary" colors={ { text: 'text-amber-500 ', hoverBorder: "hover:border-amber-500", hoverBg: "hover:bg-amber-500", focusRing: "focus:ring-amber-500"}}>Amber Secondary</Button>


        </Section>

        <Section
          title="Tertiary"
          description="Tertiary actions should be obvious. Solid, high contast background colors work great here."
        >

          <Button variant="tertiary">Default Tertiary</Button>
          <Button variant="tertiary" disabled>Default Tertiary</Button>
          <Button variant="tertiary" colors={ { text: 'text-amber-500 ', hoverText: "hover:text-amber-700", focusRing: "focus:ring-amber-500" }}>Amber Secondary</Button>

        </Section>

        <Section
          title="Destructive"
          description="Destructive actions should be obvious. Solid, high contast background colors work great here."
        >

          <div className="bg-blue-500/50 p-3">component 1</div>
          <div className="bg-blue-500/50 p-3">component 2</div>
        </Section>
        
      </Container>
      <Container
        title="Container heading using a component instead of hardcoding"
        description="Container description"
      >


        {/* Section */}
        <Section
          title="Section heading using a component instead of hardcoding"
          description="Section description"
        >

          <div className="bg-blue-500/50 p-3">component 1</div>
          <div className="bg-blue-500/50 p-3">component 2</div>
        </Section>

        <Section
          title="Section heading using a component instead of hardcoding"
          description="Section description"
        >

          <div className="bg-blue-500/50 p-3">component 1</div>
          <div className="bg-blue-500/50 p-3">component 2</div>
        </Section>
        
      </Container>
    </Layout>
	)
}
