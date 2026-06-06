const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";

/**
 * 🚀 SUBMIT NEW CONTACT ENQUIRY (POST)
 * T
 */
export const submitContactForm = async (plainFormDataObject: any) => {
  try {
    const res = await fetch(`${BASE_URL}/loan/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 🌟 FIX: Yahan 'headers' keyword ko sahi se lock kar diya hai
      },
      body: JSON.stringify(plainFormDataObject),
    });

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("text/html")) {
      throw new Error("Backend returned an HTML error page. Please check your endpoints!");
    }

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to submit contact enquiry.");

    return data;
  } catch (error) {
    console.error("CONTACT_SUBMIT_SERVICE_ERROR:", error);
    throw error;
  }
};