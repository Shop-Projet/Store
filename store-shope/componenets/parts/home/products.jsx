import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import {product} from '../../../dummyData'
import ProductHomePage from '../../features/products/product_homePage.jsx';
import ALink from '../../features/alink.jsx';
import { catFilter } from '../../../utils/index';

function HomeProduct ( props ) {
    // the line 10 should be : const { products = [], loading } = props; (in this one I'm just using dummy data)
    const { products = product, loading } = props;
    // the line 12 should be : const [ items, setItems ] = useState( [] ); I'm just using dummy data in my case.
    const [ items, setItems ] = useState( product );
    const [ hasMore, setHasMore ] = useState( true );
    const [ loadMoreLoading, setLoadMoreLoading ] = useState( false );

    useEffect( () => {
        if ( products.length > 0 ) {
            if ( hasMore ) {
                setItems( products.slice( 0, 8 ) )
            } else setItems( products.slice( 0, 16 ) );
        }
    }, [ products, hasMore ] )

    function loadMore ( e ) {
        e.preventDefault();
        setLoadMoreLoading( true );

        setTimeout( () => {
            setHasMore( false );
            setLoadMoreLoading( false );
        }, 500 );
    }
    
    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show">
            <div className="container">
                <div className="heading heading-center mb-2">
                    <h2 className="title">PRODUITS </h2>
                    <TabList className="nav nav-pills nav-border-anim justify-content-center">
                        <Tab className="nav-item">
                            <span className="nav-link" >All</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Toys</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Feeding</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Clothing</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">For babies</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Activity</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">gifts</span>
                        </Tab>
                        
                    </TabList>
                </div>

                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    items.map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductHomePage
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'toys' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductHomePage
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'Feeding' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductHomePage
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'clothing' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductHomePage
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'For babies' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductHomePage
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'Activity' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductHomePage
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="products">
                        <div className="row justify-content-center">
                            {
                                ( loading || items.length == 0 ) ?
                                    [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    catFilter( items, [ 'gifts' ] ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                            <ProductHomePage
                                                product={ item } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </TabPanel>
                {
                    ( loadMoreLoading || hasMore ) ?
                        <div className="load-more-container text-center mt-0 mb-7">
                            <a href="#" className="btn btn-outline-darker btn-load-more" onClick={ loadMore }>
                                <span className="mr-3">Load more products</span>
                                <i className={ `icon-refresh ${loadMoreLoading ? 'load-more-rotating' : ''}` }></i>
                            </a>
                        </div>
                        : 
                        <div className="load-more-container text-center mt-0 mb-7">
                        <ALink href="/" className="btn btn-outline-darker btn-load-more">
                            <span className="mr-3">Visiter la boutique</span>
                            <i className={ `icon-arrow-right ${loadMoreLoading ? 'load-more-rotating' : ''}` }></i>
                        </ALink>
                    </div>
                }
            </div>
        </Tabs >
    )
}

export default HomeProduct;
