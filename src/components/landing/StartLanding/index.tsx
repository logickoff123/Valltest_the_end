import css from "./startLanding.module.css";
import Image from "next/image";

export function StartLanding() {
    return (
        <div className={css.container}>
            <div className={css.contentWrapper}>
                <div className={css.content}>
                    <span className={css.title}>Сделай тест</span>

                    <span className={css.highlight}>за 1 минуту</span>

                    <div className={css.subtitle}>
                        С ПОМОЩЬЮ <span className={css.aiHighlight}>AI</span> ГЕНЕРАТОРА
                    </div>
                    
                    {/* Обернул в div и убрал лишние span */}
                    <div className={css.fiveMinutesBlock}>
                        <div className={css.title1}>Сделай тест за</div>
                        <div className={css.title1}> 5 минут</div>
                    </div>
                </div>
                
                <div className={css.imageContainer}>
                    <Image src="/landing/start.svg" alt="Тест за 1 минуту" width={1200} height={1200} className={css.image} priority/>
                </div>
            </div>
        </div>
    );
}