import React, { useEffect} from "react";
import { Card, CardBody, CardTitle, CardText, Container, Button } from "reactstrap";

const Home = () => {
  useEffect(()=>{
    document.title="Home || LearnCode";
  }, []) 

  return (
    <div className="text-center">
      <Card className="my-5 bg-light border-0">
        <CardBody>
          <CardTitle tag="h1">Learn code with Express</CardTitle>
          <CardText>
            This is developed by Express for learning purpose. Backend is on Spring Boot and frontend on React.js.
          </CardText>
          <Container>
            <Button color="primary" outline>Start Using</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
