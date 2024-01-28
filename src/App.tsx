import Layout from "./components/site/Layout";
import ButtonPage from "./routes/Button";
import CardPage from "./routes/Card";
import InputPage from "./routes/Input";

export default function App() {
	return (
    <Layout>
      <ButtonPage />
      <CardPage />
      <InputPage />
           
    </Layout>
	)
}
