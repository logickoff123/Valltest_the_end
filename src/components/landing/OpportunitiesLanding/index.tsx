"use client";

import Image from 'next/image';
import styles from './opportunitiesLanding.module.css';

export function OpportunitiesLanding() {
    return (
        <div className={styles.container}>
            <p id='opportunities' className={`${styles.scrollAnchor} scroll-mt-[80px]`}>Возможности</p> 
            <p className={styles.title}>Сервис для прокачки знаний</p>
            <div className={styles.cardsContainer}>

                <div className={`${styles.card} ${styles.greenCard}`}>
                    <div className={styles.cardHeader}>
                        <Image src="landing/CreateTest.svg" width={48} height={48} alt="Create Test"/>
                        <p className={`${styles.cardTitle} ${styles.blackText}`}>Создавайте тесты</p>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={`${styles.cardDescription} ${styles.blackText}`}>
                            Добавляйте вопросы, меняйте их и быстро настраивайте с помощью инструментов конструктора
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Image src="landing/GenAI.svg" width={48} height={48} alt="GenAI"/>
                        <p className={styles.cardTitle}>Генерация ИИ</p>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardDescription}>
                            Искуственный интелект создает тест за Вас на любую выбранную тему
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Image src="landing/LibTest.svg" width={48} height={48} alt="Library"/>
                        <p className={styles.cardTitle}>Библиотека тестов</p>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardDescription}>
                            На сегодняшний день мы имеем бибилиотеку тестов по математике <br />
                            русскому, английскому и истории!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}