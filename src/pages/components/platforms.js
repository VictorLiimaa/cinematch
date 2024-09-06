import Image from "next/image";
import Netflix from '../../../public/assets/streamings/netflix.svg';
import HBO from '../../../public/assets/streamings/hbo.svg';
import Disney from '../../../public/assets/streamings/disney.svg';
import Marvel from '../../../public/assets/streamings/marvel.svg';
import Pixar from '../../../public/assets/streamings/pixar.svg';
import Prime from '../../../public/assets/streamings/prime.svg';
import National from '../../../public/assets/streamings/nationalG.svg';
import styles from '../../styles/Platforms.module.css';


const Platforms = () => {
    return (
        <section className={styles.platforms}>
            <div className={styles['platform-icons']}>
                <Image className={styles['platform-img']} src={Netflix} alt="Netflix" />
                <Image className={styles['platform-img']} src={HBO} alt="HBO" />
                <Image className={styles['platform-img']} src={Disney} alt="Disney+" />
                <Image className={styles['platform-img']} src={Marvel} alt="Marvel" />
                <Image className={styles['platform-img']} src={Pixar} alt="Pixar" />
                <Image className={styles['platform-img']} src={Prime} alt="Prime Video" />
                <Image className={styles['platform-img']} src={National} alt="National Geographic" />
            </div>
        </section>
    );
};

export default Platforms;