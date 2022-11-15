import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipeFood }) => {

  const navigate = useNavigate();
  
  console.log(recipeFood);

  const handleDetails = (e) => {
    e.preventDefault();
    navigate("/details");
  };

  return (
    <div className="d-flex flex-row justify-content-center flex-wrap ">

      {recipeFood.hits?.map((item) => {
        
        return (
          <>
            <Card
              className="d-flex justify-content-center align-items-center"
              style={{ width: "18rem", margin: "1rem" }}
            >
              <Card.Title>{item.recipe.label}</Card.Title>
              <Card.Img variant="top" src={item.recipe.image} />
              <Button onClick={handleDetails} variant="primary">
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
