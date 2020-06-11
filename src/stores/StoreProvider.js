import React from 'react';
import { TournamentsStoreProvider } from './TournamentsStore'

const StoreProvider = ({children}) => {
    return (
        <TournamentsStoreProvider>
            {children}
        </TournamentsStoreProvider>
    )
}

export default StoreProvider;