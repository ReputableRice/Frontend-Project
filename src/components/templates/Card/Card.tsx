import styles from './Card.module.css'
import Image from 'react'
import CardBottom from '../../organisms/CardBottom/CardBottom'

export default function Card() {
    return (
        <div className={styles.cardRelative}>
            <div className={styles.cardContainer}>
                <img className={styles.cardImage} src='https://placehold.co/600x400' />
                <CardBottom />
            </div>
        </div>
    )
}