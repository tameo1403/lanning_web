"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image src="/icon.ico" alt="" width={100} height={100} />
            <div className="mb-4 text-white">TechStartup</div>
            <p className="text-sm text-gray-400 mb-4">
              Giải pháp công nghệ thông minh cho doanh nghiệp Việt Nam
            </p>
            <div className="text-sm text-gray-400">
              © 2025 TechStartup.vn
              <br />
              All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Đội Ngũ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tuyển Dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tin Tức
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Phát Triển Phần Mềm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tư Vấn Chuyển Đổi Số
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  AI & Data Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Trung Tâm Hỗ Trợ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tài Liệu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Chính Sách Bảo Mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Điều Khoản Sử Dụng
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">Made with ❤️ in Vietnam</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
