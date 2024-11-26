import React from 'react'
import dealsImg from '../../assets/deals.png'


const DealsSection = () => {

  return (
    <section className='section__container deals__container'> 
        <div className='deals__image'>
            <img src={dealsImg} alt="" />
        </div>
        
        <div className='deals__content'>
            <h5>Get Up To 20% Discount</h5>
            <h4>Deals Of This Month</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eum non corrupti aspernatur commodi vero porro iste doloribus,
                quo animi amet voluptates voluptatem.
                At sunt quod molestiae doloremque non exercitationem voluptates.</p>
                <div className='deals__countdown flex-wrap'>
                    <div className='deals__countdown__card'>
                        <h4>14</h4>
                        <p>Days</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>20</h4>
                        <p>Hours</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>15</h4>
                        <p>Mins</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>25</h4>
                        <p>secs</p>
                    </div>

                </div>
        </div>
    </section>
  )
}

export default DealsSection
