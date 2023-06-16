/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React, {useRef, useState} from "react";
import theImage from './l.png'


const App= ()=>{
  

const list = [
  {
    id: 1,
    title:'iphone X',
    catgore:'Apple / Smartphones',
    description:' SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ... ',
    stock: '94 in stock',
    offer:'13% OFF',
    price: '549$',
    src:'./l.png',
    title:'iphone X'
  
  },
  {
    id: 2,
    title:'iphone 9',
    catgore:'Apple / Smartphones',
    description:' SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ... ',
    stock: ' 34 in stock',
    offer:'18% OFF',
    price: '899$',
    src:'./l.png'
    
  },
  {

    id: 3,
    title:'Samsung Universe 9',
    catgore:'Samsung / Smartphones',
    description:'  Samsung new variant which goes beyond Galaxy to the  Universe  ',
    stock: ' 36 in stock',
    offer:'16% OFF',
    price:'1249$',
    src:'./l.png',

  },
  {
    id: 4,
    title:' OPPO F19',
    catgore:'OPPO / Smartphones',
    description:'  OPPO F19 is officially announced on April 2021 ',
    stock: ' 123 in stock',
    offer:'18% OFF',
    price:'280$',
    src:'./l.png',

  }

 ] 


 const [lists , setList] = useState(list) 
 const [search, setSearch] = useState('')
 const [updateState, setUpdateState] = useState(-1)
 const [category, setCatagory] = useState('')
 
  const categories = [
    'Apple / Smartphones',
    'Samsung / Smartphones'
  ]


    return(
        
      <main className="container w-50">

      {/* Start product search */}
      <section className="row pt-5 justify-content-lg-between">
        <div className=" d-flex justify-content-center align-items-center">
          <p className="product fs-3 ">Products </p>
          <input id="search" type="text" className="form-control" onChange={e => setSearch(e.target.value)} placeholder="Search.." />
        </div>
      </section>
      <hr /> 
      {/* end product search */}
      

      {/* start  iphone X category */}      
                        {
                          lists.filter((current) => {
                              return search.toLowerCase() === ''
                                ? current
                                : current.catgore.toLowerCase().includes(search);
                            })
                            .map((current) => (        
                           <><section>
                                <div className="card mt-5 border-0 position-relative">
                                  <div className="row g-0">
                                    <div className="col-md-3">
                                      <img src={theImage} className="img-fluid rounded-start" alt={current.title} />
                                    </div>
                                    <div className="col-md-8">
                                      <div className="card-body">
                                        <><h5 className="title fs-3" key={current.id}> {current.title}</h5>
                                        <div className="icon">
                                          <button className="delete border-0 " type="button" onClick={() => handleDelete(current.id)}> <i className="fa-solid fa-trash  " style={{ color: '#ad3f3f' }} /></button>
                                        </div><small className="text-body-secondary">{current.catgore}</small><p /><p className="card-text mt-5"><small className="text-body-secondary">
                                          {current.description} </small></p>
                                          <p className="stock "> {current.stock} </p>
                                          <div className="price">
                                            <p> {current.offer}</p>
                                            <h1> {current.price} </h1>
                                          </div><div className="Vertical  col-lg-12" /></>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section><hr /></>
                      ))
                    }
      {/* end  iphoneX category */}
    </main>
    
    )
    function handleDelete(id){
      const newList = lists.filter( li => li.id !== id)
      setList(newList)
    }
  }

export default App;