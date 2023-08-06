import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux"
import searchReducer from "./features/search/searchSlice";

const customRender = (ui, options) => {
    const store = configureStore({
        reducer: {
            search: searchReducer
        }
    })

    const Wrapper = ({children}) => {
        return <Provider store={ store }>
            { children }
        </Provider>
    };

    return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';

export { customRender as render };