import React, { useState } from 'react';
import ProductCards from './ProductCards';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const TrendingProducts = ({ category = 'all', color = 'all', minPrice = 0, maxPrice = Infinity, currentPage = 1, ProductsPerPage = 8 }) => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    
    const { 
        data: { products = [], totalPages = 1, totalProducts = 0 } = {}, 
        error, 
        isLoading 
    } = useFetchAllProductsQuery({
        category: category !== 'all' ? category : '',
        color: color !== 'all' ? color : '',
        minPrice: isNaN(minPrice) ? '' : minPrice,
        maxPrice: isNaN(maxPrice) ? '' : maxPrice,
        page: currentPage,
        limit: ProductsPerPage,
    });

    const loadMoreProducts = () => {
        setVisibleProducts((prevCount) => prevCount + 4);
    };

    // Handle loading state
    if (isLoading) {
        return <div className='text-center text-gray-500'>Loading products...</div>;
    }

    // Handle error state
    if (error) {
        return <div className='text-center text-red-500'>Failed to load products. Please try again later.</div>;
    }

    return (
        <section className='section__container product__container'>
            <h2 className='section__header'>Trending Products</h2>
            <p className='section__subheader mb-12'>
                Discover the Hottest Picks: Elevate Your Style with Our Curated Collection of Trending Women's Fashion Products.
            </p>

            {/* Products card */}
            <div className='mt-12'>
                <ProductCards products={products.slice(0, visibleProducts)} />
            </div>

            {/* Load more products button */}
            <div className='product__btn'>
                {visibleProducts < products.length && (
                    <button className='btn' onClick={loadMoreProducts}>
                        Load More
                    </button>
                )}
            </div>
        </section>
    );
};

export default TrendingProducts;
