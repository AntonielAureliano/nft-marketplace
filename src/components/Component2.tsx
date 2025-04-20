
import styles from './Component2.module.css';
import imgCard from '../assets/imgCard1.png';
import Btn2 from './Btn2';

function Component2() {

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
                    <Btn2 />
                </div>
            </div>
        </>
    )
}

export default Component2;