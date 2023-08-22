import React, { Component } from 'react'

interface CardProps {
    id: string,
    image: string,
    title: string,
    price: number,
    type: "dark" | "light"
    onClick: React.MouseEventHandler
}

class Card extends Component<CardProps> {
    render() {

        const { id, image, title, price, type, onClick } = this.props

        return (
            <div id={id} className={`w-60 h-full ${type === "dark" ? 'bg-black border border-white' : 'bg-white'} rounded-md shadow-md`}>
                <div className='m-3 grid grid-cols-1 gap-y-3'>
                    <div className='my-5'>
                        <img
                            className='rounded-md w-full'
                            src={image} />
                    </div>
                    <div className='grid grid-cols-1 gap-y-3 mb-5'>
                        <h2 className={`font-semibold ${type === "dark" ? "text-white" : "text-black"}`}>{title}</h2>
                        <p className={`${type === "dark" ? "text-white" : "text-black"}`}>Rp {price}</p>
                    </div>
                    <div className='mb-5'>
                        <button onClick={onClick} className={`${type === "dark" ? "bg-gray-500" : "bg-alta-orange"} text-white focus:outline-none hover:bg-orange-700`}>Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
