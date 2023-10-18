import React from 'react'

const Cards = () => {
    return (
        <div className="cards">
            <div className='card'>
                <div className='cardLogo'>
                    <img src="./images/dollar.png" alt="img" />
                </div>
                <div className='cardDetail'>
                    <p >Earning</p>
                    <h2 >$20K</h2>
                    <p >40% this month</p>
                </div>
            </div><div className='card'>
                <div className='cardLogo'>
                    <img src="./images/dollar.png" alt="img" />
                </div>
                <div className='cardDetail'>
                    <p >Orders</p>
                    <h2 >$20K</h2>
                    <p >40% this month</p>
                </div>
            </div><div className='card'>
                <div className='cardLogo'>
                    <img src="./images/dollar.png" alt="img" />
                </div>
                <div className='cardDetail'>
                    <p >Balance</p>
                    <h2 >$20K</h2>
                    <p >40% this month</p>
                </div>
            </div><div className='card'>
                <div className='cardLogo'>
                    <img src="./images/dollar.png" alt="img" />
                </div>
                <div className='cardDetail'>
                    <p >Total Sales</p>
                    <h2 >$20K</h2>
                    <p >40% this month</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
