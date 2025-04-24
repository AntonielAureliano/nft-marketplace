import styles from './Banner.module.css';

import { Heading } from '../Heading';
import { Button } from '../Button';

export function Banner() {

    return (
        <>
            <div className={styles.BannerContainer}>
                <Heading>NFT Marketplace</Heading>
                <div className={styles.BannerBackground}>
                    <div className={styles.BannerText}>
                        <h1 className={styles.BannerTitle}>Discover, collect, and sell extraordinary NFTs</h1>
                        <p className={styles.BannerParagraph}>Enter in this creative world. Discover now the 
                            latest NFTs or start creating your own!</p>
                        <div className={styles.BannerButton}>
                            <Button>Discover now</Button>
                            <Button>Watch video</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}