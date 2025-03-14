import { useState } from "react";
import styles from "../styles/roomImpressions.module.css";

interface Impression {
  label: string;
  colorGradient: string;
  color: string;
  votes: number;
}

const roomImpressions: Impression[] = [
  { label: "Великолепно", votes: 110, colorGradient: "yellow", color: "#FFE39C" },
  { label: "Хорошо", votes: 80, colorGradient: "green", color: "#6FCF97" },
  { label: "Удовлетворительно", votes: 60, colorGradient: "primary", color: "#BC9CFF" },
  { label: "Разочарован", votes: 10, colorGradient: "gray", color: "#909090" }
];

export function RoomImpressions() {
  const [impressions] = useState(roomImpressions);

  const totalVotes = impressions.reduce((acc, curr) => acc + curr.votes, 0);

  const getDegree = (votes: number): number => {
    return Math.round((votes / totalVotes) * 360);
  };

  let startAngle = 0; // Начальный угол

  return (
    <section className={styles.roomImpressions}>
      <h2 className={styles.roomImpressionsTitle}>Впечатления от номера</h2>
      <div className={styles.roomImpressionsContent}>

        {/* Кольцевая диаграмма */}
        <div
          className={styles.circularChart}
          style={{
            background: `conic-gradient(
              ${impressions.map(impression => {
                const endAngle = startAngle + getDegree(impression.votes);
                const segment = `${impression.color} ${startAngle}deg ${endAngle}deg`;
                startAngle = endAngle;
                return segment;
              }).join(", ")}
            )`
          }}
        >
          <div className={styles.chartCenter}>
            <span className={styles.chartValue}>{totalVotes}</span>
            <span className={styles.chartText}>голосов</span>
          </div>
        </div>

        {/* Список оценок */}
        <ul className={styles.roomImpressionsList}>
          {impressions.map((impression, index) => (
            <li key={index} className={styles.roomImpressionsItem}>
              <span
                className={styles.roomImpressionsDot}
                style={{ background: `var(--${impression.colorGradient.toLowerCase()}-gradient)` }}
              ></span>
              {impression.label}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
