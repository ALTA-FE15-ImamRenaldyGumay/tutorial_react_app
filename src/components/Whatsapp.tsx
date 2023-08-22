import { Component } from 'react'

class Whatsapp extends Component {
    render() {

        const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png'

        return (
            <a href='https://wa.me/08123456789' target='_blank'>
                <img
                    src={logo}
                    className='z-10 bottom-5 mx-5 my-5 sticky'
                    height={70}
                    width={70}
                />
            </a>
        )
    }
}

export default Whatsapp