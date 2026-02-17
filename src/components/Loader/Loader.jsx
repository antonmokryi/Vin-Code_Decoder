import React from 'react'
import style from "./Loader.module.css"

function Loader() {
  return (
    <section className={style.loaderSection}>
        <span style={{"animationDelay": "0s"}}>A</span>
        <span style={{"animationDelay": "0.2s"}}>B</span>
        <span style={{"animationDelay": "0.4s"}}>P</span>
    </section>
  )
}

export default Loader