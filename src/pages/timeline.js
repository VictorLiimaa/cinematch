import Carrossel from './components/carrossel';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Platforms from './components/platforms';
import styles from '../styles/Timeline.module.css';


const Timeline = () => {
    return (
        <>
            <div className={styles['timeline-content']}>
                <Navbar />
                <Carrossel />
                <Platforms />

                <Footer />
            </div>
        </>
    );
};

export default Timeline;