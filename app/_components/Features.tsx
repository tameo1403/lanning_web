"use client";

import { Cloud, Shield, Zap, Database, Brain, Code } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Hạ tầng đám mây linh hoạt, mở rộng dễ dàng theo nhu cầu doanh nghiệp",
    aos: "zoom-in-right",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Ứng dụng trí tuệ nhân tạo để tự động hóa và tối ưu quy trình kinh doanh",
    aos: "zoom-in-down",
  },
  {
    icon: Shield,
    title: "Bảo Mật Cao",
    description:
      "Đảm bảo an toàn dữ liệu với công nghệ mã hóa và bảo mật tiên tiến",
    aos: "zoom-in-left",
  },
  {
    icon: Database,
    title: "Big Data",
    description:
      "Xử lý và phân tích dữ liệu lớn để đưa ra quyết định chính xác",
    aos: "zoom-out-right",
  },
  {
    icon: Zap,
    title: "Hiệu Năng Cao",
    description:
      "Tối ưu hóa tốc độ và hiệu suất cho trải nghiệm người dùng tốt nhất",
    aos: "zoom-out-down",
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Phát triển giải pháp tùy chỉnh phù hợp với từng yêu cầu cụ thể",
    aos: "zoom-out-left",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full mb-4 text-sm">
            Công Nghệ
          </div>
          <h2 className="mb-4 text-blue-900">Công Nghệ & Tính Năng Nổi Bật</h2>
          <p className="text-gray-600">
            Chúng tôi áp dụng các công nghệ hiện đại nhất để mang lại giải pháp
            tối ưu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-aos={feature.aos}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
