"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // thời gian animation
      once: false, // 🔥 Cho phép animation lặp lại khi scroll quay lại
      mirror: true, // animation chỉ chạy 1 lần
    });
  }, []);

  return <>{children}</>;
}
