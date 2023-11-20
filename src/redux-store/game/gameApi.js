import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const gameApi = createApi({
   reducerPath: 'gameApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.miraplay.cloud/games/',
   }),
   endpoints: (builder) => ({
      getGames: builder.query({
         query(params) {
            const body = {
               page: params.page,
               isFreshGamesFirst: true,
               genre: params.genre,
               gamesToShow: 9,
            };
            return {
               url: `/by_page`,
               method: 'POST',
               body,
            };
         },
         invalidatesTags: ['Game'],
      }),
   }),
});

export const { useGetGamesQuery } = gameApi;
