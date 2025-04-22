import styles from './Component1.module.css';

import { Heading } from './Heading';
import Btn1 from './Button/Btn1';

function Component1() {

    return (
        <>
            <div className={styles.bgContainer}>
                <Heading>NFT Marketplace</Heading>
                <div className={styles.bgComponent1}>
                    <div className={styles.textContainer1}>
                        <h1 className={styles.titleContainer1}>Discover, collect, and sell extraordinary NFTs</h1>
                        <p className={styles.paragraphContainer1}>Enter in this creative world. Discover now the 
                            latest NFTs or start creating your own!</p>
                        <div className={styles.btnsContainer1}>
                            <Btn1>Discover now</Btn1>
                            <Btn1>Watch video</Btn1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component1;