import React, {useState} from 'react';
import {PageContext} from "./index";


const ContextWrapper = ({children}) => {
    const [page , setPage] = useState(true)

    return (
      <PageContext.Provider value = {{page, setPage}}>
          {children}
      </PageContext.Provider>
    );
};

export default ContextWrapper;