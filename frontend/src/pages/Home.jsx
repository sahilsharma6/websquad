import React from 'react'

import Hero from './MainHome/Hero'
import HomeBlog from './MainHome/HomeBlog'
import HomeTeams from './MainHome/HomeTeams'
import HomeContact from './MainHome/HomeContact'
import HomeServices from './MainHome/HomeServices'
import HomePortfolio from './MainHome/HomePortfolio'
import HomeAbout from './MainHome/HomeAbout'


const Home = () => {
  return (
    <div>
        <section>
            <Hero />
        </section>

        <section>
            <HomeAbout />
        </section>
        
        <section>
            <HomeServices />
        </section>

        <section>
            <HomePortfolio />
        </section>

        <section>
            <HomeTeams />
        </section>

        <section>
            <HomeBlog />
        </section>

        <section>
            <HomeContact />
        </section>
    </div>
  )
}

export default Home