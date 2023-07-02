import { ImArrowRight2 } from 'react-icons/im'
import styles from './Feedback.module.scss'


const Feedback = ({feedback_title, feedback_description}: {feedback_title: string, feedback_description: string}) => {
    return (
        <section className={styles.feedback}>
            <div className={styles.feedback__container}>
                <h4 className={styles.feedback__title}>{feedback_title}</h4>
                <span className={styles.feedback__text}>{feedback_description}</span>
                <input placeholder='ИМЯ' type="text" className={styles.feedback__input}/>
                <input placeholder='НОМЕР ТЕЛЕФОНА' type="text" className={styles.feedback__input}/>
                <input placeholder='E-MAIL' type="text" className={styles.feedback__input}/>
                <input placeholder='ПРЕДПОЧТИТЕЛЬНЫЙ ВИД СВЯЗИ' type="text" className={styles.feedback__input}/>
                <input placeholder='ОПИШИТЕ СУТЬ ВОПРОСА' type="text" className={styles.feedback__input}/>
                <button className={styles.feedback__button}>ОТПРАВИТЬ
                <ImArrowRight2 className={styles.feedback__button_icon}/></button>
            </div>
        </section>
    )
}

export default Feedback