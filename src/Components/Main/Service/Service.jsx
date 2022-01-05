import './Service.css';

function Service() {
    return <>
    <section className="services" id="services">
    <div className="container services-container">
        <h2 className="services-heading">Xizmatlar</h2>
        
        <p className="services-des">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
        </p>
        
        <ul className="services-menu">
            <li className="services-item">
                <a className="services-link website" href="./website.html">
                    <h3 className="menu-heading">Vebsayt tuzish</h3>
                    
                    <p className="menu-des">lorem ipsum</p>
                </a>
            </li>
            
            <li className="services-item">
                <a className="services-link bot" href="./bot.html">
                    <h3 className="menu-heading">Telegram bot</h3>
                    
                    <p className="menu-des">lorem ipsum</p>
                </a>
            </li>
            
            <li className="services-item">
                <a className="services-link smm" href="./smm.html">
                    <h3 className="menu-heading">SMM</h3>
                    
                    <p className="menu-des">lorem ipsum</p>
                </a>
            </li>
            
            <li className="services-item">
                <a className="services-link design" href="./design.html">
                    <h3 className="menu-heading">Grafik dizayn</h3>
                    
                    <p className="menu-des">lorem ipsum</p>
                </a>
            </li>
            
            <li className="services-item">
                <a className="services-link crm" href="./crm.html">
                    <h3 className="menu-heading">CRM tizimlar</h3>
                    
                    <p className="menu-des">lorem ipsum</p>
                </a>
            </li>
        </ul>
        
        <div className="set-menu">
            <a className="set-link" href="#set-services">Buyurtma berish</a>
            
            <a className="back-menu" href="#services">Xizmatlar sahifasiga o’tish</a>
        </div>
    </div>
</section>
    </>
}

export default Service;