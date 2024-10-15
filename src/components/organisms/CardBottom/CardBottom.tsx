import styles from '../../templates/Card/Card.module.css'

export default function CardBottom() {
    return(
        <div className={styles.cardInformation}>
        <div className={styles.cardNameContainer}>
            <img className={styles.cardProfile} src='https://placehold.co/600x400'></img>
            <div className={styles.cardName}>
                John Doe
            </div>
        </div>
        <div className={styles.cardLine}></div>
        <p className={styles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec.
        </p>
    </div>
    )
}