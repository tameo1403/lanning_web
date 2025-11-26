import { Target, Lightbulb, Award } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-blue-900">Về Chúng Tôi</h2>
          <p className="text-gray-600">
            Được thành lập năm 2020, chúng tôi là công ty công nghệ hàng đầu tại
            Việt Nam, chuyên cung cấp các giải pháp chuyển đổi số toàn diện cho
            doanh nghiệp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100"
            data-aos="fade-up-right"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-blue-900">Sứ Mệnh</h3>
            <p className="text-gray-600 text-sm">
              Đồng hành cùng doanh nghiệp Việt trong hành trình chuyển đổi số,
              mang lại giá trị bền vững và phát triển vượt trội.
            </p>
          </div>

          <div
            data-aos="fade-down"
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-blue-900">Tầm Nhìn</h3>
            <p className="text-gray-600 text-sm">
              Trở thành đơn vị cung cấp giải pháp công nghệ hàng đầu Đông Nam Á,
              tiên phong trong đổi mới sáng tạo.
            </p>
          </div>

          <div
            data-aos="fade-up-left"
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-blue-900">Giá Trị Cốt Lõi</h3>
            <p className="text-gray-600 text-sm">
              Đổi mới, Chất lượng, Tận tâm và Trách nhiệm là những giá trị chúng
              tôi cam kết thực hiện trong mọi dự án.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
