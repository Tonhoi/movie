import routes from "@/configs/routes";

export const CATEGORIES_ITEMS = [
  {
    title: "Hành Động",
    href: routes.category + "hanh-dong",
  },
  {
    title: "Tình Cảm",
    href: routes.category + "tinh-cam",
  },
  {
    title: "Hài Hước",
    href: routes.category + "hai-huoc",
  },
  {
    title: "Cổ Trang",
    href: routes.category + "co-trang",
  },
  {
    title: "Tâm lý",
    href: routes.category + "tam-ly",
  },
  {
    title: "Hình Sự",
    href: routes.category + "hinh-su",
  },
  {
    title: "Chiến Trang",
    href: routes.category + "chien-tranh",
  },
  {
    title: "Thể Thao",
    href: routes.category + "the-thao",
  },
  {
    title: "Võ Thuật",
    href: routes.category + "vo-thuat",
  },
  {
    title: "Viễn Tưởng",
    href: routes.category + "vien-tuong",
  },
  {
    title: "Phiêu Lưu",
    href: routes.category + "phieu-luu",
  },
  {
    title: "Khoa Học",
    href: routes.category + "khoa-hoc",
  },
  {
    title: "Kinh Dị",
    href: routes.category + "kinh-di",
  },
  {
    title: "Âm Nhạc",
    href: routes.category + "am-nhac",
  },
  {
    title: "Thần Thoại",
    href: routes.category + "than-thoai",
  },
  {
    title: "Tài Liệu",
    href: routes.category + "tai-lieu",
  },
  {
    title: "Gia Đình",
    href: routes.category + "gia-dinh",
  },
  {
    title: "Chính Kịch",
    href: routes.category + "chinh-kich",
  },
  {
    title: "Bí Ẩn",
    href: routes.category + "bi-an",
  },
  {
    title: "Học Đường",
    href: routes.category + "hoc-duong",
  },
  {
    title: "Kinh Điển",
    href: routes.category + "kinh-dien",
  },
  {
    title: "Phim 18+",
    href: routes.category + "phim-18",
  },
];

export const COUNTRIES_ITEMS = [
  {
    title: "Trung Quốc",
    href: routes.country + "trung-quoc",
  },
  {
    title: "Hàn Quốc",
    href: routes.country + "han-quoc",
  },
  {
    title: "Nhật Bản",
    href: routes.country + "nhat-ban",
  },
  {
    title: "Thái Lan",
    href: routes.country + "thai-lan",
  },
  {
    title: "Âu Mỹ",
    href: routes.country + "au-my",
  },
  {
    title: "Đài Loan",
    href: routes.country + "dai-loan",
  },
  {
    title: "Hồng Kông",
    href: routes.country + "hong-kong",
  },
  {
    title: "Ấn Độ",
    href: routes.country + "an-do",
  },
  {
    title: "Anh",
    href: routes.country + "anh",
  },
  {
    title: "Pháp",
    href: routes.country + "phap",
  },
  {
    title: "Canada",
    href: routes.country + "canada",
  },
  {
    title: "Đức",
    href: routes.country + "duc",
  },
  {
    title: "Tây Ban Nha",
    href: routes.country + "tay-ban-nha",
  },
  {
    title: "Thổ Nhĩ Kỳ",
    href: routes.country + "tho-nhi-ky",
  },
  {
    title: "Hà Lan",
    href: routes.country + "ha-lan",
  },
  {
    title: "Indonesia",
    href: routes.country + "indonesia",
  },
  {
    title: "Nga",
    href: routes.country + "nga",
  },
  {
    title: "Mexico",
    href: routes.country + "mexico",
  },
  {
    title: "Ba Lan",
    href: routes.country + "ba-lan",
  },
  {
    title: "Úc",
    href: routes.country + "uc",
  },
  {
    title: "Thụy Điển",
    href: routes.country + "thuy-dien",
  },
  {
    title: "Malaysia",
    href: routes.country + "malaysia",
  },
  {
    title: "Brazil",
    href: routes.country + "brazil",
  },
  {
    title: "Philippines",
    href: routes.country + "philippines",
  },
  {
    title: "Bồ Đào Nha",
    href: routes.country + "bo-dao-nha",
  },
  {
    title: "Ý",
    href: routes.country + "y",
  },
  {
    title: "Đan Mạch",
    href: routes.country + "dan-mach",
  },
  {
    title: "UAE",
    href: routes.country + "uae",
  },
  {
    title: "Na Uy",
    href: routes.country + "na-uy",
  },
  {
    title: "Thụy Sĩ",
    href: routes.country + "thuy-si",
  },
  {
    title: "Châu Phi",
    href: routes.country + "chau-phi",
  },
  {
    title: "Nam Phi",
    href: routes.country + "nam-phi",
  },
  {
    title: "Ukraina",
    href: routes.country + "ukraina",
  },
  {
    title: "Ả Rập Xê Út",
    href: routes.country + "a-rap-xe-ut",
  },
  {
    title: "Quốc Gia Khác",
    href: routes.country + "quoc-gia-khac",
  },
];

export const NAV_ITEMS = [
  {
    title: "Loại Phim",
    href: "",
    children: [
      {
        title: "Phim Bộ",
        href: "/phim-bo",
      },
      {
        title: "Phim Lẻ",
        href: "/phim-le",
      },
      {
        title: "Hoạt Hình",
        href: "/hoat-hinh",
      },
      {
        title: "Sub Độc Quyền",
        href: "/subteam",
      },
    ],
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
    title: "Tv Shows",
    href: "/tv-shows",
    children: [],
  },
  {
    title: "Sắp Chiếu",
    href: "/phim-sap-chieu",
    children: [],
  },
];
