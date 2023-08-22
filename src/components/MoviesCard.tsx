import { Component } from 'react'

import Stars from "../assets/star.png"

interface MoviesProps {
    id: string,
    title: string,
    poster_path: string,
    vote_average: number
}

class MoviesCard extends Component<MoviesProps> {
    render() {

        const { id, title, poster_path, vote_average } = this.props

        return (
            <div id={id} className='w-60 h-full rounded-md shadow-md bg-white'>
                <img src={poster_path ? `http://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/300x400?text=No+Image+Available'} className='rounded-md w-full h-60' />
                <div className='mx-3 my-5'>
                    <p className='font-semibold ax-w-full overflow-hidden overflow-ellipsis'>
                        {title}
                    </p>
                    <a className='hover:text-black text-black flex'>
                        <img className="mr-2" src={Stars} width={24} height={10} />
                        {vote_average}
                    </a>
                </div >
            </div >

        )
    }
}

export default MoviesCard