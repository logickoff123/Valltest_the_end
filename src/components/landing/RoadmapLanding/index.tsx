import Image from "next/image"
import styles from "./roadmapLanding.module.css"

export function RoadmapLanding() {
    return (
        <div className={styles.container}>
            <p id="roadmap" className={styles.roadmapTitle}>Дорожная карта</p>
            <p className={styles.planTitle}>Наш стратегический план</p>

            <div className={styles.imageContainer}>
                <Image src="/landing/Roadmap.svg" width={0} height={0} sizes="80%" alt="Roadmap" className={styles.roadmapImage}/>
                <Image src="/landing/Roadmap2.svg" width={0} height={0} sizes="100%" alt="Roadmap mobile" className={styles.roadmapImageMobile}/>
            </div>
            
            <div className={styles.imageContanier2}>
                <Image src="/landing/1all.png" width={0} height={0} sizes="80%" alt="dreamtem" className={styles.roadmapImage}/>
                <Image src="/landing/eeeee.png" width={0} height={0} sizes="80%" alt="dreamteam" className={styles.roadmapImageMobile}/>
            </div>

            {/* Десктопная версия лого и текста */}
            <div className={styles.imageContanier3}>
                <Image src="/landing/logo.png" width={0} height={0} sizes="90%" alt="fond" className={styles.roadmapImage}/>
            </div>

            {/* Мобильная версия лого и текста */}
            <div className={styles.mobileLogoContainer}>
                <div className={styles.mobileLogoWrapper}>
                    <Image 
                        src="/landing/logo42.png" 
                        width={0} 
                        height={0} 
                        sizes="80%"
                        alt="fond2" 
                        className={styles.mobileLogoImage}
                    />
                </div>
                <div className={styles.mobileLogoText}>
                    <p className={styles.mobileLogoDescription}>
                        Проект создан при проддержке Федерального государсвенного бюджетного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" Федерального проекта "Платформа университесткого технологического предпринимательства" </p>
                </div>
            </div>
        </div>
    )
}
