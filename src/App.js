import React, { Component } from 'react'
import Product from './components/Product'
import Counter from './components/Counter'
import GuessingGame from './components/GuessGame/GuessingGame'
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

   constructor() {

      super();

      this.state = {
         productsDatas: [
            {
               id: 1,
               name: 'Spain',
               color: 'home',
               size: 'XL',
               price: 340,
               imgURL: 'https://media.gettyimages.com/photos/david-villa-of-spain-celebrates-with-team-mate-fernando-torres-during-picture-id102454404?s=2048x2048'
            },
            {
               id: 2,
               name: 'Germany',
               color: 'home',
               size: 'XL',
               price: 240,
               imgURL: 'https://cdn.mos.cms.futurecdn.net/5LhDFZueX3aRuNwVaViaKK.jpg'
            },
            {
               id: 3,
               name: 'England',
               color: 'away',
               size: 'SM',
               price: 540,
               imgURL: 'https://cdn.mos.cms.futurecdn.net/5LhDFZueX3aRuNwVaViaKK.jpg'
            },
         ]
      }
   }

   handleDelete = (id) => {
      let filterData = this.state.productsDatas.filter((productDataFilter) => {
         return productDataFilter.id !== id
      })

      console.log(filterData);

      this.setState({
         productsDatas: filterData,
      });
   }

   render() {
      return (
         <main className="main-cotnent">
            <section className="player-section py-5 bg-section">
               <div className="container">
                  <h3 className="section-title mb-5 text-center">Delete in Crud</h3>
                  <table className="table table-bordered table-striped">
                     <thead>
                        <tr>
                           <th scope="col">ID</th>
                           <th scope="col">Image</th>
                           <th scope="col">Country</th>
                           <th scope="col">Size</th>
                           <th scope="col">Color</th>
                           <th scope="col">Price</th>
                           <th scope="col">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           this.state.productsDatas.map((productData, id) => {
                              return <Product productDataInfo={productData} key={id} handleDel={this.handleDelete} />
                           })
                        }
                     </tbody>
                  </table>
               </div>
            </section>
            {/*====================================================================
               # Counter Section
            =====================================================================*/}
            <section className="counter py-5  text-center">
               <div className="container">
                  <h3 className="section-title mb-5 text-center">Counter</h3>
                  <Counter />
               </div>
            </section>
            {/*====================================================================
               # Guess Game
            =====================================================================*/}
            <section className="counter py-5  text-center bg-section">
               <div className="container">
                  <h3 className="section-title mb-5 text-center">Guess Game</h3>
                  <GuessingGame />
               </div>
            </section>
         </main>
      )
   }
}

export default App