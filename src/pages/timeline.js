import Carrossel from './components/carrossel';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Platforms from './components/platforms';
import Section from './components/section';
import { movies, releases, series } from './data/itens';
import styles from '../styles/TimeLine.module.css';


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