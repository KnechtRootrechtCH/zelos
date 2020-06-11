import React from 'react';
import { useLocalStore } from 'mobx-react';

export const TournamentsStoreContext = React.createContext();
export const TournamentsStoreProvider = ({children}) => {

    const store = useLocalStore(() => ({
        items: {},
        test: "test"
    }));

    return <TournamentsStoreContext.Provider value={store}>{children}</TournamentsStoreContext.Provider>
};
