const CATEGORIES_ITEMS = [
  {
    title: "Hành Động",
    href: "/hanh-dong",
  },
  {
    title: "Tình Cảm",
    href: "/tinh-cam",
  },
  {
    title: "Hài Hước",
    href: "/hai-huoc",
  },
  {
    title: "Cổ Trang",
    href: "/co-trang",
  },
  {
    title: "Tâm lý",
    href: "/tam-ly",
  },
  {
    title: "Hình Sự",
    href: "/hinh-su",
  },
  {
    title: "Chiến Trang",
    href: "/chien-tranh",
  },
  {
    title: "Thể Thao",
    href: "/the-thao",
  },
  {
    title: "Võ Thuật",
    href: "/vo-thuat",
  },
  {
    title: "Viễn Tưởng",
    href: "/vien-tuong",
  },
  {
    title: "Phiêu Lưu",
    href: "/phieu-luu",
  },
  {
    title: "Khoa Học",
    href: "/khoa-hoc",
  },
  {
    title: "Kinh Dị",
    href: "/kinh-di",
  },
  {
    title: "Âm Nhạc",
    href: "/am-nhac",
  },
  {
    title: "Thần Thoại",
    href: "/than-thoai",
  },
  {
    title: "Tài Liệu",
    href: "/tai-lieu",
  },
  {
    title: "Gia Đình",
    href: "/gia-dinh",
  },
  {
    title: "Chính Kịch",
    href: "/chinh-kich",
  },
  {
    title: "Bí Ẩn",
    href: "/bi-an",
  },
  {
    title: "Học Đường",
    href: "/hoc-duong",
  },
  {
    title: "Kinh Điển",
    href: "/kinh-dien",
  },
  {
    title: "Phim 18+",
    href: "/phim-18",
  },
];

const COUNTRIES_ITEMS = [
  {
    title: "Trung Quốc",
    href: "/trung-quoc",
  },
  {
    title: "Hàn Quốc",
    href: "/han-quoc",
  },
  {
    title: "Nhật Bản",
    href: "/nhat-ban",
  },
  {
    title: "Thái Lan",
    href: "/thai-lan",
  },
  {
    title: "Âu Mỹ",
    href: "/au-my",
  },
  {
    title: "Đài Loan",
    href: "/dai-loan",
  },
  {
    title: "Hồng Kông",
    href: "/hong-kong",
  },
  {
    title: "Ấn Độ",
    href: "/an-do",
  },
  {
    title: "Anh",
    href: "/anh",
  },
  {
    title: "Pháp",
    href: "/phap",
  },
  {
    title: "Canada",
    href: "/canada",
  },
  {
    title: "Đức",
    href: "/duc",
  },
  {
    title: "Tây Ban Nha",
    href: "/tay-ban-nha",
  },
  {
    title: "Thổ Nhĩ Kỳ",
    href: "/tho-nhi-ky",
  },
  {
    title: "Hà Lan",
    href: "/ha-lan",
  },
  {
    title: "Indonesia",
    href: "/indonesia",
  },
  {
    title: "Nga",
    href: "/nga",
  },
  {
    title: "Mexico",
    href: "/mexico",
  },
  {
    title: "Ba Lan",
    href: "/ba-lan",
  },
  {
    title: "Úc",
    href: "/uc",
  },
  {
    title: "Thụy Điển",
    href: "/thuy-dien",
  },
  {
    title: "Malaysia",
    href: "/malaysia",
  },
  {
    title: "Brazil",
    href: "/brazil",
  },
  {
    title: "Philippines",
    href: "/philippines",
  },
  {
    title: "Bồ Đào Nha",
    href: "/bo-dao-nha",
  },
  {
    title: "Ý",
    href: "/y",
  },
  {
    title: "Đan Mạch",
    href: "/dan-mach",
  },
  {
    title: "UAE",
    href: "/uae",
  },
  {
    title: "Na Uy",
    href: "/na-uy",
  },
  {
    title: "Thụy Sĩ",
    href: "/thuy-si",
  },
  {
    title: "Châu Phi",
    href: "/chau-phi",
  },
  {
    title: "Nam Phi",
    href: "/nam-phi",
  },
  {
    title: "Ukraina",
    href: "/ukraina",
  },
  {
    title: "Ả Rập Xê Út",
    href: "/a-rap-xe-ut",
  },
  {
    title: "Quốc Gia Khác",
    href: "/quoc-gia-khac",
  },
];

export const NAV_ITEMS = [
  {
    title: "Phim Bộ",
    href: "/phim-bo",
  },
  {
    title: "Phim Lẻ",
    href: "/phim-le",
  },
  {
    title: "Thể Loại",
    href: "",
    children: CATEGORIES_ITEMS,
  },
  {
    title: "Quốc Gia",
    href: "",
    children: COUNTRIES_ITEMS,
  },
  {
    title: "Xem Thêm",
    href: "",
    children: [
      {
        title: "Shows",
        href: "/tv-shows",
      },
      {
        title: "Sắp chiếu",
        href: "/phim-sap-chieu",
      },
      {
        title: "Hoạt hình",
        href: "/hoat-hinh",
      },
      {
        title: "Subteam",
        href: "/subteam",
      },
    ],
  },
];
