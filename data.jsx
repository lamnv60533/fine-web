// FINE Auditing — content
// All copy from FINE 2026 Profile.pdf and partners profile doc.

const NAV = [
  { page: "home",     href: "index.html",         label: "Home",         vn: "Trang chủ" },
  { page: "about",    href: "about.html",         label: "About Us",     vn: "Về chúng tôi" },
  { page: "team",     href: "our-team.html",      label: "Our Team",     vn: "Đội ngũ" },
  { page: "services", href: "our-services.html",  label: "Our Services", vn: "Dịch vụ" },
  { page: "partners", href: "our-partners.html",  label: "Our Partners", vn: "Đối tác" },
];

const VALUES = [
  {
    word: "Integrity",
    vn: "Chính trực",
    initial: "I",
    blurb:
      "Integrity is the foundation of our professional conduct. We uphold the highest ethical standards in every engagement, fostering trust and confidence among our clients and stakeholders.",
    blurb_vn:
      "Chúng tôi đề cao tính chính trực như giá trị cốt lõi nền tảng của nghề kiểm toán, làm cơ sở xây dựng niềm tin và sự tín nhiệm từ khách hàng và các bên liên quan.",
  },
  {
    word: "Fortunate",
    vn: "Thịnh vượng",
    initial: "F",
    blurb:
      "We transform financial data into meaningful insights, empowering clients to identify opportunities, manage risks, and achieve sustainable growth.",
    blurb_vn:
      "Chuyển hóa dữ liệu tài chính thành tăng trưởng bền vững cho khách hàng và các bên liên quan.",
  },
  {
    word: "Everlasting",
    vn: "Trường tồn",
    initial: "E",
    blurb:
      "FINE partners with clients throughout the business lifecycle, focusing on long-term solutions that ensure stability, resilience, and enduring success.",
    blurb_vn:
      "Đồng hành cùng khách hàng qua mọi chu kỳ kinh doanh — bền vững, lâu dài.",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Audit & Assurance",
    title_vn: "Kiểm toán & Đảm bảo",
    tag: "Audit",
    short:
      "Comprehensive assurance services for improved accuracy and sustainable financial outcomes.",
    short_vn:
      "Cung cấp các dịch vụ bảo đảm hoàn chỉnh — cải thiện tính chính xác và sự bền vững tài chính.",
    bullets: [
      "Statutory financial audit (VAS / IFRS)",
      "Group reporting packages",
      "Due diligence for M&A",
      "Internal audit & IC review",
      "Construction & project audits",
    ],
    bullets_vn: [
      "Kiểm toán BCTC theo VAS/IFRS",
      "Báo cáo hợp nhất tập đoàn",
      "Thẩm định tài chính (DD) cho M&A",
      "Kiểm toán nội bộ & kiểm soát nội bộ",
      "Kiểm toán xây dựng cơ bản",
    ],
  },
  {
    num: "02",
    title: "Taxation",
    title_vn: "Tư vấn thuế",
    tag: "Tax",
    short:
      "Addressing complex tax matters to deliver optimal tax outcomes.",
    short_vn:
      "Xử lý các vấn đề thuế phức tạp, mang lại hiệu quả tối ưu thuế.",
    bullets: [
      "Tax compliance: VAT, CIT, PIT, FCT",
      "Tax health-check & optimisation",
      "Transfer pricing documentation",
      "Tax authority liaison",
      "Expatriate PIT advisory",
    ],
    bullets_vn: [
      "Kê khai & quyết toán thuế",
      "Rà soát & tối ưu thuế",
      "Hồ sơ giao dịch liên kết",
      "Làm việc cơ quan thuế",
      "Tư vấn thuế TNCN cho người nước ngoài",
    ],
  },
  {
    num: "03",
    title: "Accountancy",
    title_vn: "Kế toán",
    tag: "Accounting",
    short:
      "Providing the clean numbers, on time — aim to build a finance function you can rely on.",
    short_vn:
      "Số liệu tài chính rõ ràng, báo cáo đúng hạn — xây dựng bộ phận tài chính đáng tin cậy.",
    bullets: [
      "Full-service bookkeeping",
      "Accounting system set-up & migration",
      "Monthly / quarterly / annual reporting",
      "Statutory financial statements",
      "Management reporting dashboards",
    ],
    bullets_vn: [
      "Dịch vụ kế toán trọn gói",
      "Thiết lập & chuyển đổi hệ thống kế toán",
      "Lập báo cáo tháng/quý/năm",
      "Lập báo cáo tài chính năm",
      "Báo cáo quản trị theo yêu cầu",
    ],
  },
  {
    num: "04",
    title: "Payroll",
    title_vn: "Tiền lương",
    tag: "Payroll",
    short:
      "Confidential, accurate and compliant — payroll the way it should be.",
    short_vn:
      "Bảo mật, chính xác, tuân thủ — giải pháp tiền lương chuyên nghiệp.",
    bullets: [
      "Monthly payroll computation",
      "Social & health insurance filing",
      "PIT finalisation & reporting",
      "Labour contract administration",
      "Payroll compliance advisory",
    ],
    bullets_vn: [
      "Tính lương hàng tháng",
      "Khai báo BHXH · BHYT · BHTN",
      "Quyết toán thuế TNCN",
      "Quản lý hợp đồng lao động",
      "Tư vấn tuân thủ lao động",
    ],
  },
  {
    num: "05",
    title: "Business Set-up",
    title_vn: "Thành lập doanh nghiệp",
    tag: "Set-up",
    short:
      "We smooth your entry into Vietnam — from first filing to first month-end.",
    short_vn:
      "Thuận lợi, hiệu quả, tuân thủ — đồng hành cùng bạn gia nhập thị trường Việt Nam.",
    bullets: [
      "Entity & licence structuring",
      "FDI entry advisory",
      "Representative office set-up",
      "Partnership & JV registration",
      "Post-set-up tax & accounting",
    ],
    bullets_vn: [
      "Cấu trúc pháp lý & giấy phép",
      "Tư vấn đầu tư nước ngoài",
      "Thành lập văn phòng đại diện",
      "Đăng ký thành lập hợp danh & liên doanh",
      "Kế toán · thuế sau thành lập",
    ],
  },
  {
    num: "06",
    title: "M&A Advisory",
    title_vn: "Tư vấn M&A",
    tag: "M&A",
    short:
      "Ideas that create enduring value — from first meeting to day-one integration.",
    short_vn:
      "Ý tưởng tạo giá trị bền vững — từ khởi điểm giao dịch đến tích hợp hậu sáp nhập.",
    bullets: [
      "Buy-side / sell-side advisory",
      "Financial & tax due diligence",
      "Valuation & financial modelling",
      "Deal structuring & negotiation",
      "Post-merger integration",
    ],
    bullets_vn: [
      "Tư vấn bên mua / bên bán",
      "Thẩm định tài chính & thuế",
      "Định giá & mô hình tài chính",
      "Cấu trúc giao dịch & đàm phán",
      "Tích hợp hậu sáp nhập",
    ],
  },
];

