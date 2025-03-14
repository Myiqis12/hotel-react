import styles from "../styles/rules.module.css";

export function Rules() {
  return (
    <section className={styles.rules}>
    <h3 className={styles.rulesTitle}>Правила</h3>
    <ul className={styles.rulesList}>
        <li className={styles.rulesItem}><span className={styles.rulesItemDot}></span>Нельзя с питомцами</li>
        <li className={styles.rulesItem}><span className={styles.rulesItemDot}></span>Без вечеринок и мероприятий</li>
        <li className={styles.rulesItem}><span className={styles.rulesItemDot}></span>Время прибытия — после 13:00, а выезд до 12:00</li>
    </ul>
</section>
  );
}
