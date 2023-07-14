import { ImArrowRight2 } from 'react-icons/im'
import styles from './Feedback.module.scss'
import FormData from 'form-data'
import Mailgun from 'mailgun.js'
import { email } from '@/config/email.adresses'
import { api } from '@/routes/api'
import Link from 'next/dist/client/link'

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
                <input required name='name' placeholder='ИМЯ' type="text" className={styles.feedback__input}/>
                <input required name='phone' placeholder='НОМЕР ТЕЛЕФОНА' type="phone" className={styles.feedback__input}/>
                <input required name='email' placeholder='E-MAIL' type="email" className={styles.feedback__input}/>
                <input required name='connect' placeholder='ПРЕДПОЧТИТЕЛЬНЫЙ ВИД СВЯЗИ' type="text" className={styles.feedback__input}/>
                <input required name='issue' placeholder='ОПИШИТЕ СУТЬ ВОПРОСА' type="text" className={styles.feedback__input}/>
                <div className={styles.feedback__checkbox}>
                    <input required name='check' type="checkbox" className={styles.feedback__check}/>
                    <label htmlFor="check">Я согласен(на) с <Link className={styles.feedback__checkbox_link} target='_blank' href={api.getPolicy}>условиями обработки</Link> персональных данных</label>
                </div>
                <button type='submit' className={styles.feedback__button}>ОТПРАВИТЬ
                    <ImArrowRight2 className={styles.feedback__button_icon}/>
                </button>
                
            </form>
        </section>
    )
}

export default Feedback