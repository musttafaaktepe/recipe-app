import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MainContext } from "../../context/context";
import { useContext } from "react";
import axios from "axios";

const SearchForm = () => {
  const {
    data,
    data: { searchFood, selectMeal },
    setData,
    authentication: { API_KEY, API_ID },
  } = useContext(MainContext);

  const url = `https://api.edamam.com/search?q=${searchFood}&app_id=${API_ID.slice(0,-1)}&app_key=${API_KEY}&mealType=${selectMeal}`;

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await axios(url);
    console.log(data);
  };
  return (
    <Form>
      <fieldset className="d-flex flex-row justify-content-center">
        <Form.Group className="mb-3">
          <Form.Control
            id="serchFood"
            placeholder="Search Food"
            onChange={(e) => setData({ ...data, searchFood: e.target.value })}
          />
        </Form.Group>
        <Button
          style={{ height: "2.2rem" }}
          type="submit"
          onClick={handleSearch}
        >
          Submit
        </Button>
        <Form.Group className="mb-3">
          <Form.Select
            id="Select"
            onChange={(e) => setData({ ...data, selectMeal: e.target.value })}
          >
            <option selected value={"breakfast"}>
              Breakfast
            </option>
            <option value={"lunch"}>Lunch</option>
            <option value={"dinner"}>Dinner</option>
            <option value={"snack"}>Snack</option>
            <option value={"teatime"}>Teatime</option>
          </Form.Select>
        </Form.Group>
      </fieldset>
    </Form>
  );
};

export default SearchForm;
