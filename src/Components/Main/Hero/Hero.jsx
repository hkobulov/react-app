import './Hero.css';

function Hero() {
    return <section className="hero">
    <div className="container hero-container">
        <div className="hero-left">
            <h2 className="hero-heading">
                Biznesingizni keyingi bosqichga
                olib chiqing
            </h2>
            
            <p className="hero-des">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
            </p>
            
            <a className="hero-link" href="#services">Xizmatlar bilan tanishish</a>
        </div>
        
        <iframe 
        className="hero-video" 
        width="458" 
        height="258" 
        src="https://www.youtube-nocookie.com/embed/6_pru8U2RmM" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
</section>
}

export default Hero;