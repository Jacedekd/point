import React, { Children } from 'react';
import styles from './Cards.module.css';
import arrow from '../../assets/images/arrow.svg';
import clock from '../../assets/images/time.svg';
import classNames from 'classnames';

function Cards({ show, title, desc, number, month }) {
    return (
        <div className={classNames(styles.cards, {
            [styles.dark] : show
        })}>
            <div className={styles.cardsTop}>
                <div className={classNames(styles.cardsСalendar, {
                    [styles.invers] : show
                })}>
                    <span className={styles.number}>{number}</span>
                    <span className={styles.month}>{month}</span>
                </div>
                <div className={classNames(styles.cardstitle, {
                    [styles.darktext] : show
                })}>{title}</div>
            </div>
            <div className={classNames(styles.desc, {
                [styles.darktext] : show
            })}>{desc}</div>
            <div className={styles.cardsBottom}>
                <div className={styles.learnMoreblock}>
                    <div className={styles.learnMore}>Learn More</div>
                    <img src={arrow} alt="стрелка" />
                </div>
                <div className={styles.clockBlock}>
                    <img src={clock} alt="часы" />
                    <div className={classNames(styles.time, {
                        [styles.darktext] : show
                    })}>10:00 AM - 2:00 PM</div>
                </div>
            </div>
        </div>
    )
}

export default Cards