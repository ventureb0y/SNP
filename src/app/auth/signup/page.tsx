'use client'
import Link from 'next/link'
import styles from './signup.module.scss'
import { SignUpUser } from '@/services/auth/signup'
import setServerCookies from '@/services/auth/cookies'

const SignUp = () => {

    const isValid = async (e: FormDataEvent) => {
        e.preventDefault()
        const email = e.target[0]?.value
        const pass1 = e.target[1]?.value
        const pass2 = e.target[2]?.value

        if (pass1 == pass2) {
            const req = await SignUpUser(email, pass1)
            console.log(req)
            if (!req.error) {
                await setServerCookies(req.jwt)
                return req
            }
            else {
                console.log(req.error.status)
                return req.error.status
            }
        }
        else {
            return "Passwords must be similar"
        }
    }

    return (
        <section className={styles.signup}>
            <div className={styles.signup__container}>
                <form onSubmit={(e) => {isValid(e)}} className={styles.signup__body}>
                {/* <form action={sendData} className={styles.signup__body}> */}
                    <h5 className={styles.signup__title}>Создайте аккаунт</h5>
                    <input name='email' placeholder='E-MAIL' type="text" className={styles.signup__input}/>
                    <input name='pass' placeholder='ПАРОЛЬ' type="password" className={styles.signup__input}/>
                    <input name='pass2' placeholder='ПОВТОРИТЕ ПАРОЛЬ' type="password" className={styles.signup__input}/>
                    <Link href={''} className={styles.signup__forgot}>Уже есть аккаунт? Войти</Link>
                    <button type='submit' className={styles.signup__button}>ВОЙТИ</button>
                </form>
            </div>
        </section>
    )
}

export default SignUp