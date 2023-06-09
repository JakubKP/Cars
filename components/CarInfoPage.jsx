import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Loader from "./Loader"

const CarInfoPage = ({ name, about, image2, image3, image4, image5, info, price }) => {

    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [loading3, setLoading3] = useState(true)
    const [loading4, setLoading4] = useState(true)

  return (
    <>
        <div className='first-article'>
            <div className='image'>
                {loading ? <Loader /> : null}
                <Image src={image2} alt='car' onLoadingComplete={() => setLoading(false)}/>
            </div>
            <div className='info'>
                <div className='info-text'>
                    <h2 style={{ fontSize: '16px', fontWeight: '300', textAlign: 'center'}}>{info}</h2>
                </div>
            </div>
        </div>
        <div className='second-article'>
            <div className='image'>
                {loading ? <Loader /> : null}
                <Image src={image3} alt='car' onLoadingComplete={() => setLoading2(false)}/>
            </div>
            <div className='second-image'>
                {loading ? <Loader /> : null}
                <Image src={image4} alt='car' onLoadingComplete={() => setLoading3(false)}/>
            </div>
        </div>
        <div className='third-article'>
            <div className='image'>
                {loading ? <Loader /> : null}
                <Image src={image5} alt='car' onLoadingComplete={() => setLoading4(false)}/>
            </div>
            <div className='price-info'>
                <div className='price-table'>
                    <div className='table-row'>
                        <div>Okres</div>
                        <div>Cena za dobę</div>
                        <div>Limit kilometrów</div>
                    </div>
                    <div className='table-row'>
                        <div>1 doba</div>
                        <div>{price.one} zł</div>
                        <div>250 km</div>
                    </div>
                    <div className='table-row'>
                        <div>2-3 doby</div>
                        <div>{price.two} zł</div>
                        <div>200 km</div>
                    </div>
                    <div className='table-row'>
                        <div>4-6 dób</div>
                        <div>{price.three} zł</div>
                        <div>150 km</div>
                    </div>
                    <div className='table-row'>
                        <div>7-13 dób</div>
                        <div>{price.four} zł</div>
                        <div>100 km</div>
                    </div>
                    <div className='table-row'>
                        <div>14-29 dób</div>
                        <div>{price.five} zł</div>
                        <div>100 km</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='fourth-article'>
            <div className='name'>
                <h1 style={{ fontSize: '32px'}}>
                    {name}
                </h1>
            </div>
            <div className='car-about'>
                <h2 style={{ fontWeight: '300', fontSize: '16px'}}>
                    {about}
                </h2>
            </div>
            <Link className='reserve-button' href='/kontakt'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Wypożycz
            </Link>
        </div>
    </>
  )
}

export default CarInfoPage