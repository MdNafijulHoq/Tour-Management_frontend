import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation({
      query: (divisionInfo) => ({
        url: "/division/create",
        method: "POST",
        data: divisionInfo,
      }),
      invalidatesTags: ["DIVISION"],
    }),
    getDivisions: builder.query({
      query: () => ({
        url: "/division/",
        method: "GET",
      }),
      providesTags: ["DIVISION"],
      transformResponse: (response) => response.data,
    }),
    removeDivision: builder.mutation({
      query: (divisionId) => ({
        url: `/division/${divisionId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["DIVISION"],
    }),
  }),
});

export const {
  useAddDivisionMutation,
  useGetDivisionsQuery,
  useRemoveDivisionMutation,
} = divisionApi;
