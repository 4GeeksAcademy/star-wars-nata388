import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [detail, setDetail] = useState({});

  const search = () => {
    let searchDetail = store.characters
      .concat(store.planets)
      .find((item) => item._id === params.id);
    setDetail(searchDetail);
  };

  useEffect(() => {
    search();
  }, [store.characters, store.planets]);
  console.log(store.characters)
  console.log(store.planets)

  return (
    <div className="d-flex justify-content-center">
      <div className="card">
        <div className="card-header">
          <h1 className="text-danger"> {detail?.properties?.name}</h1>
        </div>
        <div className="card-body">
          <h1> {detail?.properties?.gender}</h1>
          <h1> {detail?.properties?.eye_color}</h1>
          <h1> {detail?.properties?.birth_year}</h1>
          <h1> {detail?.properties?.height}</h1>
          <h1> {detail?.properties?.climate}</h1>
          <h1> {detail?.properties?.diameter}</h1>
          <h1> {detail?.properties?.population}</h1>
          <h1> {detail?.properties?.rotation_period}</h1>
        </div>
      </div>





    </div>
  );
};

export default Detail;
