import './Set.css';

function Set() {
    return <section className="set" id="set-services">
    <div className="set-container">
    <h2 className="set-heading">Buyurtma berish</h2>
    
    <p className="set-des">
    Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
    </p>

    <form className="form" action="#" method="POST" spellcheck="false" id="set-services-button">
    <input className="form-item" type="text" name="user_name" placeholder="Ismingiz" required/>
                
                <input className="form-item" type="tel" name="user_number" placeholder="Telefon raqamingiz" required/>
                
                
                <select className="form-item selecting" name="user_choose" required id="setting">
                    
                    <option className="setting" value="" disabled selected>Xizmat turi</option>
                    
                    <option value="website">Vebsayt tuzish</option>
                    
                    <option value="bot">Telegram bot</option>
                    
                    <option value="smm">SMM</option>
                    
                    <option value="design">Grafik dizan</option>
                    
                    <option value="crm">CRM tizimlar</option>
                    </select>

    </form>
    </div>
    </section>
}

export default Set;