const TEAM = [
  {
    name: "Nguyen Thi My Chau",
    name_vn: "Nguyễn Thị Mỹ Châu",
    role: "Managing Partner",
    role_vn: "Giám đốc Điều hành",
    quals: "MFB, CPA · Member of VACPA",
    years: "17+",
    photo: "assets/team/Chau.jpg",
    initials: "MC",
    email: "chauntm@fineaudit.vn",
    phone: "+84 909 692 900",
    bio:
      "With over 17 years of experience in auditing, complemented by a solid foundation in accounting, tax, and finance, Ms. Chau has led numerous large-scale audit engagements for both local and international clients. She also advises foreign investors in navigating market entry and establishing operations in Vietnam.",
    bio_vn:
      "Với hơn 17 năm kinh nghiệm trong lĩnh vực kiểm toán, cùng nền tảng vững chắc về kế toán, thuế và tài chính, Bà Châu đã trực tiếp dẫn dắt nhiều dự án kiểm toán quy mô lớn cho các doanh nghiệp trong và ngoài nước.",
  },
  {
    name: "Do Thi Huong",
    name_vn: "Đỗ Thị Hường",
    role: "Vice Director",
    role_vn: "Phó Giám đốc",
    quals: "B.A, CPA · Member of VACPA",
    years: "20+",
    photo: "assets/team/Huong.jpg",
    initials: "DH",
    email: "huongdt@fineaudit.vn",
    phone: "+84 91 785 1057",
    bio:
      "With a strong professional foundation in accounting and auditing and over 20 years of experience, Ms. Huong is highly trusted by clients for audit, advisory, and specialized training services.",
    bio_vn:
      "Nền tảng chuyên môn vững chắc về kế toán, kiểm toán cùng hơn 20 năm kinh nghiệm, Bà Hường được khách hàng tin tưởng trong các hoạt động kiểm toán, tư vấn và đào tạo chuyên sâu.",
  },
  {
    name: "Luong Quy Hien",
    name_vn: "Lương Quý Hiền",
    role: "Audit Director",
    role_vn: "Giám đốc Kiểm toán",
    quals: "B.A, CPA · Member of VACPA",
    years: "15+",
    photo: "assets/team/Hien.png",
    initials: "LH",
    email: "hienlq@fineaudit.vn",
    phone: "+84 93 771 9328",
    bio:
      "With over 15 years of experience in auditing, Ms. Hien has been involved in numerous audit and advisory engagements for both domestic and international clients. With strong language skills, a clear analytical mindset, and a professional working style, she consistently supports clients in ensuring regulatory compliance and enhancing operational efficiency in Vietnam.",
    bio_vn:
      "Với hơn 15 năm kinh nghiệm trong lĩnh vực kiểm toán, Bà Hiền đã tham gia nhiều hoạt động kiểm toán và tư vấn cho doanh nghiệp trong và ngoài nước.",
  },
  {
    name: "Nguyen Le Hoang Minh",
    name_vn: "Nguyễn Lê Hoàng Minh",
    role: "Advisory Director",
    role_vn: "Giám đốc Tư vấn",
    quals: "B.A",
    years: "19+",
    photo: "assets/team/Minh.jpg",
    initials: "HM",
    email: "minhnlh@fineaudit.vn",
    phone: "+84 6267 1168",
    bio:
      "Mr. Minh has over 19 years of experience in corporate finance, financial advisory, tax and accounting advisory. His extensive experience affords him the ability to assist clients in maximizing tax benefits and minimizing clients' tax obligations.",
    bio_vn:
      "Với hơn 19 năm kinh nghiệm trong lĩnh vực tài chính doanh nghiệp, tư vấn tài chính, tư vấn thuế và kế toán, Ông Minh đã đồng hành cùng nhiều doanh nghiệp trong việc tối ưu hiệu quả tài chính.",
  },
  {
    name: "Le Trong Dai",
    name_vn: "Lê Trọng Đãi",
    role: "Advisory Director",
    role_vn: "Giám đốc Tư vấn",
    quals: "B.A",
    years: "17+",
    photo: "assets/team/Dai.png",
    initials: "LD",
    email: "dailt@fineaudit.vn",
    phone: "+84 97 806 0306",
    bio:
      "Mr. Dai has over 17 years of experience in accounting and tax advisory. He specializes in guiding clients on how to build and operate effective accounting systems, ensuring full compliance with tax regulations.",
    bio_vn:
      "Ông Đãi có hơn 17 năm kinh nghiệm trong lĩnh vực kế toán và tư vấn thuế. Ông là chuyên gia định hướng cho khách hàng cách vận hành bộ máy kế toán hiệu quả.",
  },
  {
    name: "Dang Tran Hung",
    name_vn: "Đặng Trần Hùng",
    role: "Advisory Director",
    role_vn: "Giám đốc Tư vấn",
    quals: "B.A",
    years: "17+",
    photo: "assets/team/Hung.jpg",
    initials: "DH",
    email: "hungdt@fineaudit.vn",
    phone: "+84 978 377 255",
    bio:
      "Mr. Hung has over 17 years of experience in financial services, with deep expertise in due diligence, strategic corporate finance, M&A, and financial restructuring. As a senior financial expert, he has successfully supported numerous clients in attracting funding and valuable investment opportunities.",
    bio_vn:
      "Ông Hùng có hơn 17 năm kinh nghiệm trong lĩnh vực dịch vụ tài chính, với chuyên môn sâu về soát xét thẩm định, tài chính doanh nghiệp chiến lược, M&A, tái cấu trúc tài chính.",
  },
];

