const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";
 
export const getAllTestimonials = async () => {
  try {
    const response = await fetch(`${BASE_URL}/testimonials/gettestimonials`, {
      method: "GET",
      credentials: "include", // Auth cookie bhejne ke liye
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "Testimonials fetch nahi ho paaye.");
    }
    
    return data;
  } catch (error) {
    console.error("TESTIMONIAL_SERVICE_FETCH_ERROR:", error);
    throw error;
  }
};