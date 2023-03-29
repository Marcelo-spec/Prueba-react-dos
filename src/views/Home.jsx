import { Container } from "react-bootstrap";
import Pizzas from "../components/Pizza";

const Home = () => {
  
  return (
    <Container className="text-center">
      <div className="header">
          <h1 className="display-4 font-weight-bold">¡Pizzería Mamma Mía!</h1>
          <p className="lead font-weight-bold">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
      <Pizzas />
    </Container>
  );
};
export default Home;