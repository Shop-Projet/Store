import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { takeEvery } from "redux-saga/effects";
import { toast } from 'react-toastify';

export const actionTypes = {
    addMyProduct: 'ADD_MY_PRODUCT',
    removeFromMyProduct: 'REMOVE_FROM_MY_PRODUCT'
}

const initialState = {
    data: [],
}

const myProductReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.addMyProduct:
            var findIndex = state.data.findIndex( item => item.id === action.payload.product.id );
            if ( findIndex == -1 ) {
                return {
                    data: [
                        ...state.data,
                        action.payload.product
                    ]
                };
            }


        case actionTypes.removeFromWishlist:
            return {
                data: state.data.filter( item => item.id !== action.payload.product.id )
            };

        default:
            return state;
    }
}

export const actions = {
    addMyProduct: product => ( {
        type: actionTypes.addMyProduct,
        payload: {
            product
        }
    } ),

    removeFromMyProduct: product => ( {
        type: actionTypes.removeFromMyProduct,
        payload: {
            product
        }
    } )
}

export function* myProductSaga () {
    yield takeEvery( actionTypes.addMyProduct, function* saga ( e ) {
        toast.success( "Produit ajouté" );
    } )
}

const persistConfig = {
    keyPrefix: "molla-",
    key: 'myProduct',
    storage,
}

export default persistReducer( persistConfig, myProductReducer );