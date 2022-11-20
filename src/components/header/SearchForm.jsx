import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MainContext } from "../../context/context";
import { useContext } from "react";
import axios from "axios";
import RecipeCard from "../../pages/home/RecipeCard";

const SearchForm = () => {
  const {
    data,
    data: { searchFood, selectMeal, recipeFood },
    setData,
    authentication: { API_KEY, API_ID },
  } = useContext(MainContext);

  const url = `https://api.edamam.com/search?q=${searchFood}&app_id=${API_ID.slice(
    0,
    -1
  )}&app_key=${API_KEY.slice(0, -1)}&mealType=${selectMeal}`;

  const handleSearch = async (e) => {
    e.preventDefault();
    const foodData = await axios(url);
    setData({ ...data, recipeFood: foodData.data });
  };

  console.log(url);

  return (
    <>
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

      <RecipeCard recipeFood={recipeFood} />
    </>
  );
};

export default SearchForm;
