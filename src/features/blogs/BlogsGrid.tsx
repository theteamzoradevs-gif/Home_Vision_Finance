import { getBlogsList } from "@/lib/api/blogList";

export async function BlogsGrid() {
  const blogs = await getBlogsList();
  return blogs;
}
