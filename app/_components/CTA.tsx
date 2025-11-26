"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(
      "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-blue-900">Sẵn Sàng Bắt Đầu?</h2>
          <p className="text-gray-600">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn giải pháp phù hợp
            nhất cho doanh nghiệp của bạn
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="mb-6 text-gray-900">Thông Tin Liên Hệ</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="text-gray-900">thongxuan327@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Điện Thoại</div>
                    <div className="text-gray-900">+84 971471796</div>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Địa Chỉ</div>
                    <div className="text-gray-900">
                      Tầng 15, Tòa nhà ABC
                      <br />
                      123 Nguyễn Huệ, Q.1
                      <br />
                      TP. Hồ Chí Minh
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-3">
                  Theo dõi chúng tôi
                </div>
                <div className="flex gap-3">
                  {["Facebook", "LinkedIn", "Twitter", "YouTube"].map(
                    (social, index) => (
                      <button
                        key={index}
                        className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 flex items-center justify-center transition-colors text-xs"
                      >
                        {social[0]}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-12 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="mb-6 text-gray-900">Gửi Tin Nhắn</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-gray-700 mb-2"
                    >
                      Họ và Tên <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Nguyễn Văn A"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-gray-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="email@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Số Điện Thoại
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="0123 456 789"
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    Nội Dung <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Cho chúng tôi biết thêm về dự án hoặc nhu cầu của bạn..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  Gửi Tin Nhắn
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
