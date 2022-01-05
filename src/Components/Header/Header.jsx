import './Header.css'
// import PixerLogo from '../../Assets/Images/pixerLogo.svg'

function Header() {
    return <header>
         <div className="container header-container">
            <a className="site-link" href="../../public/index.html" >
                Bu yerda rasm bo'lishi mumkin edi
                {/* <img className="site-logo" src={PixerLogo} alt="Logo of site" width='25' height='25'> */}
            </a>
            
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-link home-link" href="./index.html">Bosh sahifa</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="./services.html">Xizmatlar</a>
                        
                        <ul className="service-sublist">
                            <li className="sublist-item">
                                <a className="sublist-link" href="./website.html">
                                    Vebsayt
                                </a>
                            </li>
                            
                            <li className="sublist-item">
                                <a className="sublist-link" href="./bot.html">
                                    Telegram bot
                                </a>
                            </li>
                            
                            <li className="sublist-item">
                                <a className="sublist-link" href="./smm.html">
                                    SMM
                                </a>
                            </li>
                            
                            <li className="sublist-item">
                                <a className="sublist-link" href="./design.html">
                                    Grafik dizayn
                                </a>
                            </li>
                            
                            <li className="sublist-item">
                                <a className="sublist-link" href="./crm.html">
                                    CRM tizim
                                </a>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="./portfolio.html">Portfolio</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="./command.html">Jamoa</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="./blog.html">Blog</a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="./contacts.html">Kontaktlar</a>
                    </li>
                </ul>
                
                <a className="tel-number" href="tel:+998909213711">+998 90 921 37 11</a>
            </nav>
        </div>
    </header>
}

export default Header