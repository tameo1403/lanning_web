'use client'

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32 gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm">Đổi mới sáng tạo cho tương lai số</span>
            </div>
            
            <h1 className="mb-6 text-white">
              Giải Pháp Công Nghệ<br />
              Thông Minh Cho Doanh Nghiệp
            </h1>
            
            <p className="mb-8 text-blue-50 opacity-90 max-w-xl mx-auto lg:mx-0">
              Chúng tôi xây dựng các giải pháp công nghệ tiên tiến, giúp doanh nghiệp Việt Nam chuyển đổi số và phát triển bền vững trong kỷ nguyên 4.0
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg"
                onClick={scrollToContact}
              >
                Liên Hệ Ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 hover:text-white"
              >
                Tìm Hiểu Thêm
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div>
                <div className="text-white mb-1">500+</div>
                <div className="text-blue-200 text-sm">Dự Án Hoàn Thành</div>
              </div>
              <div>
                <div className="text-white mb-1">200+</div>
                <div className="text-blue-200 text-sm">Khách Hàng Tin Tưởng</div>
              </div>
              <div>
                <div className="text-white mb-1">98%</div>
                <div className="text-blue-200 text-sm">Hài Lòng</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1761435922542-f25f1c5fee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjM5OTIxNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology Innovation"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
