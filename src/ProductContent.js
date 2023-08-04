import React from "react";
import { BsStar } from "react-icons/bs";
import "./styles.css";

const ProductContent = (props) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div key={props.id} className="productCard">
          <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>{props.sale}</div>
          <img src={props.image} alt="..." className="card-img-top"></img>
        </div>
        <div className="card-body p-4">
          <div className="productCard__content">
            <h5 className="fw-bolder">{props.name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {[...Array(props.rating)].map((index) => {
                return(
                    <BsStar id={index + 1} key={index}/>
                );
              })}
            </div>
            <span className="text-muted text-decoration-line-through">{props.priceOff}</span>
            <span>{props.price}</span>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#!">
                <div className="buttonCard">{props.button}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductContent;
