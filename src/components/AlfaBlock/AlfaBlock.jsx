import React from 'react';
import Cards from '../Cards/Cards';
import styles from './AlfaBlock.module.css';
import Toggler from '../../UI/Toggler/Toggler';
import { useState } from 'react';
import classNames from 'classnames';

function AlfaBlock() {


    const [show, setShow] = useState(false);

    const click = () => {
        setShow(true);
        console.log('log');
        document.body.classList.add('dark');

        if (show === true) {
            setShow(false);
            document.body.classList.remove('dark');
        }
    }

    const classes = classNames('togglerspan',
    {
        'conditional': show
    }
)

    return (
        <div className={styles.alfablock}>
            <Toggler togglerspan={classes} click={click}  />
            <div className={classNames(styles.title, {
                [styles.dark] : show
            })}>Upcoming University Events</div>
            <div className={classNames(styles.description, {
                [styles.dark] : show
            })}>Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult.</div>
            <div className={styles.cardsGroup}>
                <Cards 
                title={'Macquarie University, Sydney, Australia'}
                desc={'Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.'}
                number={23}
                month={'Dec'}
                show={show} />
                <Cards 
                title={'Federation University, Australia'}
                desc={'Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur dolorem dicta accusantium fugiat.'}
                number={17}
                month={'Oct'}
                show={show} />
            </div>
        </div>
    )
}

export default AlfaBlock