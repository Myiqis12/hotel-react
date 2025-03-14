import { useState } from "react";
import styles from "../styles/header.module.css";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAgreementsOpen, setIsAgreementsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Логотип */}
      <div className={styles.logo}>
        <a href="/">
          <img src="assets/logo.svg" alt="Логотип" />
        </a>
      </div>

      {/* Навигация */}
      <nav className={styles.nav}>
        <a href="#">О нас</a>

        {/* Выпадающее меню "Услуги" */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <div className={styles.dropdownToggle}>
            <a href="#">Услуги</a>
            <img src="assets/expand_more.png" alt="Список" />
          </div>
          {isServicesOpen && (
            <div className={styles.dropdownContent}>
              <a href="#">Личный водитель</a>
              <a href="#">Гид</a>
            </div>
          )}
        </div>

        <a href="#">Вакансии</a>
        <a href="#">Новости</a>

        {/* Выпадающее меню "Соглашения" */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setIsAgreementsOpen(true)}
          onMouseLeave={() => setIsAgreementsOpen(false)}
        >
          <div className={styles.dropdownToggle}>
            <a href="#">Соглашения</a>
            <img src="assets/expand_more.png" alt="Список" />
          </div>
          {isAgreementsOpen && (
            <div className={styles.dropdownContent}>
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Пользовательское соглашение</a>
            </div>
          )}
        </div>
      </nav>

      {/* Кнопки авторизации */}
      <div className={styles.authButtons}>
        <a href="#" className={styles.btnOutline}>
          ВОЙТИ
        </a>
        <a href="#" className={styles.btnGradient}>
          ЗАРЕГИСТРИРОВАТЬСЯ
        </a>
      </div>
    </header>
  );
}
