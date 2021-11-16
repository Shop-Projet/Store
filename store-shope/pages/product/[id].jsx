import { useRouter } from 'next/router';
import GalleryDefault from '../../components/parts/products/gallery/gallery';
import DetailTwo from '../../components/parts/products/poductDetails';
import {product} from '../../dummyData'
import ALink from '../../components/features/alink';
import PageHeader from '../../components/features/page-header';

function OneProductPage () {
    const slug = useRouter().query.id;
    if ( !slug ) return <div></div>;

    return (
        <div className="main">
            <PageHeader title="Article" subTitle="Détailes" />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Accueil</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/list">J&apos;achète</ALink>
                        </li>
                        <li className="breadcrumb-item active">{ product[slug-1].nom_du_produit }</li>
                    </ol>
                </div>
            </nav>
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
