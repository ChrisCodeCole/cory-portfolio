import React from 'react';

const AppContext = React.createContext({
    theme : {
         appColor: 'red',
    }
});

export default AppContext;