import './Main.css';
import Hero from './Hero/Hero';
import Service from './Service/Service';
import Work from './Work/Work';
import Set from './Set/Set'

function Main() {
    return <main>
        <h1 className="visually-hidden">Biz bilan yuksalish sari</h1>

        <Hero/>

        <Service/>

        <Work/>

        <Set/>
    </main>
}

export default Main;