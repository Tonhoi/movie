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
    title: "Đài Loan",
    href: routes.country + "dai-loan",
  },
  {
    title: "Hồng Kông",
    href: routes.country + "hong-kong",
  },
  {
    title: "Trung Quốc",
    href: routes.country + "trung-quoc",
  },
  {
    title: "Âu Mỹ",
    href: routes.country + "au-my",
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
    title: "Ấn Độ",
    href: routes.country + "an-do",
  },
  {
    title: "Philippines",
    href: routes.country + "philippines",
  },
  {
    title: "Indonesia",
    href: routes.country + "indonesia",
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
    title: "Sắp Chiếu",
    href: "/phim-sap-chieu",
    children: [],
  },
];
