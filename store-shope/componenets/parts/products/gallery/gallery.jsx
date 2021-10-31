import { Magnifier } from 'react-image-magnifiers';
import React, { useState, useEffect } from 'react';
import LightBox from 'react-image-lightbox';

function GalleryDefault ( props ) {
    const { product, adClass = "product-gallery-vertical" } = props;
    const [ isOpen, setIsOpen ] = useState( false );
    const [ photoIndex, setPhotoIndex ] = useState( 0 );

    useEffect( () => {
        if ( product ) {
            setIsOpen( false );
            setPhotoIndex( 0 );
        }
    }, [ product ] )

    function moveNextPhoto () {
        setPhotoIndex( ( photoIndex + 1 ) % product.pictures.length );
    }

    function movePrevPhoto () {
        setPhotoIndex( ( photoIndex + product.pictures.length - 1 ) % product.pictures.length );
    }

    function openLightBox () {
        let index = parseInt( document.querySelector( ".product-main-image" ).getAttribute( "index" ) );
        if ( !index ) {
            index = 0;
        }
        setIsOpen( true );
        setPhotoIndex( index );
    }

    function closeLightBox () {
        setIsOpen( false );
    }

    if ( !product ) {
        return <div></div>
    }

    return (
        <>
            <div className={ `product-gallery ${adClass}` }>
                <div className="row m-0">
                    <figure className="product-main-image" index="0">
                        <Magnifier
                            imageSrc={product.image}
                            imageAlt="product"
                            // largeImageSrc={ process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[ 0 ].url } // Optional
                            dragToMove={ false }
                            mouseActivation="hover"
                            cursorStyleActive="crosshair"
                            id="product-zoom"
                            className="zoom-image position-relative overflow-hidden"
                            width={ 22 }
                            height={ 22 }
                            style={ { paddingTop: `${29 / 29* 100}%` } }
                        />

                        <button id="btn-product-gallery" className="btn-product-gallery" onClick={ openLightBox }>
                            <i className="icon-arrows"></i>
                        </button>
                    </figure>
                </div>
            </div>
            {
                isOpen ?
                    <LightBox
                        mainSrc={product.image}
                        onCloseRequest={ closeLightBox }
                        onMovePrevRequest={ moveNextPhoto }
                        onMoveNextRequest={ movePrevPhoto }
                        reactModalStyle={ {
                            overlay: {
                                zIndex: 1041
                            },
                        }
                        }
                    />
                    : ''
            }
        </>
    )
}

export default React.memo( GalleryDefault );