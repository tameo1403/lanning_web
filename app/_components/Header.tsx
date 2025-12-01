"use client";

import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const items: MenuProps["items"] = [
  {
    key: "0",
    label: (
      <Link href="/">
        <Image
          src="/icon.ico"
          alt=""
          width={100}
          height={100}
          className="w-[80px]"
        />
      </Link>
    ),
  },
  {
    key: "1",
    label: (
      <Link href="/" className="md:text-[20px] text-[13px] no-underline">
        Trang chủ
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href="/service" className="md:text-[20px] text-[13px] no-underline">
        Dịch vụ
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href="/contact" className="md:text-[20px] text-[13px] no-underline">
        Liên hệ
      </Link>
    ),
  },
];

const HeaderPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full z-50">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          top: 0,
          zIndex: 50,
          width: "100%",
          transition: "background-color 0.3s ease",
          backgroundColor: isScrolled ? "rgba(255,255,255,0.7)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
        }}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          className="w-full h-[80px] flex items-center bg-transparent"
        />
      </Header>
    </div>
  );
};

export default HeaderPage;
