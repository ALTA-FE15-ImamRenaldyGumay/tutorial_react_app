import { Component } from 'react'
import { withRouter } from '../../withRouter'
import { NavigateFunction } from 'react-router-dom'
import axios from 'axios'

import NewsCard from '../../components/NewsCard'

interface NewsProps {
    navigate: NavigateFunction
}

interface NewsState {
    value: string,
    data: any
}

class News extends Component<NewsProps, NewsState> {

    state = {
        value: "",
        data: []
    }

    sendParams() {
        const { value } = this.state
        const { navigate } = this.props
        const name = "John Doe"
        navigate("/products", {
            state: {
                value: value,
                name: name
            }
        })
    }

    getNews() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=027a0c86b59d4edaa9c304428b94a784`)
            .then((response) => {
                this.setState({ data: response.data.articles })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount(): void {
        this.getNews()
    }

    render() {

        const { value, data } = this.state

        return (
            <section>
                <div className='m-10 grid grid-cols-1 gap-y-5'>
                    <p>Input your Params</p>
                    <input
                        className='bg-white rounded-md shadow-md w-60 h-10 p-3'
                        placeholder='input your params here ... '
                        onChange={(e: any) => this.setState({ value: e.target.value })}
                        value={value}
                    />
                    <button
                        onClick={() => this.sendParams()}
                        className='w-60 h-10 bg-alta-blue-dark text-white'>Send Params</button>
                </div>
                <div className='m-10 grid grid-cols-3 gap-x-5 gap-y-5'>
                    {
                        data &&
                        data?.map((item: any, index) => {
                            return (
                                <NewsCard
                                    key={index}
                                    id='news'
                                    title={item?.title}
                                    image={item?.urlToImage}
                                    description={item?.description}
                                    author={item?.author}
                                />
                            )
                        })
                    }

                </div>
            </section>
        )
    }
}

export default withRouter(News)