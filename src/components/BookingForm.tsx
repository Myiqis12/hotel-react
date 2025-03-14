import styles from "../styles/bookingForm.module.css";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DateRangeSelector } from "./DateRangeSelector";
import GuestSelector from "./GuestSelector";

interface Booking {
    number: number;
    price: number;
    discount: number;
    addPrice: number;
}

const bookingForm: Booking[] = [
    {
        number: 1337,
        price: 9990,
        discount: -2179,
        addPrice: 300,
    },
];

export function BookingForm() {
    const getTomorrow = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow;
    };

    const [arrivalDate, setArrivalDate] = useState(getTomorrow());
    const [departureDate, setDepartureDate] = useState(new Date(getTomorrow().setDate(getTomorrow().getDate() + 1)));

    const getDaysCount = () => {
        if (!arrivalDate || !departureDate) return 1;
        const start = new Date(arrivalDate);
        const end = new Date(departureDate);
        const diffTime = end.getTime() - start.getTime();
        return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    };

    const fullPrice = bookingForm[0].price * getDaysCount();
    const totalPrice = fullPrice + bookingForm[0].discount + bookingForm[0].addPrice;
    const [isDiscountInfoOpen, setIsDiscountInfoOpen] = useState(false);
    const [isAddServicesInfoOpen, setIsAddServicesInfoOpen] = useState(false);

    return (
        <section className={styles.bookingForm}>
            {bookingForm.map((detail, index) => (
                <div key={index} className={styles.bookingFormHeader}>
                    <span className={styles.bookingFormSmallObj1}>№</span>
                    <span className={styles.bookingFormRoom}>{detail.number}</span>
                    <span className={styles.bookingFormType}>люкс</span>
                    <span className={styles.bookingFormPrice}>
                        {detail.price}₽<span className={styles.bookingFormPriceText}> в сутки</span>
                    </span>
                </div>
            ))}

            <form className={styles.bookingFormBody}>
                <div className={styles.bookingFormFields}>
                    <DateRangeSelector onChange={(startDate, endDate) => {
                        setArrivalDate(startDate);
                        setDepartureDate(endDate);
                        }} />
                    <div className={styles.bookingFormRow}>
                        <div className={styles.bookingFormFieldGroup}>
                            <label className={styles.bookingFormLabel}>ГОСТИ</label>
                            <GuestSelector/>
                        </div>
                    </div>
                </div>
                        
                <div className={styles.bookingFormCost}>
                    <div className={styles.bookingFormLabelCost}>
                        {bookingForm[0].price.toLocaleString("ru-RU")} x {getDaysCount()} {getDaysCount() === 1 ? "сутки" : getDaysCount() > 1 ? "суток" : "суток"}
                    </div>
                    <div className={styles.bookingFormCostValue}>{fullPrice.toLocaleString("ru-RU")}₽</div>
                </div>

                <div className={styles.bookingFormCost}>
                    <div className={styles.bookingFormLabelCost}>
                        Сбор за услуги: скидка
                        <span
                            className={styles.bookingFormInfo}
                            onMouseEnter={() => setIsDiscountInfoOpen(true)}
                            onMouseLeave={() => setIsDiscountInfoOpen(false)}
                        >
                            i
                        </span>
                    </div>
                    {isDiscountInfoOpen && (
                        <div className={styles.bookingFormInfoDropdownDiscount}>
                            <span>Потому что вы - хороший человек.</span>
                        </div>
                    )}
                    <div className={styles.bookingFormCostValue}>{bookingForm[0].discount}₽</div>
                </div>

                <div className={styles.bookingFormCost}>
                    <div className={styles.bookingFormLabelCost}>
                        Сбор за дополнительные услуги
                        <span
                            className={styles.bookingFormInfo}
                            onMouseEnter={() => setIsAddServicesInfoOpen(true)}
                            onMouseLeave={() => setIsAddServicesInfoOpen(false)}
                        >
                            i
                        </span>
                    </div>
                    {isAddServicesInfoOpen && (
                        <div className={styles.bookingFormInfoDropdownAddServices}>
                            <span>Потому что. Нет, мы не могли просто сделать скидку меньше.</span>
                        </div>
                    )}
                    <div className={styles.bookingFormCostValue}>{bookingForm[0].addPrice}₽</div>
                </div>

                <div className={styles.bookingFormTotal}>
                    <span className={styles.bookingFormTotalLabel}>Итого</span>
                    <span className={styles.bookingFormSmallObj2}> </span>
                    <span className={styles.bookingFormTotalValue}>{totalPrice.toLocaleString("ru-RU")}₽</span>
                </div>

                <button type="submit" className={styles.bookingFormButton}>
                    <span className={styles.bookingFormButtonText}>ЗАБРОНИРОВАТЬ</span>
                    <ArrowForwardIcon className={styles.bookingFormButtonForward} />
                </button>
            </form>
        </section>
    );
}
