import { Component } from 'react'
import { withRouter } from '../../withRouter'

interface ProductsProps {
    location: any
}

class Products extends Component<ProductsProps> {
    render() {

        const { location } = this.props

        return (
            <section>
                <div>
                    <p>Hasil kiriman params : {location?.state?.value}</p>
                    <p>Hasil kiriman nama : {location?.state?.name}</p>
                </div>
            </section>
        )
    }
}

export default withRouter(Products)