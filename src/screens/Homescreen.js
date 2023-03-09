import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Pizza from "../components/Pizza";

export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
    <Filter/>
    <div className="row justify-content-center">
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error="Something Went Wrong" />
      ) : (
        pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza._Id}>
            <div>
              <Pizza pizza={pizza} />
            </div>
          </div>
        ))
      )}
    </div>
  </div>
  );
}
