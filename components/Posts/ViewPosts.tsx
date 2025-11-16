'use client'
import { useGetPosts } from "@/api/postsApi"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";

const ViewPosts = () => {
  const {data:posts} = useGetPosts();
  return (
    <div>
        <div className="relative">
            <CiSearch className="absolute top-2 " />
            <Input type="search"/>
        </div>
        <Table>
            <TableCaption>A list of your posts.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Post ID</TableHead>
                    <TableHead className="">Post Title</TableHead>
            
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts?.map((post:{id:number,title:string,body:string}) => 
                    <TableRow key={post.id}>
                        <TableCell>{post.id}</TableCell>
                        <TableCell>{post.title}</TableCell>
                       
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </div>
  )
}

export default ViewPosts
