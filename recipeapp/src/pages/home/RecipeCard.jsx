import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipeFood }) => {

  const navigate = useNavigate();
  
  console.log(recipeFood);

 

  return (
    <div className="d-flex flex-row justify-content-center flex-wrap ">

      {recipeFood.hits?.map((item) => {
        const {recipe, recipe:{image,label}}=item;
        
        return (
          <>
            <Card
              className="d-flex justify-content-center align-items-center"
              style={{ width: "18rem", margin: "1rem" }}
            >
              <Card.Title>{label}</Card.Title>
              <Card.Img variant="top" src={image} />

              <Button onClick={() => navigate("/details", {state:recipe}) }variant="primary">

                Detail
              </Button>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default RecipeCard;
