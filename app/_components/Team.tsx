import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Nguyễn Văn An",
    position: "CEO & Co-Founder",
    bio: "15 năm kinh nghiệm trong ngành công nghệ, từng làm việc tại Silicon Valley",
    initial: "NA"
  },
  {
    name: "Trần Thị Bình",
    position: "CTO & Co-Founder",
    bio: "Chuyên gia về AI/ML, tốt nghiệp Tiến sĩ tại Stanford University",
    initial: "TB"
  },
  {
    name: "Lê Minh Cường",
    position: "CPO",
    bio: "10 năm kinh nghiệm phát triển sản phẩm cho các startup công nghệ",
    initial: "LC"
  },
  {
    name: "Phạm Thu Dung",
    position: "Head of Design",
    bio: "Chuyên gia UX/UI với nhiều giải thưởng thiết kế quốc tế",
    initial: "PD"
  }
];

export function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full mb-4 text-sm">
            Đội Ngũ
          </div>
          <h2 className="mb-4 text-blue-900">Đội Ngũ Sáng Lập</h2>
          <p className="text-gray-600">
            Những người tiên phong trong việc đưa công nghệ tiên tiến đến với doanh nghiệp Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-5xl">{member.initial}</span>
                </div>
              </div>
              
              <h3 className="mb-1 text-gray-900">{member.name}</h3>
              <div className="text-blue-600 text-sm mb-3">{member.position}</div>
              <p className="text-gray-600 text-sm mb-4 px-2">
                {member.bio}
              </p>
              
              <div className="flex items-center justify-center gap-3">
                <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 flex items-center justify-center transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 flex items-center justify-center transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Company Culture */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="mb-6">Tham Gia Cùng Chúng Tôi</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Chúng tôi luôn tìm kiếm những tài năng xuất sắc để cùng xây dựng tương lai công nghệ Việt Nam. 
                Môi trường làm việc năng động, sáng tạo và nhiều cơ hội phát triển.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div>
                  <div className="mb-1">100+</div>
                  <div className="text-blue-200 text-sm">Nhân Viên</div>
                </div>
                <div>
                  <div className="mb-1">20+</div>
                  <div className="text-blue-200 text-sm">Quốc Tịch</div>
                </div>
                <div>
                  <div className="mb-1">4.8/5</div>
                  <div className="text-blue-200 text-sm">Đánh Giá Glassdoor</div>
                </div>
              </div>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Xem Vị Trí Tuyển Dụng
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
