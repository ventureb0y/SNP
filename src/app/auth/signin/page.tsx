'use client'

import Link from 'next/link'
import styles from './Signin.module.scss'
import { SignInUser } from '@/services/auth/signin'
import { useRouter } from 'next/navigation'
import { routes } from '@/routes/routes'
import setServerCookies from '@/services/auth/cookies'

const Signin = () => {
    const router = useRouter()
    const sendData = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const pass1 = e.target[1].value
        const req = await SignInUser(email, pass1)
            if (!req.error) {
                await setServerCookies(req.jwt)
                router.push(routes.main)
                return req
            }
            else {

            }
    }

    return (
        <section className={styles.signin}>
            <div className={styles.signin__container}>
                <form onSubmit={(e) => sendData(e)} className={styles.signin__body}>
                    <h5 className={styles.signin__title}>Войдите в аккаунт</h5>
                    <input placeholder='E-MAIL' type="text" className={styles.signin__input}/>
                    <input placeholder='ПАРОЛЬ' type="password" className={styles.signin__input}/>
                    <Link href={''} className={styles.signin__forgot}>Забыли пароль?</Link>
                    <button type='submit' className={styles.signin__button}>ВОЙТИ</button>
                </form>
            </div>
        </section>
    )
}

export default Signin