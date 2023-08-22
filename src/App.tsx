import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import News from "./pages/news";
import Products from "./pages/products";
import Movies from "./pages/movies";
import Reqres from "./pages/reqres";
import Login from "./pages/login";
import Pin from "./pages/pin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<News />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Pin />} path="/pin" />
          <Route element={<Products />} path="/products" />
          <Route element={<Movies />} path="/movies" />
          <Route element={<Reqres />} path="/reqres" />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

// ----- PENGGUNAAN PROPS, LIFECYCLE COMPONENT  -----
// import { Component } from 'react'
// import Card from './components/Card'
// import Modal from './components/Modal'
// import Whatsapp from './components/Whatsapp'

// import data from "../src/dummy/fashion.json"

// interface DarkModeState {
//   mode: boolean,
//   popup: boolean,
//   count: number
// }

// class App extends Component<DarkModeState> {

//   state = {
//     mode: false,
//     popup: false,
//     count: 0
//   }

//   changeMode() {
//     this.setState({ mode: !this.state.mode })
//   }

//   showPopup() {
//     this.setState({ popup: true })
//   }

//   handleIncrement() {
//     this.setState({ count: this.state.count + 1 })
//   }

//   handleDecrement() {
//     this.setState({ count: this.state.count - 1 })
//   }

//   // fase mounting
//   componentDidMount() {
//     console.log("Komponen terpasang")
//     setTimeout(() => {
//       this.setState({ popup: true }) // -> memunculkan iklan popup setelah 2 detik
//     }, 2000)
//   }

//   // fase updation
//   componentDidUpdate(prevState: DarkModeState) {
//     if (prevState.count !== this.state.count) {
//       console.log("Ada state count yang berubah")
//     }
//   }

//   // fase unmounting
//   componentWillUnmount() {
//     console.log("Komponen dilepas")
//   }

//   render() {
//     const { mode, popup, count } = this.state
//     return (
//       <section className={`${mode === true ? "bg-black" : "bg-white"}`}>
//         <div className='mx-5 my-5'>
//           <p>Result : {count} </p>
//           <button onClick={() => this.handleIncrement()} className='bg-alta-orange focus:outline-none'>+</button>
//           <button onClick={() => this.handleDecrement()} className='bg-alta-orange focus:outline-none'>-</button>
//         </div>
//         <div className='mx-5 my-5'>
//           <button
//             onClick={() => this.changeMode()}
//             className={`w-40 h-10 ${mode === true ? "bg-alta-blue-dark text-white" : "bg-alta-orange text-black"} focus:outline-none`}>Change Mode</button>
//         </div>
//         <div className='flex flex-wrap'>
//           {
//             data.map((item, index) => {
//               return (
//                 <div className='mx-auto'>
//                   <Card
//                     key={index}
//                     id="fashion"
//                     image={item.image}
//                     title={item.title}
//                     price={item.price}
//                     type={mode === true ? "dark" : "light"}
//                     onClick={() => this.showPopup()}
//                   />
//                 </div>
//               )
//             })
//           }
//         </div>
//         <Modal isOpen={popup} onClose={() => this.setState({ popup: false })}>
//           <div>
//             <img

//               src="https://lenterasultra.com/wp-content/uploads/2023/01/images-16.jpeg" alt="" />
//             <p>Kamu lagi cari sepatu baru???</p>
//             <p>Silahkan klik disini!</p>
//           </div>
//         </Modal>
//         <Whatsapp />
//       </section>
//     )
//   }
// }

// export default App

// ----- PENGGUNAAN STATE PADA PERUBAHAN WARNA, INCREMENT, DAN DECREMENT -----
// import { Component } from 'react'
// import Card from './components/Card'

// interface ColorState {
//   color: string,
//   count: number
// }

// class App extends Component<ColorState> {

//   state = {
//     color: "w-96 h-40 bg-white text-blue text-center m-5",
//     count: 0
//   }

//   handleChangeToBlue() {
//     this.setState({ color: `w-96 h-40 bg-blue-500 text-white text-center m-5` })
//   }

//   handleChangeToWhite() {
//     this.setState({ color: `w-96 h-40 bg-white text-blue-500 text-center m-5` })
//   }

//   handleIncrement() {
//     this.setState({ count: this.state.count + 1 })
//     if (this.state.count % 2 === 0) {
//       alert("Bilangan Genap")
//     }
//   }

//   handleDecrement() {
//     this.setState({ count: this.state.count - 1 })
//     if (this.state.count <= 0) {
//       alert("out of range calculation")
//       this.setState({ count: 0 })
//     }
//   }

//   render() {

//     const { color, count } = this.state

//     return (
//       <section className='flex flex-col flex-wrap'>
//         <div className='m-5'>
//           <p className='font-semibold'>Result : {count}</p>
//           <button onClick={() => this.handleIncrement()} className='bg-alta-orange text-white focus:outline-none'>+</button>
//           <button onClick={() => this.handleDecrement()} className='bg-alta-orange text-white focus:outline-none'>-</button>

//         </div>
//         <div className={`${color}`}>
//           <p>Experiment color : blue</p>
//         </div>
//         <div className='mx-10 grid grid-cols-2'>
//           <button className='w-40 h-14 bg-red-500 text-white focus:outline-none'
//             onClick={() => this.handleChangeToBlue()}
//           >Change to Blue</button>
//           <button className='w-48 h-14 bg-red-500 text-white focus:outline-none'
//             onClick={() => this.handleChangeToWhite()}
//           >Change to White</button>
//         </div>
//         <div className='grid grid-cols-3 gap-x-5'>
//           <Card />
//           <Card />
//           <Card />
//         </div>
//         <div className='grid grid-cols-3 gap-x-5'>
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       </section>
//     )
//   }
// }

// export default App
