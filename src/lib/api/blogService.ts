
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";


export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${BASE_URL}/blog/all`, {
      method: "GET",
      credentials: "include" 
    });

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("text/html")) {
      const htmlError = await res.text();
      console.error("Backend returned HTML instead of JSON! Full HTML Response:", htmlError);
      throw new Error("Backend ne HTML error page bheja hai bhai, endpoints check karo!");
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch blogs.");
    
    return data;
  } catch (error: any) {
    console.error("BLOG_SERVICE_FETCH_ERROR:", error);
    throw error;
  }
};