import Section from "./components/site/Section";
import Container from "./components/site/Container";
import Layout from "./components/site/Layout";

export default function App() {
	return (
    <Layout>
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
