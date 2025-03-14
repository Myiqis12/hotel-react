import styles from "../styles/cancellation.module.css";

export function Cancellation() {
  return (
    <section className={styles.cancellation}>
    <h3 className={styles.cancellationTitle}>Отмена</h3>
    <p className={styles.cancellationText}>
        Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.
    </p>
</section>
  );
}