const CLIENTS = [
  { name: "Gunzetal", logo: "assets/clients/Gunzetal.jpg", sector: "Manufacturing", url: "http://www.gunzetal.com/" },
  { name: "Mass", logo: "assets/clients/Mass.jpg", sector: "Manufacturing", url: "http://www.mass.co.th/home" },
  { name: "Cotecna", logo: "assets/clients/Cotecna.jpg", sector: "Inspection", url: "https://www.cotecna.com/en" },
  { name: "Glandcore", logo: "assets/clients/Glandcore.jpg", sector: "Trading", url: "https://glandcore.com.vn/" },
  { name: "Mentfield", logo: "assets/clients/Mentfield.jpg", sector: "Logistics", url: "http://www.mentfield.com/" },
  { name: "ezFly", logo: "assets/clients/GoHappy.jpg", sector: "Travel", url: "https://ezfly.com/" },
  { name: "EMM", logo: "assets/clients/Emm.jpg", sector: "Industrial", url: "https://elektrim.com.vn/" },
  { name: "Nankai", logo: "assets/clients/Nankai.jpg", sector: "Industrial", url: "https://www.aglc.co.jp/" },
  { name: "Lautan", logo: "assets/clients/Lautan.jpg", sector: "Trading", url: "https://lautan-luas.com.vn/vi/" },
  { name: "Caritas Vietnam", logo: "assets/clients/Caritas.jpg", sector: "NGO", url: "https://caritasvietnam.org/" },
  { name: "Việt Trung", logo: "assets/clients/VietTrung.jpg", sector: "Manufacturing", url: "https://viettrung.com/" },
  { name: "Bita's", logo: "assets/clients/Bitas.jpg", sector: "Footwear", url: "https://bitas.com.vn/" },
  { name: "TVE / Tri Việt", logo: "assets/clients/TriViet.jpg", sector: "Services", url: "https://trivietco.vn/" },
  { name: "Fillon Technologies", logo: "assets/clients/Fillon.jpg", sector: "Technology", url: "https://www.fillontech.com/en/corporate/homepage/" },
  { name: "Daco Logistics", logo: "assets/clients/Daco.jpg", sector: "Logistics", url: "https://dacologistics.com/vi/home/" },
  { name: "Kido Group", logo: "assets/clients/Kido.jpg", sector: "F&B", url: "https://www.kdc.vn/" },
  { name: "Nipon", logo: "assets/clients/Nipon.jpg", sector: "Technology", url: "https://www.niponvietnam.com.vn/" },
  { name: "Tong Hong Tannery", logo: "assets/clients/TongHong.jpg", sector: "Leather", url: "http://www.tong-hong.com/" },
  { name: "DreamChef", logo: "assets/clients/Dreamchef.jpg", sector: "F&B", url: "http://www.dreamchef.kr/vn/Vietnam" },
  { name: "Tigermed", logo: "assets/clients/Tigermed.jpg", sector: "Healthcare", url: "https://tigermedgrp.com/en/homepage" },
  { name: "Gia Khải Investment", logo: "assets/clients/GiaKhai.jpg", sector: "Investment", url: "https://diaocgiakhai.vn/" },
  { name: "SDB", logo: "assets/clients/SDB.jpg", sector: "Manufacturing", url: "https://www.savinodelbene.com/company/" },
  { name: "MZST / Molvizadah", logo: "assets/clients/Molvizadah.jpg", sector: "Industrial", url: "https://www.molvizadahsons.com/" },
  { name: "Asama", logo: "assets/clients/Asama.jpg", sector: "Industrial", url: "https://asamabike.com/" },
];

