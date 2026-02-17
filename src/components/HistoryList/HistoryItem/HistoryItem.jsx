import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./HistoryItem.module.css";

const HistoryItem = ({ vin }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/history/${vin}`);
  };

  return (
    <li className={style.historyItem} onClick={handleClick}>
      {vin}
    </li>
  );
};

export default HistoryItem;
