import styles from '../styles/GlobalStyles.module.css'
import Link from 'next/link'

export default function Quote() {
    const quotes = [
        ["fun game to make friends"],
        ["play anything build anything"],
        ["Hay!", "wafl"],
        ["e", "karbis"],
        //["flaky is hot", "Ragarnoky"],
        ["Rio wasn't here", "Rako"],
        //["PAKISTAN ZINDABAD", "Ragarnoky"],
        ["The future of Nervo is in our hands...", "kanimou"]
    ]
    let random = quotes[Math.floor(Math.random()*quotes.length)]
    return (
        <div>
            <p className={styles.defaultText}>"{random[0]}"</p>
            
            <p className={styles.defaultText}>- 
            <Link href={'/PersonInfo?name=' + random[1]} ><a className={styles.defaultLinkButton}>{random[1]}</a></Link>
            </p>
        </div>
    )
}
