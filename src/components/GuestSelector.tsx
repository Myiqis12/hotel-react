import { useState, useRef, useEffect } from "react";
import { ExpandMore } from "@mui/icons-material";
import styles from "../styles/guestSelector.module.css";

const MAX_GUESTS = {
  adults: 3,
  children: 2,
  infants: 2,
};

export default function GuestSelector() {
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current?.contains(event.target as Node) === false) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const totalGuests = guests.adults + guests.children + guests.infants;

  const handleChange = (type: keyof typeof guests, value: number) => {
    setGuests((prev) => ({ ...prev, [type]: value }));
  };

  const clearGuests = () => {
    setGuests({ adults: 1, children: 0, infants: 0 });
  };

  return (
    <div className={styles.guestSelector} ref={ref}>
      {/* Поле ввода (по клику открывает панель) */}
      <div className={styles.guestInputWrapper} onClick={() => setIsOpen(!isOpen)}>
        <input
          type="text"
          readOnly
          value={`${totalGuests} ${totalGuests === 1 ? "гость" : totalGuests < 5 ? "гостя" : "гостей"}`}
          className={styles.guestInput}
        />
        <ExpandMore className={styles.guestIcon} />
      </div>

      {/* Панель выбора гостей */}
      {isOpen && (
        <div className={styles.guestDropdown}>
          {Object.keys(guests).map((type) => (
            <div key={type} className={styles.guestRow}>
              <span className={styles.guestType}>
                {type === "adults" ? "ВЗРОСЛЫЕ" : type === "children" ? "ДЕТИ" : "МЛАДЕНЦЫ"}
              </span>
              <div className={styles.guestControls}>
                <button
                  type="button"
                  onClick={() => handleChange(type as keyof typeof guests, Math.max(0, guests[type as keyof typeof guests] - 1))}
                  disabled={guests[type as keyof typeof guests] === 0}
                  className={styles.guestButton}
                >
                  -
                </button>
                <span className={styles.guestNumber}>{guests[type as keyof typeof guests]}</span>
                <button
                  type="button"
                  onClick={() => handleChange(type as keyof typeof guests, guests[type as keyof typeof guests] + 1)}
                  disabled={guests[type as keyof typeof guests] >= MAX_GUESTS[type as keyof typeof MAX_GUESTS]}
                  className={styles.guestButton}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Кнопки */}
          <div className={styles.guestActions}>
            <button type="button" className={styles.clearButton} onClick={clearGuests}>ОЧИСТИТЬ</button>
            <button type="button" className={styles.applyButton} onClick={() => setIsOpen(false)}>ПРИМЕНИТЬ</button>
          </div>
        </div>
      )}
    </div>
  );
}
