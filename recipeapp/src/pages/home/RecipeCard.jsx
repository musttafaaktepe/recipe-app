import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecipeCard = ({ recipeFood }) => {
  console.log(recipeFood);
  
  return (
    <div className="d-flex flex-row justify-content-center flex-wrap ">
      {recipeFood.hits?.map((item) => {
        return (
          <>
            <Card className="d-flex justify-content-center align-items-center"  style={{ width: "18rem", margin:"1rem"}}>
                <Card.Title >{item.recipe.label}</Card.Title>
                <Card.Img variant="top" src={item.recipe.image} />
                <Button variant="primary">Detail</Button>      
            </Card>
            </>
        );
      })}
    </div>
  );
};

export default RecipeCard;