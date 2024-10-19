"use client";
import { useRouter } from "next/navigation";

export const useNavigator = () => {
  const router = useRouter();

  return (path) => {
    if (path) {
      router.push(path);
    }
  };
};