const STATS = [
  { num: "120+", label: "Corporate Clients", label_vn: "Khách hàng doanh nghiệp" },
  { num: "15+", label: "Countries", label_vn: "Quốc gia" },
  { num: "20", label: "Years of Experience", label_vn: "Năm kinh nghiệm" },
  { num: "6", label: "NGOs & Partners", label_vn: "Tổ chức phi chính phủ" },
];

const CONTACTS = [
  {
    name: "Ms. Nguyen Thi My Chau",
    name_vn: "Bà Nguyễn Thị Mỹ Châu",
    role: "Managing Partner",
    role_vn: "Giám đốc Điều hành",
    phone: "+84 909 692 900",
    email: "chauntm@fineaudit.vn",
  },
  {
    name: "Ms. Do Thi Huong",
    name_vn: "Bà Đỗ Thị Hường",
    role: "Vice Director",
    role_vn: "Phó Giám đốc",
    phone: "+84 91 785 1057",
    email: "huongdt@fineaudit.vn",
  },
  {
    name: "Ms. Luong Quy Hien",
    name_vn: "Bà Lương Quý Hiền",
    role: "Audit Director",
    role_vn: "Giám đốc Kiểm toán",
    phone: "+84 93 771 9328",
    email: "hienlq@fineaudit.vn",
  },
  {
    name: "Mr. Le Trong Dai",
    name_vn: "Ông Lê Trọng Đãi",
    role: "Advisory Director",
    role_vn: "Giám đốc Tư vấn",
    phone: "+84 97 806 0306",
    email: "dailt@fineaudit.vn",
  },
  {
    name: "Mr. Nguyen Le Hoang Minh",
    name_vn: "Ông Nguyễn Lê Hoàng Minh",
    role: "Advisory Director",
    role_vn: "Giám đốc Tư vấn",
    phone: "+84 6267 1168",
    email: "minhnlh@fineaudit.vn",
  },
  {
    name: "Mr. Dang Tran Hung",
    name_vn: "Ông Đặng Trần Hùng",
    role: "Advisory Director",
    role_vn: "Giám đốc Tư vấn",
    phone: "+84 978 377 255",
    email: "hungdt@fineaudit.vn",
  },
];

window.FINE_DATA = { NAV, VALUES, SERVICES, TEAM, CLIENTS, STATS, CONTACTS };
