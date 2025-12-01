"use client";

import { Search, Megaphone, Code, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

export function Products() {
  const router = useRouter();

  const services = [
    {
      icon: <Search className="text-blue-600" size={32} />,
      title: "Dịch Vụ SEO",
      description:
        "Tối ưu hóa công cụ tìm kiếm (SEO) giúp website của bạn xuất hiện top Google. Chúng tôi cung cấp dịch vụ SEO từ khóa, SEO tổng thể, và SEO nội dung chuyên nghiệp.",
      features: [
        "SEO từ khóa hiệu quả",
        "Phân tích đối thủ cạnh tranh",
        "Tối ưu On-page & Off-page",
        "Báo cáo chi tiết hàng tháng",
      ],
    },
    {
      icon: <Megaphone className="text-blue-600" size={32} />,
      title: "Quảng Cáo ADS",
      description:
        "Dịch vụ quảng cáo ADS chuyên nghiệp trên Google Ads, Facebook Ads. Tối ưu chi phí, tăng chuyển đổi và mang lại ROI cao cho doanh nghiệp.",
      features: [
        "Google Ads chuyên nghiệp",
        "Facebook & Instagram Ads",
        "Tối ưu chi phí quảng cáo",
        "A/B Testing hiệu quả",
      ],
    },
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Lập Trình Web",
      description:
        "Dịch vụ lập trình website chuẩn SEO, tốc độ tải nhanh, giao diện đẹp. Chúng tôi lập trình web responsive, bảo mật cao và thân thiện với công cụ tìm kiếm.",
      features: [
        "Website chuẩn SEO",
        "Responsive mọi thiết bị",
        "Tốc độ tải trang nhanh",
        "Bảo mật & Hosting miễn phí",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-wide">
            Dịch vụ của chúng tôi
          </span>
          <h2 className="mt-4 text-gray-900">
            Giải Pháp Digital Marketing <br />
            Toàn Diện
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Từ SEO, ADS đến lập trình web - chúng tôi cung cấp đầy đủ dịch vụ
            giúp doanh nghiệp của bạn phát triển mạnh mẽ trong môi trường kỹ
            thuật số.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="mb-4 text-gray-900">{service.title}</h3>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Zap
                      className="text-blue-600 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/service")}
                className="mt-8 w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Tìm hiểu thêm
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
