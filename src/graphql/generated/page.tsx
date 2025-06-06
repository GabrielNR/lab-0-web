import * as Types from './graphql';

import * as Apollo from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import type React from 'react';
import { ApolloClientContext, getApolloClient } from '../../lib/withApollo';
import * as Operations from './graphql';
export async function getServerPageMe
    (options: Omit<Apollo.QueryOptions<Types.MeQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.MeQuery>({ ...options, query: Operations.MeDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useMe = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.MeQuery, Types.MeQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.MeDocument);
};
export type PageMeComp = React.FC<{data?: Types.MeQuery, error?: Apollo.ApolloError}>;
export const withPageMe = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.MeQuery, Types.MeQueryVariables>) => (WrappedComponent:PageMeComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.MeDocument)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrMe = {
      getServerPage: getServerPageMe,
      withPage: withPageMe,
      usePage: useMe,
    }
export async function getServerPageGetProducts
    (options: Omit<Apollo.QueryOptions<Types.GetProductsQueryVariables>, 'query'>, ctx: ApolloClientContext ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetProductsQuery>({ ...options, query: Operations.GetProductsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetProducts = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetProductsQuery, Types.GetProductsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetProductsDocument);
};
export type PageGetProductsComp = React.FC<{data?: Types.GetProductsQuery, error?: Apollo.ApolloError}>;
export const withPageGetProducts = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetProductsQuery, Types.GetProductsQueryVariables>) => (WrappedComponent:PageGetProductsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(Operations.GetProductsDocument)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrGetProducts = {
      getServerPage: getServerPageGetProducts,
      withPage: withPageGetProducts,
      usePage: useGetProducts,
    }