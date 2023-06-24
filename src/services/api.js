import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://api.green-api.com/";

export const api = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Message"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),

  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: (args) => {
        const { idInstance, apiTokenInstance } = args;

        return {
          url: `waInstance${idInstance}/getSettings/${apiTokenInstance}`,
        };
      },
    }),

    sendMessage: builder.mutation({
      query: (args) => {
        const { idInstance, apiTokenInstance, chatId, message } = args;
        return {
          url: `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
          method: "POST",
          body: { chatId: chatId, message: message },
        };
      },
    }),

    getMessage: builder.query({
      query: (args) => {
        const { idInstance, apiTokenInstance } = args;
        return {
          url: `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
          method: "GET",
        };
      },
      providesTags: ["Message"],
      
    }),

    delMessage: builder.mutation({
      query: (args) => {
        const { idInstance, apiTokenInstance, receiptId } = args;
        return {
          url: `waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Message"],
    }),
  }),
});

export const {
  useGetTokenMutation,
  useSendMessageMutation,
  useGetMessageQuery,
  useDelMessageMutation,
} = api;
