import styles from "../styles/gallery.module.css";

const images = [
  { src: "assets/image.png", alt: "Большое изображение" },
  { src: "assets/image2.png", alt: "Маленькое изображение 2" },
  { src: "assets/image3.png", alt: "Маленькое изображение 3" }
];

export function Gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <div key={index} className={styles.galleryItem}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
  );
}
