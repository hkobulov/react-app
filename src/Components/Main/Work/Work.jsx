import './Work.css';

function Work() {
    return  <section className="work">
    <div className="container work-container">
        <h2 className="work-heading">Biz qanday ishlaymiz?</h2>
        
        <p className="work-des">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
        </p>
        
        <ol className="work-list">
            <li className="work-item">
                <div className="work-menu">
                    <h3 className="w-item-heading">Talablarni aniqlab chiqamiz</h3>
                    
                    <p className="w-item-des">
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                    </p>
                </div>
            </li>
            
            <li className="work-item">
                <div className="work-menu">
                    <h3 className="w-item-heading">Bir necha yechimlarni taklif qilamiz</h3>
                    
                    <p className="w-item-des">
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                    </p>
                </div>
            </li>
            
            <li className="work-item">
                <div className="work-menu">
                    <h3 className="w-item-heading">Loyiha uchun vaqt belgilaymiz</h3>
                    
                    <p className="w-item-des">
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                    </p>
                </div>
            </li>
            
            <li className="work-item">
                <div className="work-menu">
                    <h3 className="w-item-heading">A’lo sifat bilan bajarib topshiramiz</h3>
                    
                    <p className="w-item-des">
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                    </p>
                </div>
            </li>
            
            <li className="work-item">
                <div className="work-menu">
                    <h3 className="w-item-heading">Qo’llab-quvvatlab boramiz</h3>
                    
                    <p className="w-item-des">
                        Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
                    </p>
                </div>
            </li>
        </ol>
        
        <a className="set-link" href="#set-services-button">Buyurtma berish</a>
    </div>
</section>
}

export default Work;