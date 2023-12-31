import React from 'react'
import styles from './Hero.module.css';
import {AiOutlineSearch} from 'react-icons/ai';

function Hero() {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label>Here</label>
          <input className={styles.input_text} type='text' placeholder='Search location' />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type='date' />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type='date' />
        </div>
        <div className={styles.search_btn}>
          <AiOutlineSearch size={25} className={styles.icon}/>
          <button className={styles.btn}>Search for car</button> 
        </div>
      </form>
    </div>
  )
}
export default Hero
