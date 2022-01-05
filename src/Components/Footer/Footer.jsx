import './Footer.css';

function Footer() {
    return <footer class="footer">
    <div class="container footer-container">
        
        <div class="footer-left">
            <h2 class="footer-left-heading">
                Copyright 2020
            </h2>
            
            <p class="footer-left-des">
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.
            </p>
        </div>
        
        <div class="footer-center">
            <h2 class="footer-center-head">
                Sayt sahifalari
            </h2>
            
            <ul class="foot-menu">
                <li class="foot-item">
                    <a class="foot-link" href="./index.html">
                        Bosh sahifa
                    </a>
                </li>
                
                <li class="foot-item">
                    <a class="foot-link" href="#services">
                        Xizmatlar
                    </a>
                </li>
                
                <li class="foot-item">
                    <a class="foot-link" href="./portfolio.html">
                        Portfolio
                    </a>
                </li>
                
                <li class="foot-item">
                    <a class="foot-link" href="./command.html">
                        Jamoa
                    </a>
                </li>
                
                <li class="foot-item">
                    <a class="foot-link" href="./blog.html">
                        Blog
                    </a>
                </li>
                
                <li class="foot-item">
                    <a class="foot-link" href="./contacts.html">
                        Kontaktlar
                    </a>
                </li>
            </ul>
        </div>
        
        <div class="footer-right">
            <h2 class="footer-right-head">
                Biz internetda
            </h2>
            
            <ul class="social-menu">
                <li class="social-item">
                    <a class="social-link" href="#" target="_blank">
                        Telegram
                    </a>
                </li>
                
                <li class="social-item">
                    <a class="social-link" href="" target="_blank">
                        Facebook
                    </a>
                </li>
                
                <li class="social-item">
                    <a class="social-link" href="" target="_blank">
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    </div>
</footer>
}

export default Footer;