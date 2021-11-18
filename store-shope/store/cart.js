import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { takeEvery } from "redux-saga/effects";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const actionTypes = {
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  refreshStore: "REFRESH_STORE",
  updateCart: "UPDATE_CART",
  deleteCarte: "DELETE_CART",
};

const initialState = {
  data: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addToCart:
      var findIndex = state.data.findIndex(
        (item) => item.id == action.payload.product.id
      );
      let qty = action.payload.qty ? action.payload.qty : 1;
      if (findIndex !== -1) {
        findIndex = state.data.findIndex(
          (item) => item.nom_du_produit == action.payload.product.nom_du_produit
        );
      }

      console.log(findIndex, "hahaaaaaaaaaaaaaaaaa");
      if (findIndex !== -1) {
        return {
          data: [
            ...state.data.reduce((acc, product, index) => {
              if (findIndex == index) {
                acc.push({
                  ...product,
                });
              } else {
                acc.push(product);
              }

              return acc;
            }, []),
          ],
        };
      } else {
        if (state.data.length < 3) {
          return {
            data: [
              ...state.data,
              {
                ...action.payload.product,
                qty: qty,
                price: action.payload.product.prix,
                sum: action.payload.product.prix,
              },
            ],
          };
        } else {
          Swal.fire({
            icon: "warning",
            text: "Chaque panier est composé de 3 transactions maximum!",
          });
        }
      }
    case actionTypes.removeFromCart:
      return {
        data: [
          ...state.data.filter((item) => {
            if (item.id !== action.payload.product.id) return true;
            if (item.name !== action.payload.product.name) return true;
            return false;
          }),
        ],
      };

    case actionTypes.updateCart:
      return {
        data: [...action.payload.cartItems],
      };
    case actionTypes.refreshStore:
      return initialState;

    case actionTypes.deleteCarte:
      return {
        data: [],
      };

    default:
      return state;
  }
};

export const actions = {
  addToCart: (product, qty = 1) => ({
    type: actionTypes.addToCart,
    payload: {
      product: product,
      qty: qty,
    },
  }),

  removeFromCart: (product) => ({
    type: actionTypes.removeFromCart,
    payload: {
      product: product,
    },
  }),

  updateCart: (cartItems) => ({
    type: actionTypes.updateCart,
    payload: {
      cartItems: cartItems,
    },
  }),
  deleteCarte: () => ({
    type: actionTypes.deleteCarte,
    payload: {
      data: [],
    },
  }),
};

export function* cartSaga() {
  yield takeEvery(actionTypes.addToCart, function* saga(e) {
    toast.success("Product added to Cart");
  });

  yield takeEvery(actionTypes.removeFromCart, function* saga(e) {
    toast.success("Product removed from Cart");
  });

  yield takeEvery(actionTypes.updateCart, function* saga(e) {
    toast.success("Cart updated successfully");
  });
}

const persistConfig = {
  keyPrefix: "molla-",
  key: "cart",
  storage,
};

export default persistReducer(persistConfig, cartReducer);
