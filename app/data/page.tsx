import ViewPosts from "@/components/Posts/ViewPosts"
import { Button } from "@/components/ui/button"

const Data = () => {
  return (
    <div className="p-4 space-y-3">
        <h1 className="text-xl text-teal-600 font-bold">All Posts</h1>
        <Button className="bg-teal-600 hover:bg-teal-700 cursor-pointer">Create Post</Button>
        <ViewPosts/>
    </div>
  )
}

export default Data
