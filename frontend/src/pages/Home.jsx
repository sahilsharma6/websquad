import React from 'react'

import Hero from './MainHome/Hero'
// import HomeBlog from './MainHome/HomeBlog'
import HomeTeams from './MainHome/HomeTeams'
import HomeContact from './MainHome/HomeContact'
import HomeServices from './MainHome/HomeServices'
import HomePortfolio from './MainHome/HomePortfolio'
import HomeAbout from './MainHome/HomeAbout'
import Banner1 from '../components/Banners/Banner1'
import Banner2 from '../components/Banners/Banner2'
import Banner3 from '../components/Banners/Banner3'
import Banner4 from '../components/Banners/Banner4'




const Home = () => {
    return (
            <div >
                <section>
                    <Hero />
                </section>

                <Banner1 />

                <Banner3 />
                
                <section>
                    <HomeAbout />
                </section>

                <section>
                    <HomeServices />
                </section>

                <section>
                    <HomePortfolio />
                </section>

                <Banner4 />

                <div className=''>
                    <Banner2 />
                </div>

                <section id='team' className='bg-primary/10'>
                    <HomeTeams />
                </section>

                {/* <section>
            <HomeBlog />
        </section> */}

                <section id='contact'>
                    <HomeContact />
                </section>
            </div>
    )
}

export default Home