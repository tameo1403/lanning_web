export function Partners() {
  const partners = [
    "VIETTEL", "FPT", "VNPT", "MOMO", "TIKI", "SHOPEE", 
    "VINGROUP", "TECHCOMBANK", "MB BANK", "VIETCOMBANK", "LAZADA", "SENDO"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full mb-4 text-sm">
            Đối Tác
          </div>
          <h2 className="mb-4 text-blue-900">Đối Tác & Khách Hàng</h2>
          <p className="text-gray-600">
            Được tin tưởng bởi hơn 200 doanh nghiệp và tổ chức hàng đầu tại Việt Nam
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <span className="text-xs">{partner.substring(0, 2)}</span>
                  </div>
                  <div className="text-gray-700 text-xs group-hover:text-blue-600 transition-colors">
                    {partner}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                Giải pháp của họ đã giúp chúng tôi tối ưu hóa quy trình kinh doanh và tăng doanh thu 40% trong 6 tháng đầu. Đội ngũ chuyên nghiệp và tận tâm.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                  NM
                </div>
                <div>
                  <div className="text-gray-900">Nguyễn Minh</div>
                  <div className="text-sm text-gray-500">CEO, E-Commerce Company</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                Công nghệ hiện đại, giao diện thân thiện và dễ sử dụng. Đặc biệt là dịch vụ hỗ trợ 24/7 rất tuyệt vời. Rất hài lòng với sự lựa chọn này.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white">
                  TL
                </div>
                <div>
                  <div className="text-gray-900">Trần Lan</div>
                  <div className="text-sm text-gray-500">CTO, FinTech Startup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
