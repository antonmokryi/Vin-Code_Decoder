import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getVinCode, getVehicleVariablesList } from "../../api/vinCodeApi";
import style from "./HistoryDetails.module.css";

const HistoryDetails = () => {
  const { id } = useParams();
  const [vinData, setVinData] = useState(null);
  const [variables, setVariables] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      setIsLoading(true);
      try {
        const data = await getVinCode(id);
        setVinData(data);

        const variablesData = await getVehicleVariablesList();
        setVariables(Array.isArray(variablesData?.Results) ? variablesData.Results : []);
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, [id]);

  const results = Array.isArray(vinData?.Results) ? vinData.Results : [];

  const getDescription = (variableId) => {
    const found = variables.find(
      (item) => String(item?.ID) === String(variableId)
    );
    return found?.Description;
  };

  return (
    <section className={style.detailsSection}>
      <Link className={style.backLink} to="/">
        Назад
      </Link>

      <h3 className={style.title}>VIN: {id}</h3>

      {isLoading ? (
        <p className={style.text}>Завантаження...</p>
      ) : results.length === 0 ? (
        <p className={style.text}>Немає даних</p>
      ) : (
        <ul className={style.list}>
          {results.map((item, index) => (
            <li key={item?.VariableId ?? index} className={style.item}>
              <b>{item?.Variable}:</b> {String(item?.Value)}
              {getDescription(item?.VariableId) && (
                <p className={style.desc}>{getDescription(item?.VariableId)}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default HistoryDetails;
