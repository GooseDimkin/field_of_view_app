import styles from './../styles/FinishPage.module.css';
import Image from 'next/image'
import Logo from './Logo';
import {withRouter} from 'next/router'

function Finish_page() {
    return(
        <div>
            <Logo/>
            <div className={styles.image}>
                <Image 
                    src='/happy_Siri.png'
                    alt='Отличная работа!'
                    width={464}
                    height={532}
                />
                <div className={styles.text}>Отличная работа!</div>
            </div>
        </div>
    );
}

export default withRouter(Finish_page);