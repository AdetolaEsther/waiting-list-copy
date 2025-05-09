import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://ec2-34-228-59-83.compute-1.amazonaws.com/api/v1/",
    }),
    endpoints: (builder) => ({
        joinWaitlist: builder.mutation({
            query: (body) => ({
                url: "waitlist",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body,
            }),
        }),
    }),
});

export const { useJoinWaitlistMutation } = api;
