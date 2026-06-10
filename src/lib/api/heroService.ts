const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";

export const getHeroSection = async () => {
  const response = await fetch(`${BASE_URL}/hero/get`);
  return response.json();
};
