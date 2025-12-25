import Image from "next/image"
import styles from "./roadmapLanding.module.css"

export function RoadmapLanding() {
    return (
        <div className={styles.container}>
            <p className={styles.planTitle}>Наша команда</p>
            
            <div className={styles.imageContanier2}>
                <Image src="/landing/u34.png" width={0} height={0} sizes="80%" alt="dreamtem" className={styles.roadmapImage}/>
                <Image src="/landing/u123.png" width={0} height={0} sizes="80%" alt="dreamteam" className={styles.roadmapImageMobile}/>
            </div>

            {/* Десктопная версия лого и текста */}
            <div className={styles.imageContanier3}>
                <Image src="/landing/logo666.png" width={0} height={0} sizes="90%" alt="fond" className={styles.roadmapImage}/>
            </div>

            {/* Мобильная версия лого и текста */}
            <div className={styles.mobileLogoContainer}>
                <div className={styles.mobileLogoWrapper}>
                    <Image 
                        src="/landing/image_39.png" 
                        width={0} 
                        height={0} 
                        sizes="80%"
                        alt="fond2" 
                        className={styles.mobileLogoImage}
                    />
                </div>
                <div className={styles.mobileLogoText}>
                    <p className={styles.mobileLogoDescription}>
                        Проект выполнен при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап» федерального проекта «Платформа университетского технологического предпринимательства». </p>
                </div>
            </div>
        </div>
    )
}
