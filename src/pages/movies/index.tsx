import { Component } from "react";
import axios from "axios";

import MoviesCard from "../../components/MoviesCard";
import Modal from "../../components/Modal";

interface MoviesState {
  data: [];
  loading: boolean;
  page: number;
  index: number;
}

class Movies extends Component<MoviesState> {
  state = {
    data: [],
    loading: false,
    page: 1,
    index: 1,
  };

  getNowPlaying(page: number) {

    const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ4NTE0ZmViMzI4YzZiNzhhZWY1YzEyNjE3NDIwOSIsInN1YiI6IjYxYTgzYzhhODc1ZDFhMDA4YjU4OWJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19IVAC2nzdtIHIPkcEN5sK0QBGIRwKyUmtUF_2QJiO0"
    console.log("page Now Playing : ", page);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then((response) => {
        this.setState({
          loading: true,
          data: response?.data?.results,
          page: response?.data?.page
        });
        console.log(response?.data?.page);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // async getPrevious() {
  //   const { page } = this.state;
  //   this.setState({ page: page - 1 });
  //   const pagination = page;
  //   this.setState({ index: pagination });
  // }

  async getPrevious() {
    const { page } = this.state;
    const pagination = page - 1; // Menghitung halaman berikutnya
    this.setState({ page: pagination, index: pagination }); // Mengubah state page dan index
    await this.getNowPlaying(pagination); // Memanggil getNowPlaying dengan halaman berikutnya
  }

  // async getNext() {
  //   const { page } = this.state;
  //   this.setState({ page: page + 1 });
  //   const pagination = page;
  //   this.setState({ index: pagination });
  //   this.getNowPlaying(pagination);
  // }

  async getNext() {
    const { page } = this.state;
    const pagination = page + 1; // Menghitung halaman berikutnya
    this.setState({ page: pagination, index: pagination }); // Mengubah state page dan index
    await this.getNowPlaying(pagination); // Memanggil getNowPlaying dengan halaman berikutnya
  }


  componentDidMount(): void {
    const { index } = this.state;
    console.log("index compount: ", index);
    this.getNowPlaying(index);
  }

  // render() {
  //   const { data, loading, page, index } = this.state;
  //   console.log("index render : ", index);
  //   console.log("page : ", page);

  //   const previousButtonClass = page <= 1
  //   ? "bg-gray-400 text-gray-700 cursor-not-allowed"
  //   : "bg-alta-blue-dark text-white";

  //   return (
  //     <section className="flex flex-col justify-center">
  //       <div className="flex flex-row mx-auto my-10">
  //         <button
  //           className={`${page <= 1
  //               ? "bg-gray-400 text-gray-700 cursor-not-allowed"
  //               : "bg-alta-blue-dark text-white"
  //             } focus:outline-none w-40 mr-5`}
  //           onClick={() => this.getPrevious()}
  //         >
  //           Previous
  //         </button>
  //         <button
  //           className="bg-alta-blue-dark text-white focus:outline-none w-40 ml-5"
  //           onClick={() => this.getNext()}
  //         >
  //           Next
  //         </button>
  //       </div>
  //       <div className="m-5 grid grid-cols-5 gap-x-5 gap-y-10">
  //         {data && loading === true ? (
  //           data.map((item: any, index) => {
  //             return (
  //               <MoviesCard
  //                 key={index}
  //                 id={item?.id.toString()}
  //                 title={item?.title}
  //                 poster_path={item?.poster_path}
  //                 vote_average={item?.vote_average}
  //               />
  //             );
  //           })
  //         ) : (
  //           <Modal isOpen={true}>
  //             <div className="w-40 text-center my-20">
  //               <p className="font-semibold">Please wait ...</p>
  //             </div>
  //           </Modal>
  //         )}
  //       </div>
  //     </section>
  //   );
  // }

  render() {
    const { data, loading, page, index } = this.state;
    console.log("index render : ", index);
    console.log("page : ", page);
    const previousButtonClass = page <= 1
      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
      : "bg-alta-blue-dark text-white";
    const movieCards = data && loading === true
      ? data.map((item: any, index) => (
        <MoviesCard
          key={index}
          id={item?.id.toString()}
          title={item?.title}
          poster_path={item?.poster_path}
          vote_average={item?.vote_average}
        />
      ))
      : (
        <Modal isOpen={true}>
          <div className="w-40 text-center my-20">
            <p className="font-semibold">Please wait ...</p>
          </div>
        </Modal>
      );
    return (
      <section className="flex flex-col justify-center">
        <div className="flex flex-row mx-auto my-10">
          <button
            className={`${previousButtonClass} focus:outline-none w-40 mr-5`}
            onClick={() => this.getPrevious()}
          >
            Previous
          </button>
          <button
            className="bg-alta-blue-dark text-white focus:outline-none w-40 ml-5"
            onClick={() => this.getNext()}
          >
            Next
          </button>
        </div>
        <div className="m-5 grid grid-cols-5 gap-x-5 gap-y-10">
          {movieCards}
        </div>
      </section>
    );
  }
}

export default Movies;
