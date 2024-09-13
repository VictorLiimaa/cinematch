import Carrossel from './components/carrossel';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Platforms from './components/platforms';
import styles from '../styles/TimeLine.module.css';
import MovieSlider from './components/movieSlider';


const Timeline = () => {
    return (
        <>
            <div className={styles['timeline-content']}>
                <Navbar />
                <Carrossel />
                <Platforms />
                <MovieSlider />
                <Footer />
            </div>
        </>
    );
};

export default Timeline;