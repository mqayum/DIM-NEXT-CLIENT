import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BACKEND_URL} from "../config/constants";
import {TGetProducts} from "../types/types";

export const visitorApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BACKEND_URL
    }),

    reducerPath: "visitorApi",
    tagTypes: ["allProducts"],

    refetchOnFocus: true,
    // refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,

    endpoints: (builder) => {
        return {
            getHomeProducts: builder.query<TGetProducts, void>({
                query: () => `/products?page=1`,
                providesTags: ["allProducts"]
            }),
            getProductsByPage: builder.query<TGetProducts, number>({
                query: (page:number) => `/products?page=${page}`,
                providesTags: ["allProducts"]
            }),
        }
    }
})
export const {
    useGetHomeProductsQuery,
    useGetProductsByPageQuery
} = visitorApi;