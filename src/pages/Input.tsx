import Container from '../components/site/Container'
import Section from '../components/site/Section'
import Input from '../components/library/Input'

const InputPage = () => {
  return (
    <Container
        title="Inputs"
        description="An input is a widget that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with and manipulate content on a web page."
      >

        {/* Section */}
        <Section
          id="input-basic"
          title="Basic"
          description="Basic input with a placeholder."
        >
          <Input type="text" placeholder="Type things here!" />
          <Input disabled type="text" placeholder="Disabled" />
        </Section>

        {/* Section */}
        <Section
          id="input-label"
          title="Label"
          description="Input with a label."
        >
          <Input type="email" label="Email" placeholder="you@site.com" />
        </Section>

        {/* Section */}
        <Section
          id="input-description"
          title="Description"
          description="Input with a description."
        >
          <Input type="password" label="Password" placeholder="super secret!" description="We'll totally hash this my friend ;)" />
        </Section>
        
      </Container>
  )
}

export default InputPage