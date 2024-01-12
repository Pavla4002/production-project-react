import {useState} from "react";
import styles from './count.module.scss'

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const add =()=>{
        setCount(count+1)
    }

    return (
        <div>
            <button className={styles.btn} onClick={add}>ADD {count}</button>
        </div>
    );
};

export default Counter;