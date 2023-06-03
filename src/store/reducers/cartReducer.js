import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}
export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find((c) => c.product.id === payload.id)
            if (product) {//eğer sepette varsa
                product.quantity++; //referansı değiştirmediği için ...state yaptım
                return {
                    ...state//bu bir obje
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }],
                };

            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((c) => c.product.id === payload.id),
                //filter yepyeni bir array oluşturur. silien dışındaki yeni ürünleri ekler
            }

        default:
            return state;
    }
}