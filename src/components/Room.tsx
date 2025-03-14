import { RoomDetails } from "./RoomDetails";
import { RoomImpressions } from "./RoomImpressions";
import { BookingForm } from "./BookingForm";
import styles from "../styles/room.module.css";
import { Reviews } from "./Reviews";

const items = [Reviews, BookingForm, RoomDetails, RoomImpressions]

export function Room() {
  return (
      <div className={styles.roomPageContainer}>
        {items.map((Item,index) => (
          <div key={index} className={styles.roomItem}>
            <Item/>
          </div>
        ))}
      </div>
    );
}
