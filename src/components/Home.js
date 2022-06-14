import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../redux/action/action";

const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.reducer.details);

  console.log("resoinseData is_________", responseData);

  useEffect(() => {
    dispatch(Action());
  }, [dispatch]);

  const result = responseData.map((data, index) => {
    return (
      <tr key={index}>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.country}</td>
      </tr>
    );
  });
  return (
    <div>
        <h1>React Redux Crud Operation | Read Operation</h1>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
            {result}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
