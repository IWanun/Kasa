import './Home.scss'
import Banner from "../../layout/Banner"
import ApartmentGrid from "../../Components/ApartmentGrid"


export default function Home() {
    return(
        <div className='home'>
       <Banner/>
       <ApartmentGrid/>
        </div>
    )
}