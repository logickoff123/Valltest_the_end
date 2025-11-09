import Image from "next/image"
import styles from "./footerLanding.module.css"

export function FooterLanding() {
    return (
        <footer className={styles.footer}>
            <hr className={styles.divider} />

            <div className={styles.content}>
                <Image src="/landing/sampleLogo.svg" width={144} height={35} alt="Логотип компании" />

                <div className={styles.contactInfo}>
                    <div className={styles.contactRow}>
                        <p className={styles.contactItem}>ООО "ДОЛТЕСТ"</p>
                        <p className={styles.contactItem}>Email: vallts.company@gmail.com</p>
                        <p className={styles.contactItem}>Телефон: +7(918)529-67-53</p>
                    </div>
                    
                    <p className={`${styles.contactItem} ${styles.fullWidth}`}>
                        Юр. адрес: 344072, Ростовская область, г Ростов-На-Дону, ул Вересаева, д. 101/6 стр. 2, кв. 105
                    </p>
                </div>
            </div>
        </footer>
    )
}