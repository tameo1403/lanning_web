"use client";

import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../_components/figma/imageWithFallbck";

export function Features() {
  const seoFeatures = [
    "Nghiên cứu từ khóa SEO chuyên sâu",
    "Tối ưu nội dung chuẩn SEO Google",
    "Link building chất lượng cao",
    "Tăng traffic tự nhiên bền vững",
  ];

  const adsFeatures = [
    "Chiến lược ADS hiệu quả",
    "Tối ưu chi phí quảng cáo thông minh",
    "Targeting khách hàng chính xác",
    "Tăng tỷ lệ chuyển đổi đáng kể",
  ];

  const webFeatures = [
    "Lập trình website theo yêu cầu",
    "Code sạch, chuẩn SEO technical",
    "Tích hợp công nghệ mới nhất",
    "Bảo trì và hỗ trợ 24/7",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* SEO Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-blue-600 uppercase tracking-wide">
              Dịch vụ SEO
            </span>
            <h2 className="mt-4 mb-6 text-gray-900">
              Đưa Website Lên Top Google Với SEO Chuyên Nghiệp
            </h2>
            <p className="text-gray-600 mb-6">
              Dịch vụ SEO của chúng tôi giúp website của bạn xuất hiện trên
              trang đầu Google, tăng lượng truy cập tự nhiên và thu hút khách
              hàng tiềm năng. Chúng tôi áp dụng các kỹ thuật SEO mới nhất, từ
              SEO on-page, SEO off-page đến SEO technical.
            </p>
            <ul className="space-y-4">
              {seoFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ImageWithFallback
              src="/imageService/image3.jpg"
              alt="SEO Analytics"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>

        {/* ADS Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <ImageWithFallback
              src="/imageService/image2.jpg"
              alt="ADS Marketing"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-blue-600 uppercase tracking-wide">
              Quảng cáo ADS
            </span>
            <h2 className="mt-4 mb-6 text-gray-900">
              Tăng Doanh Số Nhanh Chóng Với Quảng Cáo ADS
            </h2>
            <p className="text-gray-600 mb-6">
              Dịch vụ quảng cáo ADS chuyên nghiệp giúp bạn tiếp cận đúng khách
              hàng, đúng thời điểm. Chúng tôi quản lý và tối ưu chiến dịch
              Google Ads, Facebook Ads, Instagram Ads để mang lại hiệu quả tối
              đa với chi phí hợp lý.
            </p>
            <ul className="space-y-4">
              {adsFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Web Development Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 uppercase tracking-wide">
              Lập trình web
            </span>
            <h2 className="mt-4 mb-6 text-gray-900">
              Lập Trình Website Chuẩn SEO, Hiệu Suất Cao
            </h2>
            <p className="text-gray-600 mb-6">
              Dịch vụ lập trình web của chúng tôi không chỉ tạo ra website đẹp
              mắt mà còn được tối ưu hoàn toàn cho SEO. Website được lập trình
              với code sạch, tốc độ tải nhanh, responsive trên mọi thiết bị và
              thân thiện với công cụ tìm kiếm.
            </p>
            <ul className="space-y-4">
              {webFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ImageWithFallback
              src="/imageService/image1.jpg"
              alt="Web Development"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
