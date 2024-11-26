import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { clearCart } from '../../../redux/features/cart/cartSlice';

const OrderSummary = () => {
    const products = useSelector((store) => store.cart.products);
    const {selectedItem,totalPrice,tax,taxRate  ,grandTotal} = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div className='bg-colors-primary-light mt-5 rounded text-base' >
        <div className='px-6 py-4 space-y-5'>
            <h2 className='text-2xl font-bold text-colors-text-dark'>Order Summary</h2>
            <p className=' text-colors-text-dark mt-2'>Selected Items: {selectedItem}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Tax ({taxRate * 100}%): ${tax.toFixed(2)}</p>
            <h3 className='font-bold'>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <div>
                <button onClick={(e) => {e.stopPropagation(); handleClearCart();}}
                 className='bg-red-500 px-3 py-1.5 text-white mt-2 rounded-md flex 
                justify-between items-center mb-4'><span className='mr-2'>Clear Cart</span> <i 
                className='ri-delete-bin-7-line'></i></button>
                <button className='bg-green-500 px-3 py-1.5 text-white mt-2 rounded-md flex 
                justify-between items-center mb-4'><span className='mr-2'>Proceed Checout</span><i 
                className='ri-bank-card-line'></i></button>
            </div>
        </div>

    </div>
  )
}

export default OrderSummary
