import styles from "../styles/roomDetails.module.css";
import { Reviews } from "./Reviews";

const roomDetails = [
  {
    icon: "assets/emoticon.svg",
    title: "Комфорт",
    description: "Шумопоглощающие стены"
  },
  {
    icon: "assets/buildingicon.svg",
    title: "Удобство",
    description: "Окно в каждой из спален"
  },
  {
    icon: "assets/whatshot.svg",
    title: "Уют",
    description: "Номер оснащён камином"
  }
];

export function RoomDetails() {
  return (
    <section className={styles.roomDetails}>
      <h2 className={styles.roomDetailsTitle}>Сведения о номере</h2>
      <ul className={styles.roomDetailsList}>
        {roomDetails.map((detail, index) => (
          <li key={index} className={index < 2 ? styles.roomDetailsItemBorder : styles.roomDetailsItem}>
            <img src={detail.icon} className={styles.roomDetailsIcon} alt={detail.title} />
            <div className={styles.roomDetailsInfo}>
              <h3 className={styles.roomDetailsSubtitle}>{detail.title}</h3>
              <p className={styles.roomDetailsDescription}>{detail.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}