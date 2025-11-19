import { useQuery } from "@tanstack/react-query";
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
