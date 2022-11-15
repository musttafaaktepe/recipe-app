import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import diet from "../../assets/diet.svg";
import { ImgStyled, DivStyled } from "./Details.style";

const Details = () => {
  const { state: detailsFood } = useLocation();
  const navigate = useNavigate();
  const {
    totalNutrients: {
      CA,
      CHOCDF,
      CHOLE,
      ENERC,
      ENERC_KCAL,
      FAT,
      FE,
      VITB12,
      K,
      MG,
      NA,
      ZN,
      PROCNT,
      SUGAR,
    },
  } = detailsFood;

  return (
    <>
      <DivStyled>
        <h3>{detailsFood.label}</h3>

        <ImgStyled src={diet} />
      </DivStyled>
      <Card className="d-flex flex-row" style={{ width: "90%" }}>
        <Card.Text>
          <p>Nutrients</p>
          <ul>
            <li>
              {CA.label} : {CA.quantity.toFixed(3)} {CA.unit}
            </li>
            <li>
              {CHOCDF.label} : {CHOCDF.quantity.toFixed(3)} {CHOCDF.unit}
            </li>
            <li>
              {CHOLE.label} : {CHOLE.quantity.toFixed(2)} {CHOLE.unit}
            </li>
            <li>
              {ENERC_KCAL.label} : {ENERC_KCAL.quantity.toFixed(3)}{" "}
              {ENERC_KCAL.unit}
            </li>
            <li>
              {FAT.label} : {FAT.quantity.toFixed(3)} {FAT.unit}
            </li>
            <li>
              {FE.label} : {FE.quantity.toFixed(3)} {FE.unit}
            </li>
            <li>
              {PROCNT.label} : {PROCNT.quantity.toFixed(3)} {PROCNT.unit}
            </li>
            <li>
              {MG.label} : {MG.quantity.toFixed(3)} {MG.unit}
            </li>
            <li>
              {NA.label} : {NA.quantity.toFixed(3)} {NA.unit}
            </li>
            <li>
              {VITB12.label} : {VITB12.quantity.toFixed(3)} {VITB12.unit}
            </li>
            <li>
              {ZN.label} : {ZN.quantity.toFixed(3)} {ZN.unit}
            </li>
          </ul>
        </Card.Text>
        <Card.Img
          variant="top"
          style={{ width: "20rem", height: "20rem" }}
          src={detailsFood.image}
        />

        <Card.Text>
          {detailsFood.ingredientLines.map((item) => {
            return (
              <>
                <li>{item}</li>
              </>
            );
          })}
        </Card.Text>
      </Card>

      <Button
        className="d-flex alignItemCenter"
        variant="primary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </>
  );
};

export default Details;
