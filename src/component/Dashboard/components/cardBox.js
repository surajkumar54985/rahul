import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Card from "./card";
import "../static/css/card.css";
import SearchContext from "../context/searchContext";

const CardBox = ({ setLoader, currPage }) => {
  const [allData, setData] = useState([]);

  const cardsPerPage = 21;

  const url = "https://reqres.in/api/users?page=2";
  const ctx = useContext(SearchContext);
  

  const getData = () => {
    setLoader(true);
    const response = axios
      .get(url)
      .then((res) => {
        const ans = res.data.data;
        console.log(ans);
        setData(ans);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);



  const arr = Object.keys(allData).map((key) => [key, allData[key]]);

  return arr
    .map((props) => {
      return (
        <div className="Card">
          <Card
            Id={props[1]["id"]}
            Name={props[1]["first_name"]}
            avaTar={props[1]["avatar"]}
          />
        </div>
      );
    });
};

export default CardBox;