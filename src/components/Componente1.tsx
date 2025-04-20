import styles from './Componente1.module.css';

import { Titulo } from './Title';
import Btn1 from './Btn1';

function Componente1() {

    return (
        <>
            <div className={styles.bgContainer}>
                <Titulo>NFT Marketplace</Titulo>
                <div className={styles.bgComponente1}>
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

export default Componente1;