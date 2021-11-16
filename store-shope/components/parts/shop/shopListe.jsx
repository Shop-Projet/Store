import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ProductShop1 from '../../features/products/productShop1';
import ProductShop2 from '../../features/products/productShop2';

function ShopList ( props ) {
    const { loading, products = [], perPage } = props;
    const router = useRouter();
    const [ fakeArray, setFakeArray ] = useState( [] );
    const [ gridClass, setGridClass ] = useState( 'col-6' );
    const type = router.query.type;

    useEffect( () => {
        let temp = [];
        for ( let i = 0; i < perPage; i++ ) {
            temp.push( i );
        }
        setFakeArray( temp );
    }, [ perPage ] )

    useEffect( () => {
        if ( type === 'list' || type === 'list2' ) setGridClass( 'col-6' );
        if ( type === 'list3' ) setGridClass( 'col-6 col-md-4 col-lg-4' );
        if ( type === 'list4' )
            setGridClass( 'col-6 col-md-4 col-lg-4 col-xl-3' );
    }, [ type ] )

    return (
        <div className="products mb-3">
            {
                ( products.length == 0 && !loading ) ?
                    <p
                        className="no-results"
                    >Aucun produit correspondant à votre sélection.</p>
                    :
                    <>
                        {
                            type == 'list' ?
                                loading ?
                                    fakeArray.map( ( item, index ) => (
                                        <div className="skel-pro skel-pro-list" key={ index }></div>
                                    ) )
                                    :
                                    products.map( ( product, index ) => (
                                        <ProductShop1
                                            product={ product }
                                            key={ index }
                                        />
                                    ) )
                                :
                                <div className="row">
                                    {
                                        loading ?
                                            fakeArray.map( ( item, index ) => (
                                                <div className={ gridClass } key={ index }>
                                                    <div className="skel-pro"></div>
                                                </div>
                                            ) )
                                            :
                                            products.map( ( product, index ) => (
                                                <div className={ gridClass } key={ index }>
                                                    <ProductShop2 product={ product } />
                                                </div>
                                            ) )
                                    }
                                </div>
                        }

                    </>
            }
        </div>
    )
}

export default React.memo( ShopList );