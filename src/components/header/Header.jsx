import React, { Component } from 'react'
import './Header.css';
import logo from '../../assets/logo.png';


class Header extends Component {
  state={ clicked: false };

  handleClick = () =>{
    this.setState({clicked:
      !this.state.clicked})
  }
  render() {
  return (
    <>
      <div className='navbar__container'>
        <a href="/"><img className='navbar__logo' src={logo} alt="logo"/></a>
        <ul id='navbar' className={this.state.clicked ? "navbar__list-active" : "navbar__list"}>

          <li className='item nosotros'><a href="/"><i className="fa-sharp fa-solid fa-users"></i> Nosotros</a></li>
          <li className='item descarga_pdf'><a href="/"><i className="fa-solid fa-file-arrow-down"></i> Catálogo</a></li>
          <li className='item productos'><a href="/"><i className="fa-solid fa-grip-vertical"></i> Productos</a></li>
          <li className='item contacto'><a href="/"><i className="fa-solid fa-message"></i> Contacto</a></li>

        </ul>

      </div>
      <div className='menu' id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </>

    

    
  )

}
}

export default Header