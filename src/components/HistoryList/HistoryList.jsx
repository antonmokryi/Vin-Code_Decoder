import React from 'react'
import { useHistoryStore } from '../../store/useHistoryList'
import HistoryItem from './HistoryItem/HistoryItem'
import style from "./historyList.module.css"

function HistoryList() {
    const {history} = useHistoryStore()
    // console.log(history)
  return (
    <div className="container">
        <section className={style.history}>
        <h3 className={style.history__title}>Останні запити:</h3>
        <ul className={style.historyList}>
            {history.length 
                ? history.slice(0, 3).map((item, index) => (<HistoryItem vin={item} key={index}/>))
                : "Історія запитів пуста"
            }
        </ul>
    </section>
    </div>
  )
}

export default HistoryList
