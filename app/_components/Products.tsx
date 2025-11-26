"use client";

import { Button } from "./ui/button";
import { ArrowRight, ShoppingCart, Users, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "./figma/imageWithFallbck";

const products = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    description:
      "Nền tảng thương mại điện tử toàn diện, tích hợp thanh toán và quản lý đơn hàng thông minh",
    features: [
      "Đa kênh bán hàng",
      "Tích hợp thanh toán",
      "Quản lý kho",
      "Phân tích dữ liệu",
    ],
    color: "blue",
    dataAos: "fade-right",
    dataAosOffset: "300",
    dataAosEasing: "ease-in-sine",
  },
  {
    icon: Users,
    title: "Enterprise CRM",
    description:
      "Hệ thống quản lý quan hệ khách hàng giúp tối ưu hóa quy trình bán hàng và chăm sóc khách hàng",
    features: [
      "Quản lý khách hàng",
      "Tự động hóa marketing",
      "Báo cáo chi tiết",
      "Mobile friendly",
    ],
    color: "indigo",
    dataAos: "fade-down",
    dataAosOffset: "300",
    dataAosEasing: "linear",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Giải pháp phân tích và trực quan hóa dữ liệu kinh doanh để ra quyết định chính xác",
    features: [
      "Dashboard tùy chỉnh",
      "Real-time analytics",
      "AI predictions",
      "Export reports",
    ],
    color: "purple",
    dataAos: "fade-left",
    dataAosOffset: "300",
    dataAosEasing: "ease-out-cubic",
  },
];

export function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full mb-4 text-sm">
            Sản Phẩm & Dịch Vụ
          </div>
          <h2 className="mb-4 text-blue-900">Giải Pháp Của Chúng Tôi</h2>
          <p className="text-gray-600">
            Các sản phẩm được thiết kế để giải quyết các thách thức kinh doanh
            thực tế
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                data-aos={product.dataAos}
                data-aos-offset={product.dataAosOffset}
                data-aos-easing={product.dataAosEasing}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`h-2 bg-gradient-to-r from-${product.color}-400 to-${product.color}-600`}
                ></div>
                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${product.color}-100 text-${product.color}-600 mb-5`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-gray-900">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-${product.color}-500 mr-2`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                  >
                    Tìm Hiểu Thêm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="mb-8 text-center text-blue-900">Dịch Vụ Khác</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="flex items-start gap-4 p-6 bg-white rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">Tư Vấn Chuyển Đổi Số</h4>
                  <p className="text-sm text-gray-600">
                    Đánh giá và xây dựng lộ trình chuyển đổi số phù hợp
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="flex items-start gap-4 p-6 bg-white rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">Bảo Trì & Hỗ Trợ</h4>
                  <p className="text-sm text-gray-600">
                    Dịch vụ hỗ trợ 24/7 và bảo trì hệ thống liên tục
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="flex items-start gap-4 p-6 bg-white rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">Đào Tạo Nhân Sự</h4>
                  <p className="text-sm text-gray-600">
                    Chương trình đào tạo chuyên sâu về công nghệ
                  </p>
                </div>
              </div>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="flex items-start gap-4 p-6 bg-white rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-2 text-gray-900">Tích Hợp Hệ Thống</h4>
                  <p className="text-sm text-gray-600">
                    Kết nối liền mạch với các hệ thống hiện có
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
