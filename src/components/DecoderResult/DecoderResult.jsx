import React from "react";
import { useVinStore } from "../../store/useVinStore";
import style from "./DecoderResult.module.css";

export const DecoderResult = () => {
  const { vinStore } = useVinStore();
  const results = Array.isArray(vinStore?.Results) ? vinStore.Results : [];
  const message = vinStore?.Message;
  const searchVin = vinStore?.SearchCriteria;

  return (
    <div className="container">
      <section className={style.resultSection}>
      <h3 className={style.resultTitle}>Decoder result</h3>
      {searchVin && <p className={style.resultText}>{searchVin}</p>}
      {message && <p className={style.resultText}>{message}</p>}

      {results.length === 0 ? (
        <p className={style.resultEmpty}>Немає даних</p>
      ) : (
        <ul className={style.resultList}>
          {results.map((item, index) => (
            <li key={item?.VariableId ?? index} className={style.resultItem}>
              <b>{item?.Variable}:</b> {String(item?.Value)}
            </li>
          ))}
        </ul>
      )}
    </section>
    </div>
  );
};
