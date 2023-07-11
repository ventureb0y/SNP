import { ImArrowRight2 } from 'react-icons/im'
import styles from './Feedback.module.scss'
import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import { email } from '@/config/email.adresses'

const sendData = (e) => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        connect: e.target.connect.value,
        issue: e.target.issue.value
    }

    const mailgun = new Mailgun(FormData)
    const client = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY })
    const message = {
        from: data.email,
        to: email.recepient,
        subject: 'Обращение',
        text: `${data.name} - ${data.issue}

Предпочтительный вид связи - ${data.connect}
Email - ${data.email}
Номер телефона - ${data.phone}`
    }
    client.messages.create(email.senderDomain, message)
    e.target.reset()
}

const Feedback = ({feedback_title, feedback_description}: {feedback_title: string, feedback_description: string}) => {
    return (
        <section className={styles.feedback}>
            <form onSubmit={(e) => sendData(e)} className={styles.feedback__container}>
                <h4 className={styles.feedback__title}>{feedback_title}</h4>
                <span className={styles.feedback__text}>{feedback_description}</span>
                <input name='name' placeholder='ИМЯ' type="text" className={styles.feedback__input}/>
                <input name='phone' placeholder='НОМЕР ТЕЛЕФОНА' type="phone" className={styles.feedback__input}/>
                <input name='email' placeholder='E-MAIL' type="email" className={styles.feedback__input}/>
                <input name='connect' placeholder='ПРЕДПОЧТИТЕЛЬНЫЙ ВИД СВЯЗИ' type="text" className={styles.feedback__input}/>
                <input name='issue' placeholder='ОПИШИТЕ СУТЬ ВОПРОСА' type="text" className={styles.feedback__input}/>
                <button type='submit' className={styles.feedback__button}>ОТПРАВИТЬ
                    <ImArrowRight2 className={styles.feedback__button_icon}/>
                </button>
                
            </form>
        </section>
    )
}

export default Feedback