import { useRouter } from 'next/router';
import GalleryDefault from '../../componenets/parts/products/gallery/gallery';
import DetailTwo from '../../componenets/parts/products/poductDetails';
import {product} from '../../dummyData'
import ALink from '../../componenets/features/alink';

function OneProductPage () {
    const slug = useRouter().query.id;
    console.log(slug);
    if ( !slug ) return <div></div>;
    return (
        <div className="main">
            <nav className="breadcrumb-nav border-0 mb-0">
            <div className={ 'd-flex align-items-center container-fluid' }>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <ALink href="/">Accueil</ALink>
                    </li>
                    <li className="breadcrumb-item">
                        Produit
                    </li>
                    <li className="breadcrumb-item active">{ product[slug-1].nom_du_produit }</li>
                </ol>
                </div>
            </nav >
            <div className="page-content">
                <div className="container skeleton-body">
                    <div className="product-details-top">
                        <div className={ `row skel-pro-single loaded` }>
                            <div className="col-md-5">
                                <div className="skel-product-gallery"></div>
                                <GalleryDefault product={ product[slug-1] } />
                            </div>

                            <div className="col-md-6">
                                <div className="entry-summary row">
                                    <div className="col-md-12">
                                        <div className="entry-summary1 mt-2 mt-md-0"></div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="entry-summary2"></div>
                                    </div>
                                </div>
                                <DetailTwo product={ product[slug-1] } />
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default OneProductPage;
