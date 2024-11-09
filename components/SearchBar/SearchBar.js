import React, { useState } from "react"
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    }

    const handleClearClick = () => {
        setSearchValue('');
    }

    const shouldDisplayButton = searchValue.length > 0;

    const filteredProducts = props.products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
    })

    console.log(filteredProducts);

    return (
        <div className={styles.searchContainer}>
            <input 
                type="text" 
                value={searchValue} 
                onChange={handleInputChange} 
                className={styles.searchInput} 
            />
            {shouldDisplayButton && (
                <button onClick={handleClearClick} className={styles.clearButton}>
                    Clear
                </button>
            )}

            <div className={styles.productList}>
                {filteredProducts.map((product) => {
                    return (
                        <div key={product.id} className={styles.product}>
                            <h2>${product.price}</h2>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className={styles.productImage} 
                            />
                            <p>{product.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SearchBar