import Container from "../components/site/Container"

export const HomePage = ({ children } : {children?: React.ReactNode}) => {
  return (
    <Container
      title="My Components"
      description="A collection of my customized components. Built with react and Tailwind CSS"
    >
      {children}
    </Container>
  )
}
