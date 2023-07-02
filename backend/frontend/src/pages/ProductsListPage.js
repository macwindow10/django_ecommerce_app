import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsList } from '../actions/productActions'
import Message from '../components/Message'
import { Spinner, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useHistory } from "react-router-dom";
import { CREATE_PRODUCT_RESET } from '../constants'


function ProductsListPage() {

    let history = useHistory()
    let searchTerm = history.location.search
    const dispatch = useDispatch()

    // products list reducer
    const productsListReducer = useSelector(state => state.productsListReducer)
    const { loading, error, products } = productsListReducer

    useEffect(() => {
        dispatch(getProductsList())
        dispatch({
            type: CREATE_PRODUCT_RESET
        })
        //dispatch(checkTokenValidation())
    }, [dispatch])

    const showNothingMessage = () => {
        return (
            <div>
                {!loading ? <Message variant='info'>Nothing to show</Message> : ""}
            </div>
        )
    }

    return (
        <div>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <span style={{ display: "flex" }}>
                <h5>Getting Products</h5>
                <span className="ml-2">
                    <Spinner animation="border" />
                </span>
            </span>}
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h2>Pre-Built PC</h2>
                    <h7>Looking for the pre-builts PC? Here you can explore the pre-builts PCs under every segment and PCs, which are exclusively picked by our editorial team for the power-packed performance.</h7>
                    <div className="card-group">
                        <div className="card m-2">
                            <img className="card-img-top" src="images/pc-builds.jpg"
                                alt="Pre-Built Gaming PC" />
                            <div className="card-body">
                                <h5 className="card-title">Pre-Built Gaming PC</h5>
                            </div>
                        </div>
                        <div className="card m-2">
                            <img className="card-img-top" src="images/pc-builds.jpg"
                                alt="Pre-Built Cheap PC" />
                            <div className="card-body">
                                <h5 className="card-title">Pre-Built Cheap PC</h5>
                            </div>
                        </div>
                        <div className="card m-2">
                            <img className="card-img-top" src="images/pc-builds.jpg"
                                alt="Pre-Built AIO PC" />
                            <div className="card-body">
                                <h5 className="card-title">Pre-Built AIO PC</h5>
                            </div>
                        </div>
                    </div>
                    <input type='button' className='btn btn-secondary' value={'Explore Pre-Built PCs'} />

                    <br /><br />
                    <h2>Best Laptops</h2>
                    <h7>Looking for the best laptops? Laptops can be a daunting purchase, but luckily we've narrowed it down for you. In this section, you'll find only the best laptops that will help you acheive better performance and experience.</h7>
                    <div className="card-group">
                        <div className="card m-2">
                            <img className="card-img-top" src="images/laptop.jpg"
                                alt="High-End Gaming Laptop" />
                            <div className="card-body">
                                <h5 className="card-title">High-End Gaming Laptop</h5>
                            </div>
                        </div>
                        <div className="card m-2">
                            <img className="card-img-top" src="images/pc-builds.jpg"
                                alt="Cheap Laptops" />
                            <div className="card-body">
                                <h5 className="card-title">Cheap Laptops</h5>
                            </div>
                        </div>
                        <div className="card m-2">
                            <img className="card-img-top" src="images/pc-builds.jpg"
                                alt="Business Laptops" />
                            <div className="card-body">
                                <h5 className="card-title">Business Laptops</h5>
                            </div>
                        </div>
                    </div>
                    <input type='button' className='btn btn-secondary' value={'Explore Laptops'} />
                </div>
                <br /><br />

                <Row>

                    {/* If length of the filter result is equal to 0 then show 'nothing found' message
                        with help of showNothingMessage function else show the filtered result on the
                        webpage and then run the map function */}

                    {(products.filter((item) =>
                        item.name.toLowerCase().includes(searchTerm !== "" ? searchTerm.split("=")[1] : "")
                    )).length === 0 ? showNothingMessage() : (products.filter((item) =>
                        item.name.toLowerCase().includes(searchTerm !== "" ? searchTerm.split("=")[1] : "")
                    )).map((product, idx) => (
                        <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                            <div className="mx-2">
                                <Product product={product} />
                            </div>
                        </Col>
                    )
                    )}
                </Row>
            </div>
        </div>
    )
}

export default ProductsListPage
