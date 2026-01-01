import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Hero from "../../sections/home/hero/Hero";
import HomeServices from "../../sections/home/services/HomeServices";
import HomeReviews from "../../sections/home/reviews/HomeReviews"; 

function Home () {
    return (
        <div className='home-page'>
            <Header />
            <main className='main-content'>
                <Hero />
                <HomeServices />
                <HomeReviews />
            </main>
            <Footer />
        </div>
    );
}
export default Home;