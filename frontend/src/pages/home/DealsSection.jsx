import React, { useState, useEffect } from 'react';
import dealsImg from '../../assets/deals.png';

const DealsSection = () => {
    const targetDate = new Date('2024-12-31T23:59:59');   
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); 
    }, []);

    const addLeadingZero = (value) => (value < 10 ? `0${value}` : value);

    return (
        <section className='section__container deals__container'>
            <div className='deals__image'>
                <img src={dealsImg} alt='Deals' />
            </div>

            <div className='deals__content'>
                <h5>Get Up To 20% Discount</h5>
                <h4>Deals Of This Month</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non corrupti aspernatur commodi
                    vero porro iste doloribus, quo animi amet voluptates voluptatem. At sunt quod molestiae doloremque
                    non exercitationem voluptates.
                </p>
                <div className='deals__countdown flex-wrap'>
                    <div className='deals__countdown__card'>
                        <h4>{addLeadingZero(timeLeft.days)}</h4>
                        <p>Days</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>{addLeadingZero(timeLeft.hours)}</h4>
                        <p>Hours</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>{addLeadingZero(timeLeft.minutes)}</h4>
                        <p>Mins</p>
                    </div>
                    <div className='deals__countdown__card'>
                        <h4>{addLeadingZero(timeLeft.seconds)}</h4>
                        <p>Secs</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DealsSection;
