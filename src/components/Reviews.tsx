import styles from "../styles/reviews.module.css";
import { useState } from "react";

interface Review {
  id: number;
  avatar: string;
  name: string;
  date: string;
  text: string;
  likes: number;
  liked: boolean;
}

export function Reviews() {
  // Массив отзывов (в будущем можно загружать из БД)
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      avatar: "assets/user1.jpg",
      name: "Увувуевуевуе Эниетуенвуевуе Угбемугбем Осас",
      date: "5 дней назад",
      text: "Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.",
      likes: 200,
      liked: false
    },
    {
      id: 2,
      avatar: "assets/user2.png",
      name: "Оля Тыква",
      date: "Неделю назад",
      text: "Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент.",
      likes: -150,
      liked: false
    }
  ]);

  // Функция обработки лайка
  const toggleLike = (id: number) => {
    setReviews(reviews.map(review => 
      review.id === id 
        ? { ...review, likes: review.liked ? review.likes - 1 : review.likes + 1, liked: !review.liked } 
        : review
    ));
  };

  return (
    <section className={styles.reviews}>
      <div className={styles.reviewsHeader}>
        <h2 className={styles.reviewsTitle}>Отзывы посетителей номера</h2>
        <span className={styles.reviewsCount}>{reviews.length} отзыва</span>
      </div>

      <ul className={styles.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.reviewsItem}>
            <div className={styles.reviewsAvatarBlock}>
              <img className={styles.reviewsAvatar} src={review.avatar} alt={review.name} />
              <span 
                className={`${styles.reviewsIcon} ${review.liked ? styles.liked : ""}`} 
                onClick={() => toggleLike(review.id)}
              >
                {review.liked ? "♥" : "♡"} {review.likes}
              </span>
            </div>
            <div className={styles.reviewsContent}>
              <div className={styles.reviewsName}>{review.name}</div>
              <div className={styles.reviewsDate}>{review.date}</div>
              <p className={styles.reviewsText}>{review.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
