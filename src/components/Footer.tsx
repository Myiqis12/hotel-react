import styles from "../styles/footer.module.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Footer() {
  return (<footer className={styles.footer}>
    <div className={styles.footerTop}>
        <div className={styles.footerColumnLogo}>
            <div className={styles.footerLogo}>
                <img src="assets/logo.svg" alt="Toxin Logo"/>
            </div>
            <p className={styles.footerDescription}>
                Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
            </p>
        </div>
        <div>
            <h4 className={styles.footerTitle}>НАВИГАЦИЯ</h4>
            <ul className={styles.footerList}>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>О нас</a></li>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Новости</a></li>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Служба поддержки</a></li>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Услуги</a></li>
            </ul>
        </div>
        <div>
            <h4 className={styles.footerTitle}>О НАС</h4>
            <ul className={styles.footerList}>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>О сервисе</a></li>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Наша команда</a></li>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Вакансии</a></li>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Инвесторы</a></li>
            </ul>
        </div>
        <div>
            <h4 className={styles.footerTitle}>СЛУЖБА ПОДДЕРЖКИ</h4>
            <ul className={styles.footerList}>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Соглашения</a></li>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Сообщества</a></li>
                <li className={styles.footerItem}><a href="#" className={styles.footerLink}>Связь с нами</a></li>
            </ul>
        </div>
        <div className={styles.footerColumnSubscribe}>
            <h4 className={styles.footerTitle}>ПОДПИСКА</h4>
            <p className={styles.footerText}>Получайте специальные предложения и новости сервиса</p>
            <form className={styles.footerForm}>
                <input type="email" className={styles.footerInput} placeholder="Email" required/>
                <button type="submit" className={styles.footerButton}><ArrowForwardIcon/></button>
            </form>
        </div>
    </div>
    <div className={styles.footerBottom}>
        <span className={styles.footerCopyright}>
            Copyright © 2018 Toxin отель. Все права защищены.
        </span>
        <div className={styles.footerSocials}>
            <a href="#"><img src="assets/twitter_icon.svg" alt="Twitter"/></a>
            <a href="#"><img src="assets/facebook_icon.svg" alt="Facebook"/></a>
            <a href="#"><img src="assets/instagram_icon.svg" alt="Instagram"/></a>
        </div>
    </div>
    <div className={styles.footerDivider}></div>
</footer>
)}