import React from "react";
import { SearchIcon } from "./SearchIcon/SearchIcon";
import style from "../VinForm/vinForm.module.css";
import { useState } from "react";
import { useHistoryStore } from "../../store/useHistoryList";
import Loader from "../Loader/Loader";
import { getVinCode } from "../../api/vinCodeApi";
import { useVinStore } from "../../store/useVinStore";

export const VinForm = () => {
  const {addHistory, validateError} = useHistoryStore()
  const {addToVinStore} = useVinStore()
  const [vin, setvin] = useState("")
  const [isLoading, setisLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = addHistory(vin) === ""
    if (!isValid) return

    setisLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      const data = await getVinCode(vin)
      addToVinStore(data)
    } finally {
      setisLoading(false)
      setvin("")
    }
  }
  return (
    <section className={style.vinSection}>
      <div className="container">
        <h1 className={style.vinFormTitle}>VIN Code Decoder</h1>
        <p className={style.vinSubtitle}>Перевірте VIN за кілька секунд</p>
        <form className={style.vinForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Введіть VIN код"
            className={style.vinForm__inp}
            value={vin}
            onChange={(e) => setvin(e.target.value)}
          />
          <button className={style.vinForm__submit} type="submit">
            <SearchIcon />
          </button>
        </form>
        <span
          className={`${style.vinSection__error} ${!validateError ? style.vinSection__errorHidden : ""}`}
          aria-live="polite"
        >
          {validateError || "\u00A0"}
        </span>
      </div>

      {isLoading && <Loader/>}
    </section>
  );
};
