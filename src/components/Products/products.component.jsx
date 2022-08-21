import './products.styles.scss';

const products = [
    require("../../assets/img/shop/shop-1.jpg"),
    require("../../assets/img/shop/shop-2.jpg"),
    require("../../assets/img/shop/shop-3.jpg"),
    require("../../assets/img/shop/shop-4.jpg"),
    require("../../assets/img/shop/shop-5.jpg"),
]

export const Products = () => {

    return (
        <div className='row'>
        {products.map((item, index) => (

            <div className='col-lg-3 col-md-6'>
            <div className='product-item'>
            <div className='product-item-pic'>
                <img className='product-item-pic' src={item} alt=''/>
                <ul className='product-hover'>
                    <li>
                        <a href={item} >
                        <span className='fa fa-arrows-alt'/>
                        </a>
                    </li>
                </ul>
                </div>
               

                <div>
                <div className='product-item-text'>
                    <h6>
                        <a href="#">Furry Hooded</a>
                    </h6>
                    <div className='rating'>
                        <i className='fa fa-star'/>
                        <i className='fa fa-star'/>
                        <i className='fa fa-star'/>
                        <i className='fa fa-star'/>
                        <i className='fa fa-star'/>
                    </div>
                    <div className='product-price'>$699.99</div>
                </div>
                </div>
                </div>
            </div>
            ))}
        </div>

    )
}