
import styles from './Card.module.css';
import imgCard from '../../assets/imgCard1.png';
import { Button } from '../Button';

export function Card() {

    return (
        <>
            <div className={styles.container}>
                <div>
                    <img className={styles.image} src={imgCard} alt="" />
                </div>
                <div className={styles.contentText}>
                    <h3 className={styles.contentTitle}>Abstract Colors</h3>
                    <p className={styles.tag}>By Esthera Jackson</p>
                </div>
                <div className={styles.contentBottom}>
                    <span className={styles.bid}>Current Bid: 0.91 ETH</span>
                    <Button button='solid'>Place Bid</Button>
                </div>
            </div>
        </>
    )
}
