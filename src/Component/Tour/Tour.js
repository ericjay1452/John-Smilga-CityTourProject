import React, { Component } from 'react';
import "./tour.scss";


 class Tour extends Component {
  constructor(props) {
      super(props)
      this.state = {
        Showninfo : false
      }
    }

    Handleinfo = () => {
      this.setState({
        Showninfo : !this.state.Showninfo
      })
    }

  render() {
      const { id, img, name, info, alt, city } = this.props.listData;
      const { CloseHandle } = this.props;
  
    return <>
      <article className='tour-article'>
        <div className="img-container">
          <img src={img} alt= {alt}  className='img'/>
          <span onClick={() => CloseHandle(id)} className='span'> <i class="far fa-times-circle"></i></span>
        </div>

        <div className="DataContainer">
             <h2>{name}</h2>
             <h3>{city}</h3>
             <h4>Info : <span onClick={this.Handleinfo} className='info-close'> <i class="far fa-times-circle"></i> </span>{
               this.state.Showninfo && <p className='para'>{info}</p>
               } </h4>

        </div>
      </article>
    </>;
  }
}

export default Tour
