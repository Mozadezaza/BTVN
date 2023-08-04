import React from "react";
import { BsStar } from "react-icons/bs";
import './styles.css';

// export function ProductContent(props){
    // return(
    //     <section className='py-5'>
    //         <div className='container px-4 px-lg-5 mt-5'>
    //             <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
    //                 <div className='col mb-5'>
    //                     <div className='card h-100'>
    //                         <div key={props.id} className='productCard'>
    //                             <img src={props.image} alt='...' className='productImage'></img>
    //                             <div className='productSale'>{props.sale}</div>
    //                         </div>
    //                         <div className='card-body p-4'>
    //                             <div className='productCard__content'>
    //                                 <h5 className='productName'>{props.name}</h5>
    //                                 <div className='productRating'>
    //                                     {[...Array(props.rating)].map((index) => {
    //                                         <BsStar id = {index + 1} key = {index} />
    //                                     })}
    //                                 </div>
    //                                 <div className='productPrice'>{props.price}</div>
    //                             </div>
    //                             <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
    //                                 <div className='text-center'>
    //                                     <a className='btn btn-outline-dark mt-auto' href='#'>
    //                                         <div className='buttonCard'>{props.button}</div>
    //                                     </a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );
//}
const ProductContent = (props) =>{
    return(
        <section className='py-5'>
            <div className='container px-4 px-lg-5 mt-5'>
                <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                    <div className='col mb-5'>
                        <div className='card h-100'>
                            <div key={props.id} className='productCard'>
                                <img src={props.image} alt='...' className='productImage'></img>
                                <div className='productSale'>{props.sale}</div>
                            </div>
                            <div className='card-body p-4'>
                                <div className='productCard__content'>
                                    <h5 className='productName'>{props.name}</h5>
                                    <div className='productRating'>
                                        {[...Array(props.rating)].map((index) => {
                                            <BsStar id = {index + 1} key = {index} />
                                        })}
                                    </div>
                                    <div className='productPrice'>{props.price}</div>
                                </div>
                                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                                    <div className='text-center'>
                                        <a className='btn btn-outline-dark mt-auto' href='#'>
                                            <div className='buttonCard'>{props.button}</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ProductContent;
