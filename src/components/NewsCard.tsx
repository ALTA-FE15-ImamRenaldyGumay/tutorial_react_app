import { Component } from 'react'

interface NewsCardProps {
    id: string,
    title: string,
    description: string,
    image: string,
    author: string
}

export class NewsCard extends Component<NewsCardProps> {
    render() {

        const { id, title, description, image, author } = this.props

        return (
            <div id={id} className='w-96 h-full rounded-md shadow-md'>
                <div className='grid grid-cols-1 gap-y-5 text-alta-blue-dark'>
                    <img src={image !== null ? image : "https://via.placeholder.com/300x400?text=No+Image+Available"} width={200} height={200} />
                    <p className='font-semibold'>{title}</p>
                    <p>{description}</p>
                    <p>Author : {author}</p>
                </div>
            </div>
        )
    }
}

export default NewsCard