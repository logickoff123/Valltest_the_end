"use client";

import Image from 'next/image';
import styles from './opportunitiesLanding.module.css';

export function OpportunitiesLanding() {
    // Убираем все handleClick функции и хук useRouter

    return (
        <div className={styles.container}>
            <p id='opportunities' className={`${styles.scrollAnchor} scroll-mt-[80px]`}>Возможности</p> 
            <p className={styles.title}>Сервис для прокачки знаний</p>
            <div className={styles.buttonsContainer}>

                <button className={`${styles.button} ${styles.greenButton}`}>
                    <div className={styles.buttonHeader}>
                        <Image src="landing/CreateTest.svg" width={48} height={48} alt="Create Test"/>
                        <p className={`${styles.buttonTitle} ${styles.blackText}`}>Создавайте тесты</p>
                    </div>
                    <div className={styles.buttonContent}>
                        <div className={`${styles.buttonDescription} ${styles.blackText}`}>
                            Добавляйте вопросы, меняйте их и быстро настраивайте с помощью инструментов конструктора
                        </div>
                    </div>
                </button>

                <button className={styles.button}>
                    <div className={styles.buttonHeader}>
                        <Image src="landing/GenAI.svg" width={48} height={48} alt="GenAI"/>
                        <p className={styles.buttonTitle}>Генерация ИИ</p>
                    </div>
                    <div className={styles.buttonContent}>
                        <div className={styles.buttonDescription}>
                            Искуственный интелект создает тест за Вас на любую выбранную тему
                        </div>
                    </div>
                </button>

                <button className={styles.button}>
                    <div className={styles.buttonHeader}>
                        <Image src="landing/LibTest.svg" width={48} height={48} alt="Library"/>
                        <p className={styles.buttonTitle}>Библиотека тестов</p>
                    </div>
                    <div className={styles.buttonContent}>
                        <div className={styles.buttonDescription}>
                            На сегодняшний день мы имеем бибилиотеку тестов по математике <br />
                            русскому, английскому и истории!
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}