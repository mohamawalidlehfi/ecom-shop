import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    selectedItem: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.products.find(product => product.id === action.payload.id);
            if (!isExist) {
                state.products.push({ ...action.payload, quantity: 1 });
            } else {
                console.log('Item already in cart!');
            }
            // تحديث القيم الإجمالية بعد إضافة المنتج
            state.selectedItem = calculateSelectedItems(state);
            state.totalPrice = calculateTotalPrice(state);
            state.tax = calculateTax(state);
            state.grandTotal = calculateGrandTotal(state);
        },

        updateQuantity: (state, action) => {
            const product = state.products.find(product => product.id === action.payload.id);
            if (product) {
                if (action.payload.type === 'increment') {
                    product.quantity += 1;
                } else if (action.payload.type === 'decrement' && product.quantity > 1) {
                    product.quantity -= 1;
                }
            }
            // تحديث القيم الإجمالية بعد تحديث الكمية
            state.selectedItem = calculateSelectedItems(state);
            state.totalPrice = calculateTotalPrice(state);
            state.tax = calculateTax(state);
            state.grandTotal = calculateGrandTotal(state);
        },
        removeFromCart: (state, action) => {
            const productIndex = state.products.findIndex(product => product.id === action.payload.id);
            if (productIndex > -1) {
                state.products.splice(productIndex, 1);
            }
            // تحديث القيم ال��جمالية بعد حذف المنتج
            state.selectedItem = calculateSelectedItems(state);
            state.totalPrice = calculateTotalPrice(state);
            state.tax = calculateTax(state);
            state.grandTotal = calculateGrandTotal(state);
        },
        clearCart: (state) => {
            state.products = [];
            // تحديث القيم ال��جمالية بعد حذف الكافة من المنتجات
            state.selectedItem = 0;
            state.totalPrice = 0;
            state.tax = 0;
            state.grandTotal = 0;
        }

    },
});

// دوال المساعدة لحساب القيم الإجمالية
export const calculateSelectedItems = (state) =>
    state.products.reduce((total, product) => total + product.quantity, 0);

export const calculateTotalPrice = (state) =>
    state.products.reduce((total, product) => total + product.price * product.quantity, 0);

export const calculateTax = (state) => calculateTotalPrice(state) * state.taxRate;

export const calculateGrandTotal = (state) =>
    calculateTotalPrice(state) + calculateTax(state);

// تصدير المعدلات والدوال
export const { addToCart, updateQuantity ,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
