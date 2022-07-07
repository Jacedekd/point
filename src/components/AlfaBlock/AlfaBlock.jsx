import React from 'react';
import Cards from '../Cards/Cards';
import styles from './AlfaBlock.module.css';

function AlfaBlock() {
    return (
        <div className={styles.alfablock}>
            <div className={styles.title}>Upcoming University Events</div>
            <div className={styles.description}>Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.</div>
            <div className={styles.cardsGroup}>
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default AlfaBlock