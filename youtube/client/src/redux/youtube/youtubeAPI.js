import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const ytHeaders =   {
  'X-RapidAPI-Key': '16f261127cmsh2e558be7ac30666p12c5c5jsn0a12b4502fb9',
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}

// const category="New"
// const params = { q: "desp", hl: "en", gl: "US" };
const createRequest = (url) => ({ url, headers: ytHeaders});
export const youtubeAPI = createApi({
  
  reducerPath: "youtubeAPI",

  baseQuery: fetchBaseQuery({ baseUrl:"https://youtube-v31.p.rapidapi.com" }),

  endpoints: (builder) => ({

    getYoutubeData: builder.query({

      query: ({Category}) => createRequest (`search?part=snippet&q=${Category}&maxResults=50`),

    }),
    getYoutubeRelatedData: builder.query({

      query: ({id}) => createRequest (`search?part=snippet&relatedToVideoId=${id}&type=video`),
    }),

    getYoutubeDetailData: builder.query({
      
      query: ({id}) => createRequest (`videos?part=snippet,statistics&id=${id}`),
    }),
    getYoutubeSearchData: builder.query({
      
      query: ({searchTerm}) => createRequest (`search?part=snippet&q=${searchTerm}&maxResults=50`),
    }),
    getYoutubeChannelData: builder.query({
      
      query: ({id}) => createRequest (`channels?part=snippet&id=${id}`),
    }),
    getYoutubeChannelVideoData: builder.query({
      
      query: ({id}) => createRequest (`search?channelId=${id}&part=snippet&order=date`),
    }),

  }),
});
export const { useGetYoutubeDataQuery,useGetYoutubeRelatedDataQuery,useGetYoutubeDetailDataQuery,useGetYoutubeSearchDataQuery,useGetYoutubeChannelDataQuery, useGetYoutubeChannelVideoDataQuery} = youtubeAPI;

// getExchanges



// useGetExchangesQuery
