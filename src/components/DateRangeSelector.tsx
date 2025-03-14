import { useState, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "../styles/dateRangeSelector.module.css";
import { ru } from "date-fns/locale";
import { format } from "date-fns";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const customRu = {
  ...ru,
  localize: {
    ...ru.localize,
    day: (index: number, options?: { width?: "narrow" | "abbreviated" | "wide" }) => {
      const day = ru.localize.day(index as any, options);
      return day.charAt(0).toUpperCase() + day.slice(1);
    },
  },
};

interface DateRangeSelectorProps {
  onChange: (startDate: Date, endDate: Date) => void;
}

export function DateRangeSelector({ onChange }: DateRangeSelectorProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [startDate, setStartDate] = useState<Date | null>(tomorrow);
  const [endDate, setEndDate] = useState<Date | null>(new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000));
  const [isOpen, setIsOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);

  const calendarRef = useRef<HTMLDivElement | null>(null);

  const formatDate = (date: Date) =>
    date.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });

  const handleSelect = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;
    if (!startDate || !endDate) return;

    setTempStartDate(startDate); // Сохранение выбранных дат во временные стейты
    setTempEndDate(endDate);

    setTimeout(() => {
      document.querySelectorAll(".rdrDayHovered").forEach((el) => {
        el.classList.remove("rdrDayHovered");
      });
    }, 10);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current?.contains(event.target as Node) === false) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (startDate && endDate && startDate.getTime() === endDate.getTime()) {
      const newEndDate = new Date(startDate);
      newEndDate.setDate(newEndDate.getDate() + 1);
      setEndDate(newEndDate);
      onChange(startDate, newEndDate);
    }
  }, [startDate, endDate]);

  // Новый рендер месяца и года
  const renderMonthAndYear = (focusedDate: any, changeShownDate: any) => {
    return (
      <div className={styles.navContainer}>
        <ArrowBackIcon
          className={styles.navButton}
          onClick={() => changeShownDate(-1, "monthOffset")}
        />
        <span className={styles.navText}>
          {format(focusedDate, "LLLL yyyy", { locale: ru }).charAt(0).toUpperCase() +
            format(focusedDate, "LLLL yyyy", { locale: ru }).slice(1)}
        </span>
        <ArrowForwardIcon
          className={styles.navButton}
          onClick={() => changeShownDate(1, "monthOffset")}
        />
      </div>
    );
  };

  return (
    <div className={styles.dateRangeContainer} ref={calendarRef}>
      <div className={styles.inputGroup} onClick={() => setIsOpen(true)}>
        <label className={styles.dateRangeLabel}>ПРИБЫТИЕ</label>
        <div className={styles.dateForm}>
        <input type="text" readOnly className={styles.dateInput} value={startDate ? formatDate(startDate) : ""} />
        <ExpandMoreIcon className={styles.expandMoreIcon}/>
        </div>
      </div>

      <div className={styles.inputGroup} onClick={() => setIsOpen(true)}>
        <label className={styles.dateRangeLabel}>ВЫЕЗД</label>
        <div className={styles.dateForm}>
        <input type="text" readOnly className={styles.dateInput} value={endDate ? formatDate(endDate) : ""} />
        <ExpandMoreIcon className={styles.expandMoreIcon}/>
        </div>
      </div>

      {isOpen && (
        <div className={styles.dateRangeWrapper}>
          <DateRange
            ranges={[
              {
                startDate: tempStartDate, 
                endDate: tempEndDate,
                key: "selection",
              }
            ]}            
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            minDate={tomorrow}
            locale={customRu}
            monthDisplayFormat="LLLL yyyy"
            weekdayDisplayFormat="EEEEEE"
            navigatorRenderer={renderMonthAndYear} 
            showMonthAndYearPickers={false} 
          />
          <div className={styles.buttonContainer}>
            <button
              className={styles.clearButton}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setTempStartDate(tomorrow);
                setTempEndDate(new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000));
              }}
            >
              ОЧИСТИТЬ
            </button>
            <button
              className={styles.applyButton}
              onClick={() => {
                setStartDate(tempStartDate);
                setEndDate(tempEndDate);
                onChange(tempStartDate!, tempEndDate!);
                setIsOpen(false);
              }}
            >
              ПРИМЕНИТЬ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
