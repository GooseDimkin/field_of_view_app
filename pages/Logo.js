import styles from './../styles/Logo.module.css';
import Image from 'next/image'

export default function Logo() {
    return(
        <div className={styles.logo}>
            <Image 
                src='/logo.png'
                alt='Sirius Future'
                width={175}
                height={71}
            />
        </div>
    );
}