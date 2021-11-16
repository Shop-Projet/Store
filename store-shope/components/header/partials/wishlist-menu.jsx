import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from "next/router";

import ALink from '../../features/alink';

function WishlistMenu ( props ) {
    const { wishlist } = props;
    const router = useRouter();
    let path = router.asPath;

    return (
        <li className={path.indexOf("/wishlist") > -1 ? "active" : ""}>
            <ALink href="/wishlist" title="Wishlist">
                Mes coups de coeur
                <span>( { wishlist.length } )</span>
            </ALink>
        </li>
    );
}

function mapStateToProps ( state ) {
    return {
        wishlist: state.wishlist.data
    }
}

export default connect( mapStateToProps, {} )( WishlistMenu );