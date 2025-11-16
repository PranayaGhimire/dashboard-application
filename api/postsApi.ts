import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseUrl ="https://jsonplaceholder.typicode.com";

export const useGetPosts = () =>
    useQuery({
        queryKey:['posts'],
        queryFn: async () => {
            const response = await axios.get(`${baseUrl}/posts`);
            return response.data;
        }
    })

export const useCreatePost = () =>
    useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(`${baseUrl}/posts`,data);
            return response.data;
        }
    })

export const useUpdatePost = () =>
    useMutation({
        mutationFn: async ({id,data}:{id:string,data}) => {
            const response = await axios.post(`${baseUrl}/posts/${id}`,data);
            return response.data;
        }
    })

export const useDeletePost = () =>
    useMutation({
        mutationFn: async (id:number) => {
            const response = await axios.delete(`${baseUrl}/posts/${id}`);
            return response.data;
        }
    })