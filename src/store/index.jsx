import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './slices/favorites.slice'
import isLoadingSlices from './slices/isLoading.slices'
import productsSlice from './slices/products.slice'

export default configureStore({
    reducer: {

        isLoading: isLoadingSlices,
        products: productsSlice,
        favorites : favoritesSlice
    }
})
