import { Rules } from "./Rules";
import { Cancellation } from "./Cancellation";
import styles from "../styles/rulesAndCancellation.module.css"

export function RulesAndCancellation() {
    return (
        <div className={styles.rulesAndCancellation}>
            <Rules/>
            <Cancellation/>
        </div>
      );
  }