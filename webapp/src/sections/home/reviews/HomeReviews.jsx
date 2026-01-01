import "./HomeReview.css";

function HomeReviews() {
  return (
    <section className="home-reviews-section">
        <div className="stack gap-slg home-reviews-container">
            <div className="home-reviews-text">
                <h4 className="home-reviews-subtitle">Rating & Reviews</h4>
                <h1 className="home-reviews-title">Trusted By People</h1>
            </div>
            <div className="row gap-md home-reviews-cards-container">
                <div className="review-card ">
                    <p>“Managing my finances feels so much easier now. The interface is clean, and everything I need is just a tap away.”</p>
                    <hr></hr>
                    <p className="reviewer bold">Amanda L.</p>
                </div>
                <div className="review-card">
                    <p>“Fast transfers, reliable security, and great customer support. This app has become my daily go-to.”</p>
                    <hr></hr>
                    <p className="reviewer bold">Daniel K.</p>
                </div>
                <div className="review-card">
                    <p>"I love how transparent everything is. It helps me stay in control of my spending and savings"</p>
                    <hr></hr>
                    <p className="reviewer bold">Farah M.</p>
                </div>
                <div className="review-card">
                    <p>“Simple, secure, and convenient. Exactly what I need for day-to-day banking.”</p>
                    <hr></hr>
                    <p className="reviewer bold">Jonathan T.</p>
                </div>
            </div>
        </div>    
    </section>
    );
}
export default HomeReviews;