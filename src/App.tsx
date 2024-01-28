import { useState, useEffect } from "react";
import Layout from "./components/site/Layout";
import ButtonPage from "./routes/Button";
import CardPage from "./routes/Card";
import InputPage from "./routes/Input";
import Container from "./components/site/Container";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)


  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [])
  
  const navigate = (path: string) => {
    window.history.pushState({}, "", path)

    setCurrentPath(path)
  }
  const renderComponent = () => {
    switch (currentPath) {
      case "/":
        return (
          <HomePage>
            <div className="flex flex-col text-black dark:text-white">
              <a onClick={() => navigate("/button")}>Button</a>
              <a onClick={() => navigate("/card")}>Card</a>
              <a onClick={() => navigate("/input")}>Input</a>
            </div>
          </HomePage>
        )

      case "/button":
        return <ButtonPage />

      case "/card":
        return <CardPage />

      case "/input":
        return <InputPage />
      
        default:
          return <div>No bueno Not found 404</div>
    }
  }

  return (
    <Layout>
      {renderComponent()}
    </Layout>
  )

}

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
