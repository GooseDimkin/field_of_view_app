import styles from './../styles/FinishPage.module.css';
import Image from 'next/image'


function Finish_page() {
    return(
        <div className={styles.image}>
            <Image 
                src='/GreatWork.png'
                alt='Отличная работа!'
                width={500}
                height={500}
                className="image"
            />
        </div>
    );
}

export default Finish_page