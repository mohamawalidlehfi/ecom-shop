import React , { useState,useEffect } from 'react'
import productsData from '../../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters ={
    categories: ['all','accessories' ,'dress','jewellery','cosmetics'],
    colors: ['all','black','gold','red','blue','green','silver' ,'beige',],
    priceRanges: [
        {label: 'Under $50', min:0 ,max:50},
        {label: '$50 - $100', min:50 ,max:100},
        {label: '$100 - $200', min:100 ,max:200},
        {label: '$200 and above', min:200,max:Infinity},
    ]
};

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filtersState ,setFiltersState] = useState({
        category : 'all',
        color : 'all',
        priceRange : ''
    });


    // filtering function
    const applyFilters = () => {
        let filteredProducts = productsData;

        // filter by category
        if(filtersState.category && filtersState.category!== 'all'){
            filteredProducts = filteredProducts.filter(product=>product.category ===
            filtersState.category);
        }

        // filter by color
        if(filtersState.color && filtersState.color!== 'all'){
            filteredProducts = filteredProducts.filter(product=>product.color ===
            filtersState.color);
        }

        // filter by price range
        if(filtersState.priceRange){
            const [maxPrice,minPrice] = filtersState.priceRange.split('-').map(Number);
            filteredProducts = filteredProducts.filter( product => product.price >= minPrice && 
            product.price <= maxPrice);
        }

        setProducts(filteredProducts);


    }

    useEffect(()=> {
        applyFilters() 
    }, [filtersState]);

    // clear filters
    const clearFilters = () => {
        setFiltersState({
            category : 'all',
            color : 'all',
            priceRange : ''
        });
    }

  return (

        <>
            <section className='section__container bg-colors-primary-light'>
            <h2 className='section__header capitalize '>Shop Page</h2>
            <p className='section__subheader'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores accusantium totam
                , exercitationem eius natus architecto! Cupiditate </p>

            </section>
            
            <section className='section__container'>
                <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
                    {/*left side */}
                    <ShopFiltering 
                    filters={filters} 
                    filtersState={filtersState} 
                    setFiltersState={setFiltersState} 
                    clearFilters={clearFilters}
                    />

                     {/*right side */}
                     <div>
                        <h3 className='text-xl font-medium mb-4 '>Products Available : {products.length}</h3>
                        <ProductCards products={products}/>
                     </div>
                </div>

            </section>
        </>

  )
}

export default ShopPage