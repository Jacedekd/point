import React from 'react';
import styles from './Cards.module.css';
import arrow from '../../assets/images/arrow.svg';
import clock from '../../assets/images/time.svg';

function Cards() {
    return (
        <div className={styles.cards}>
            <div className={styles.cardsTop}>
                <div className={styles.cardsСalendar}>
                    <span className={styles.number}>23</span>
                    <span className={styles.month}>Des</span>
                </div>
                <div className={styles.cardstitle}>Macquarie University, Sydney, Australia</div>
            </div>
            <div className={styles.desc}>Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.</div>
            <div className={styles.cardsBottom}>
                <div className={styles.learnMoreblock}>
                    <div className={styles.learnMore}>Learn More</div>
                    <img src={arrow} alt="стрелка" />
                </div>
                <div className={styles.clockBlock}>
                    <img src={clock} alt="часы" />
                    <div className={styles.time}>10:00 AM - 2:00 PM</div>
                </div>
            </div>
        </div>
    )
}

export default Cards