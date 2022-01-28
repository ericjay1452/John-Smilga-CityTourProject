import React, { Component } from 'react';
import Data  from "../../tourData"
import Tour from "../Tour"
import "./tourlist.scss";

 class Tourlist extends Component {
   constructor(props) {
     super(props)
     this.state = {
       tour : Data,
     }
   }

  render() {

    const CloseHandle = (id) => {
       const tourslist = this.state.tour;
       const sorted = tourslist.filter( item => item.id !== id)
       this.setState({
         tour : sorted
       })
    }
    const  tours  = this.state.tour

  return (
      <section className='tour-Data'>
        {
   tours.map( (tour )=> {
     return <Tour key={tour.id} listData = {tour} CloseHandle = {CloseHandle}></Tour>
  })
        }

      </section>
  )  
  }
  }

export default Tourlist