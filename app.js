const storageKeys = {
  language: "ug.language.v2",
  univ: "ug.univ.v2",
  name: "ug.name.v2",
  tasksDone: "ug.tasksDone.v2",
  reminders: "ug.reminders.v1",
  reminderSchedule: "ug.reminderSchedule.v1",
};

const UNIVERSITIES = [
  { id: "wonkwang", name: "원광대학교", en: "Wonkwang Univ." },
  { id: "jbnu", name: "전북대학교", en: "Jeonbuk Nat'l Univ." },
  { id: "jeonju", name: "전주대학교", en: "Jeonju Univ." },
  { id: "kunsan", name: "국립군산대학교", en: "Kunsan Nat'l Univ." },
  { id: "woosuk", name: "우석대학교", en: "Woosuk Univ." },
];

/**
 * UniGuide Global - 전북 지역 대학교 상세 데이터베이스
 * 유학생들이 가장 자주 찾는 정보 위주로 구성되었습니다.
 */
const UNIVERSITY_DATABASE = {
  wonkwang: {
    name: "원광대학교",
    engName: "Wonkwang University",
    office: {
      ko: "국제교류과 (학생회관 2층)",
      en: "International Affairs (Student Union Bldg, 2F)",
      zh: "国际交流处（学生会馆2层）",
      vi: "Phòng giao lưu quốc tế (tầng 2, tòa nhà Hội sinh viên)",
      ja: "国際交流課（学生会館2階）",
    },
    tel: "063-850-5114",
    website: "https://www.wku.ac.kr",
    globalCenter: "https://global.wku.ac.kr",
    features: {
      ko: [
        "유학생 전담 '글로벌 센터' 운영",
        "한국어 교육과정 및 문화체험 프로그램 다양",
        "익산역과 인접하여 교통이 편리함",
      ],
      en: [
        "Dedicated Global Center for international students",
        "Various Korean language & cultural experience programs",
        "Convenient transportation near Iksan Station",
      ],
      zh: ["设有留学生专门的“Global Center”", "韩语课程与文化体验项目丰富", "靠近益山站，交通便利"],
      vi: ["Có “Global Center” hỗ trợ du học sinh", "Nhiều chương trình tiếng Hàn & trải nghiệm văn hóa", "Gần ga Iksan, giao thông thuận tiện"],
      ja: ["留学生専用「グローバルセンター」を運営", "韓国語教育課程・文化体験プログラムが充実", "益山駅に近く交通が便利"],
    },
    emergency: {
      ko: "063-850-5119 (야간 당직실)",
      en: "063-850-5119 (Night duty office)",
      zh: "063-850-5119（夜间值班）",
      vi: "063-850-5119 (trực đêm)",
      ja: "063-850-5119（夜間当直）",
    },
  },
  jbnu: {
    name: "전북대학교",
    engName: "Jeonbuk National University",
    office: {
      ko: "국제협력부 (뉴실크로드센터 3층)",
      en: "Office of Int'l Affairs (New Silk Road Center, 3F)",
      zh: "国际合作处（新丝绸之路中心3层）",
      vi: "Phòng hợp tác quốc tế (New Silk Road Center, tầng 3)",
      ja: "国際協力部（ニューシルクロードセンター3階）",
    },
    tel: "063-270-2114",
    website: "https://www.jbnu.ac.kr",
    globalCenter: "https://oia.jbnu.ac.kr",
    features: {
      ko: [
        "거점 국립대학교로 유학생 지원 혜택 풍부",
        "교내 '출입국 민원센터' 운영 (비자 업무 편리)",
        "외국인 유학생 버디(Buddy) 프로그램 활성화",
      ],
      en: [
        "National flagship university with strong support benefits",
        "On-campus immigration service center (visa tasks are easier)",
        "Active buddy program for international students",
      ],
      zh: ["国家重点国立大学，留学生支持福利丰富", "校内出入境服务中心（签证办理更方便）", "留学生Buddy项目活跃"],
      vi: ["Trường đại học quốc lập trọng điểm, hỗ trợ du học sinh tốt", "Có trung tâm hỗ trợ xuất nhập cảnh trong trường", "Chương trình Buddy cho du học sinh rất sôi nổi"],
      ja: ["国立の中核大学として支援制度が充実", "学内に出入国サポート窓口（ビザ手続きが便利）", "留学生Buddyプログラムが活発"],
    },
    emergency: { ko: "063-270-2017", en: "063-270-2017", zh: "063-270-2017", vi: "063-270-2017", ja: "063-270-2017" },
  },
  jeonju: {
    name: "전주대학교",
    engName: "Jeonju University",
    office: {
      ko: "국제교류원 (스타센터 2층)",
      en: "International Office (Star Center, 2F)",
      zh: "国际交流院（Star Center 2层）",
      vi: "Văn phòng quốc tế (Star Center, tầng 2)",
      ja: "国際交流院（スターセンター2階）",
    },
    tel: "063-220-2114",
    website: "https://www.jj.ac.kr",
    globalCenter: "https://www.jj.ac.kr/jj/admission/intl_intro.jsp",
    features: {
      ko: [
        "스타센터(Star Center) 내 원스톱 행정 서비스",
        "유학생 맞춤형 취업 역량 강화 프로그램",
        "기숙사(HATCH) 시설 내 유학생 편의시설 완비",
      ],
      en: [
        "One-stop administrative services at Star Center",
        "Career support programs tailored for international students",
        "International-student-friendly dorm facilities (HATCH)",
      ],
      zh: ["Star Center提供一站式行政服务", "面向留学生的就业能力提升项目", "宿舍(HATCH)配套完善"],
      vi: ["Dịch vụ hành chính một cửa tại Star Center", "Chương trình hỗ trợ nghề nghiệp cho du học sinh", "Ký túc xá (HATCH) tiện nghi cho du học sinh"],
      ja: ["スターセンターでワンストップ行政サービス", "留学生向け就職支援プログラム", "寮（HATCH）に留学生向け設備が充実"],
    },
    emergency: { ko: "063-220-2119", en: "063-220-2119", zh: "063-220-2119", vi: "063-220-2119", ja: "063-220-2119" },
  },
  kunsan: {
    name: "국립군산대학교",
    engName: "Kunsan National University",
    office: {
      ko: "국제교류교육원 (행정본부 1층)",
      en: "International Education Center (Admin Bldg, 1F)",
      zh: "国际交流教育院（行政本部1层）",
      vi: "Trung tâm giáo dục quốc tế (tòa hành chính, tầng 1)",
      ja: "国際交流教育院（行政本部1階）",
    },
    tel: "063-469-4114",
    website: "https://www.kunsan.ac.kr",
    globalCenter: "https://www.kunsan.ac.kr/international",
    features: {
      ko: [
        "해양 공학 및 신재생 에너지 특화 전공 강점",
        "합리적인 등록금과 유학생 장학금 혜택",
        "산업단지 연계 실무 교육 기회 제공",
      ],
      en: [
        "Strong majors in marine engineering & renewable energy",
        "Affordable tuition and scholarships for international students",
        "Practical training opportunities with industrial complexes",
      ],
      zh: ["海洋工程与新能源等特色专业优势", "学费合理并提供留学生奖学金", "与产业园区联动的实务教育机会"],
      vi: ["Thế mạnh về kỹ thuật biển & năng lượng tái tạo", "Học phí hợp lý và có học bổng cho du học sinh", "Cơ hội đào tạo thực hành liên kết khu công nghiệp"],
      ja: ["海洋工学・再生可能エネルギー分野に強み", "学費が比較的安く留学生奨学金あり", "産業団地連携の実務教育機会を提供"],
    },
    emergency: { ko: "063-469-4112", en: "063-469-4112", zh: "063-469-4112", vi: "063-469-4112", ja: "063-469-4112" },
  },
  woosuk: {
    name: "우석대학교",
    engName: "Woosuk University",
    office: {
      ko: "국제교류센터 (문화관 4층)",
      en: "International Exchange Center (Culture Hall, 4F)",
      zh: "国际交流中心（文化馆4层）",
      vi: "Trung tâm giao lưu quốc tế (Tòa văn hóa, tầng 4)",
      ja: "国際交流センター（文化館4階）",
    },
    tel: "063-290-1114",
    website: "https://www.woosuk.ac.kr",
    globalCenter: "https://shm.woosuk.ac.kr",
    features: {
      ko: ["다양한 아시아권 자매결연 대학 보유", "유학생 전용 기숙사 지원 및 관리", "전주와 완주 캠퍼스 간 셔틀버스 운행"],
      en: [
        "Many partner universities across Asia",
        "Dedicated dorm support and management for international students",
        "Shuttle bus between Jeonju and Wanju campuses",
      ],
      zh: ["拥有多所亚洲地区姊妹学校", "提供并管理留学生专用宿舍", "全州与完州校区之间有班车"],
      vi: ["Nhiều trường đối tác tại châu Á", "Hỗ trợ ký túc xá riêng cho du học sinh", "Xe buýt đưa đón giữa cơ sở Jeonju và Wanju"],
      ja: ["アジア圏の提携大学が多数", "留学生専用寮の支援・管理", "全州・完州キャンパス間シャトル運行"],
    },
    emergency: { ko: "063-290-1011", en: "063-290-1011", zh: "063-290-1011", vi: "063-290-1011", ja: "063-290-1011" },
  },
};

const LANGS = [
  { id: "ko", label: "한국어" },
  { id: "en", label: "English" },
  { id: "zh", label: "中文" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "ja", label: "日本語" },
];

const TRANSLATIONS = {
  ko: {
    onboarding_title: "UniGuide Global",
    onboarding_sub: "유학생을 위한 똑똑한 대학 생활",
    onboarding_note: "선택 정보는 이 기기에 저장됩니다. 설정에서 언제든 바꿀 수 있어요.",
    lbl_lang: "1. 언어 선택",
    lbl_univ: "2. 학교 선택 (전북 지역)",
    lbl_name: "3. 이름 입력",
    name_placeholder: "이름을 입력하세요...",
    btn_start: "시작하기",

    title_tasks: "오늘의 할 일",
    title_quick: "캠퍼스 가이드",
    title_terms: "필수 용어 사전",
    menu_rules: "학사 규정",
    menu_phrases: "캠퍼스 회화",
    menu_univinfo: "학교 정보",
    menu_course_reg: "수강신청",

    nav_home: "홈",
    nav_phrases: "회화",
    nav_info: "규정",
    nav_profile: "마이",

    v_title_phrases: "학교 생활 필수 회화",
    v_title_academic: "학사 제도 안내",
    v_title_univinfo: "학교 정보",
    v_title_course_reg: "수강신청 가이드",
    v_title_profile: "마이 페이지",
    tts_hint: "스피커를 누르면 발음을 들을 수 있어요.",
    tts_stop: "음성 중지",
    tts_unsupported: "이 브라우저는 음성 출력을 지원하지 않습니다.",

    title_settings: "설정 및 관리",
    set_lang: "언어 설정",
    set_lang_sub: "앱 언어 변경",
    set_visa: "비자 정보",
    set_visa_sub: "D-2 체류 기간 관리 (준비중)",
    set_alarm: "알림 설정",
    set_alarm_sub: "학사 공지 및 푸시 (준비중)",

    v_title_notifications: "알림",
    notif_perm_title: "브라우저 알림 허용",
    notif_perm_desc: "브라우저 알림은 이 페이지가 열려 있을 때 가장 안정적으로 동작합니다.",
    notif_perm_btn: "허용",
    notif_test_desc: "테스트 알림 보내기",
    notif_test_btn: "테스트",

    reminder_daily_title: "오늘 해야 할 일 체크",
    reminder_daily_desc: "매일 오전 9시에 오늘의 체크리스트를 알려줘요.",
    reminder_visa_title: "비자/체류 기간 확인",
    reminder_visa_desc: "매주 월요일 오전 10시에 체류/비자 상태를 점검하도록 알려줘요.",
    reminder_notice_title: "학교 공지 확인",
    reminder_notice_desc: "매일 오후 6시에 공지사항 확인을 알려줘요.",
    reminder_enabled: "알림이 켜졌어요.",
    reminder_disabled: "알림이 꺼졌어요.",
    reminder_permission_needed: "브라우저 알림 권한이 필요해요.",
    test_notification_title: "테스트 알림",
    test_notification_body: "알림이 정상적으로 작동합니다!",

    reset_confirm: "저장된 데이터를 모두 초기화할까요?",
    select_univ_alert: "학교를 선택해 주세요!",

    univinfo_office: "국제교류처/사무실",
    univinfo_tel: "전화",
    univinfo_website: "학교 홈페이지",
    univinfo_global: "국제교류처 사이트",
    univinfo_features: "특징",
    univinfo_emergency: "비상 연락처",
    univinfo_open_site: "웹사이트 열기",
    univinfo_open_global: "국제교류처 열기",
    univinfo_call: "전화하기",
    univ_wku_open: "바로가기",

    tasks: [
      { id: "t1", t: "수강 꾸러미 신청 확인", d: "장바구니 기간 확인 요망" },
      { id: "t2", t: "출입국 관리소 서류 준비", d: "비자 연장 서류 준비" },
      { id: "t3", t: "학생 식당 메뉴 확인", d: "학생회관 식당 운영 시간 확인" },
    ],
  },
  en: {
    onboarding_title: "UniGuide Global",
    onboarding_sub: "Smart Campus Life for International Students",
    onboarding_note: "Your choices are saved on this device. You can change them later in settings.",
    lbl_lang: "1. Choose Language",
    lbl_univ: "2. Select University (Jeonbuk)",
    lbl_name: "3. Full Name",
    name_placeholder: "Type your name...",
    btn_start: "Get Started",

    title_tasks: "Today's Tasks",
    title_quick: "Campus Guide",
    title_terms: "Core Glossary",
    menu_rules: "Rules",
    menu_phrases: "Phrases",
    menu_univinfo: "University Info",
    menu_course_reg: "Registration",

    nav_home: "Home",
    nav_phrases: "Talk",
    nav_info: "Guide",
    nav_profile: "My",

    v_title_phrases: "Essential Campus Talk",
    v_title_academic: "Academic Rules",
    v_title_univinfo: "University Info",
    v_title_course_reg: "Course registration guide",
    v_title_profile: "My Page",
    tts_hint: "Tap the speaker to hear pronunciation.",
    tts_stop: "Stop voice",
    tts_unsupported: "This browser does not support speech output.",

    title_settings: "Settings",
    set_lang: "Language",
    set_lang_sub: "Change app language",
    set_visa: "Visa Status",
    set_visa_sub: "Manage D-2 registration (coming soon)",
    set_alarm: "Notifications",
    set_alarm_sub: "Campus alerts & reminders (coming soon)",

    v_title_notifications: "Notifications",
    notif_perm_title: "Enable browser notifications",
    notif_perm_desc: "Notifications work best while this page stays open.",
    notif_perm_btn: "Allow",
    notif_test_desc: "Send a test notification",
    notif_test_btn: "Test",

    reminder_daily_title: "Daily checklist",
    reminder_daily_desc: "Remind me every day at 9:00 AM to review today's tasks.",
    reminder_visa_title: "Visa / stay status",
    reminder_visa_desc: "Remind me every Monday at 10:00 AM to check visa/stay status.",
    reminder_notice_title: "Check university notices",
    reminder_notice_desc: "Remind me every day at 6:00 PM to check notices.",
    reminder_enabled: "Reminder enabled.",
    reminder_disabled: "Reminder disabled.",
    reminder_permission_needed: "Browser notification permission is required.",
    test_notification_title: "Test notification",
    test_notification_body: "Notifications are working!",

    reset_confirm: "Reset all saved data?",
    select_univ_alert: "Please select a university!",

    univinfo_office: "International office",
    univinfo_tel: "Phone",
    univinfo_website: "University website",
    univinfo_global: "International site",
    univinfo_features: "Highlights",
    univinfo_emergency: "Emergency contact",
    univinfo_open_site: "Open website",
    univinfo_open_global: "Open international site",
    univinfo_call: "Call",
    univ_wku_open: "Open",

    tasks: [
      { id: "t1", t: "Check Course Basket", d: "Review during registration period" },
      { id: "t2", t: "Prepare Visa Documents", d: "Required for extension" },
      { id: "t3", t: "Check Cafeteria Menu", d: "See today's menu and hours" },
    ],
  },
  zh: {
    onboarding_title: "UniGuide Global",
    onboarding_sub: "留学生智能校园指南",
    onboarding_note: "你的选择会保存在本设备（浏览器）中，可在设置中随时更改。",
    lbl_lang: "1. 选择语言",
    lbl_univ: "2. 选择学校（全北地区）",
    lbl_name: "3. 姓名",
    name_placeholder: "请输入姓名...",
    btn_start: "开始探索",

    title_tasks: "今日任务",
    title_quick: "校园指南",
    title_terms: "核心词汇",
    menu_rules: "学务规定",
    menu_phrases: "校园会话",
    menu_univinfo: "学校信息",
    menu_course_reg: "选课注册",

    nav_home: "首页",
    nav_phrases: "会话",
    nav_info: "规定",
    nav_profile: "我的",

    v_title_phrases: "校园常用会话",
    v_title_academic: "学务制度指南",
    v_title_univinfo: "学校信息",
    v_title_course_reg: "选课注册指南",
    v_title_profile: "个人中心",
    tts_hint: "点击喇叭可听发音。",
    tts_stop: "停止语音",
    tts_unsupported: "此浏览器不支持语音朗读。",

    title_settings: "设置",
    set_lang: "语言设置",
    set_lang_sub: "切换应用语言",
    set_visa: "签证状态",
    set_visa_sub: "D-2 在留管理（即将上线）",
    set_alarm: "提醒设置",
    set_alarm_sub: "校园通知与提醒（即将上线）",

    v_title_notifications: "提醒",
    notif_perm_title: "启用浏览器通知",
    notif_perm_desc: "当页面保持打开时，提醒会更稳定。",
    notif_perm_btn: "允许",
    notif_test_desc: "发送测试通知",
    notif_test_btn: "测试",

    reminder_daily_title: "每日任务检查",
    reminder_daily_desc: "每天上午 9:00 提醒查看今日清单。",
    reminder_visa_title: "签证/居留状态",
    reminder_visa_desc: "每周一上午 10:00 提醒检查签证/居留。",
    reminder_notice_title: "查看学校公告",
    reminder_notice_desc: "每天晚上 6:00 提醒查看公告。",
    reminder_enabled: "已开启提醒。",
    reminder_disabled: "已关闭提醒。",
    reminder_permission_needed: "需要浏览器通知权限。",
    test_notification_title: "测试通知",
    test_notification_body: "通知功能正常！",

    reset_confirm: "要清除所有已保存的数据吗？",
    select_univ_alert: "请选择学校！",

    univinfo_office: "国际交流处/办公室",
    univinfo_tel: "电话",
    univinfo_website: "学校官网",
    univinfo_global: "国际交流网站",
    univinfo_features: "特点",
    univinfo_emergency: "紧急联系方式",
    univinfo_open_site: "打开官网",
    univinfo_open_global: "打开国际网站",
    univinfo_call: "拨打电话",
    univ_wku_open: "打开",

    tasks: [
      { id: "t1", t: "确认选课篮子", d: "请在规定时间内确认" },
      { id: "t2", t: "准备签证材料", d: "签证延期所需" },
      { id: "t3", t: "查看食堂菜单", d: "确认今天的菜单和营业时间" },
    ],
  },
  vi: {
    onboarding_title: "UniGuide Global",
    onboarding_sub: "Cuộc sống học đường thông minh",
    onboarding_note: "Lựa chọn của bạn được lưu trên thiết bị này (trình duyệt) và có thể đổi trong Cài đặt.",
    lbl_lang: "1. Chọn ngôn ngữ",
    lbl_univ: "2. Chọn trường (khu vực Jeonbuk)",
    lbl_name: "3. Nhập tên",
    name_placeholder: "Nhập tên của bạn...",
    btn_start: "Bắt đầu",

    title_tasks: "Việc hôm nay",
    title_quick: "Hướng dẫn",
    title_terms: "Thuật ngữ",
    menu_rules: "Quy chế",
    menu_phrases: "Hội thoại",
    menu_univinfo: "Thông tin trường",
    menu_course_reg: "Đăng ký môn",

    nav_home: "Trang chủ",
    nav_phrases: "Nói",
    nav_info: "Hướng dẫn",
    nav_profile: "Của tôi",

    v_title_phrases: "Hội thoại học đường",
    v_title_academic: "Thông tin quy chế",
    v_title_univinfo: "Thông tin trường",
    v_title_course_reg: "Hướng dẫn đăng ký học phần",
    v_title_profile: "Trang cá nhân",
    tts_hint: "Nhấn biểu tượng loa để nghe phát âm.",
    tts_stop: "Dừng giọng nói",
    tts_unsupported: "Trình duyệt này không hỗ trợ đọc giọng nói.",

    title_settings: "Cài đặt",
    set_lang: "Ngôn ngữ",
    set_lang_sub: "Thay đổi ngôn ngữ",
    set_visa: "Thị thực (Visa)",
    set_visa_sub: "Quản lý lưu trú D-2 (sắp có)",
    set_alarm: "Thông báo",
    set_alarm_sub: "Nhắc nhở & thông báo (sắp có)",

    v_title_notifications: "Thông báo",
    notif_perm_title: "Cho phép thông báo trình duyệt",
    notif_perm_desc: "Thông báo ổn định nhất khi trang này đang mở.",
    notif_perm_btn: "Cho phép",
    notif_test_desc: "Gửi thông báo thử",
    notif_test_btn: "Thử",

    reminder_daily_title: "Checklist hằng ngày",
    reminder_daily_desc: "Nhắc mỗi ngày lúc 9:00 để xem việc cần làm.",
    reminder_visa_title: "Visa / tình trạng lưu trú",
    reminder_visa_desc: "Nhắc mỗi Thứ Hai lúc 10:00 để kiểm tra visa/lưu trú.",
    reminder_notice_title: "Kiểm tra thông báo trường",
    reminder_notice_desc: "Nhắc mỗi ngày lúc 18:00 để xem thông báo.",
    reminder_enabled: "Đã bật nhắc nhở.",
    reminder_disabled: "Đã tắt nhắc nhở.",
    reminder_permission_needed: "Cần quyền thông báo của trình duyệt.",
    test_notification_title: "Thông báo thử",
    test_notification_body: "Thông báo đang hoạt động!",

    reset_confirm: "Xóa tất cả dữ liệu đã lưu?",
    select_univ_alert: "Vui lòng chọn trường!",

    univinfo_office: "Văn phòng quốc tế",
    univinfo_tel: "Điện thoại",
    univinfo_website: "Website trường",
    univinfo_global: "Website quốc tế",
    univinfo_features: "Điểm nổi bật",
    univinfo_emergency: "Liên hệ khẩn cấp",
    univinfo_open_site: "Mở website",
    univinfo_open_global: "Mở website quốc tế",
    univinfo_call: "Gọi",
    univ_wku_open: "Mở",

    tasks: [
      { id: "t1", t: "Kiểm tra giỏ môn học", d: "Xem trong thời gian đăng ký" },
      { id: "t2", t: "Chuẩn bị giấy tờ visa", d: "Cần cho gia hạn" },
      { id: "t3", t: "Xem thực đơn nhà ăn", d: "Kiểm tra menu và giờ mở cửa" },
    ],
  },
  ja: {
    onboarding_title: "UniGuide Global",
    onboarding_sub: "留学生のためのスマート・キャンパスガイド",
    onboarding_note: "選択内容はこの端末（ブラウザ）に保存され、設定でいつでも変更できます。",
    lbl_lang: "1. 言語を選択",
    lbl_univ: "2. 大学を選択（全北地域）",
    lbl_name: "3. 名前",
    name_placeholder: "名前を入力...",
    btn_start: "はじめる",

    title_tasks: "今日のToDo",
    title_quick: "キャンパスガイド",
    title_terms: "用語集",
    menu_rules: "学事規定",
    menu_phrases: "会話フレーズ",
    menu_univinfo: "大学情報",
    menu_course_reg: "履修登録",

    nav_home: "ホーム",
    nav_phrases: "会話",
    nav_info: "ガイド",
    nav_profile: "マイ",

    v_title_phrases: "キャンパス会話フレーズ",
    v_title_academic: "学事ルール",
    v_title_univinfo: "大学情報",
    v_title_course_reg: "履修登録ガイド",
    v_title_profile: "マイページ",
    tts_hint: "スピーカーを押すと発音を聞けます。",
    tts_stop: "音声停止",
    tts_unsupported: "このブラウザは音声読み上げに対応していません。",

    title_settings: "設定",
    set_lang: "言語",
    set_lang_sub: "アプリの言語を変更",
    set_visa: "ビザ情報",
    set_visa_sub: "D-2 管理（準備中）",
    set_alarm: "通知",
    set_alarm_sub: "通知・リマインド（準備中）",

    v_title_notifications: "通知",
    notif_perm_title: "ブラウザ通知を許可",
    notif_perm_desc: "ページを開いている間が最も安定して動作します。",
    notif_perm_btn: "許可",
    notif_test_desc: "テスト通知を送る",
    notif_test_btn: "テスト",

    reminder_daily_title: "毎日のチェックリスト",
    reminder_daily_desc: "毎日 9:00 に今日のタスク確認を通知します。",
    reminder_visa_title: "ビザ／滞在状態",
    reminder_visa_desc: "毎週月曜 10:00 にビザ／滞在を確認する通知です。",
    reminder_notice_title: "大学のお知らせ確認",
    reminder_notice_desc: "毎日 18:00 にお知らせ確認を通知します。",
    reminder_enabled: "通知を有効にしました。",
    reminder_disabled: "通知を無効にしました。",
    reminder_permission_needed: "ブラウザ通知の許可が必要です。",
    test_notification_title: "テスト通知",
    test_notification_body: "通知は正常に動作しています！",

    reset_confirm: "保存データをすべてリセットしますか？",
    select_univ_alert: "大学を選択してください！",

    univinfo_office: "国際担当窓口",
    univinfo_tel: "電話",
    univinfo_website: "大学サイト",
    univinfo_global: "国際交流サイト",
    univinfo_features: "特徴",
    univinfo_emergency: "緊急連絡先",
    univinfo_open_site: "サイトを開く",
    univinfo_open_global: "国際サイトを開く",
    univinfo_call: "電話する",
    univ_wku_open: "開く",

    tasks: [
      { id: "t1", t: "履修バスケット確認", d: "登録期間中に確認してください" },
      { id: "t2", t: "ビザ書類の準備", d: "延長に必要です" },
      { id: "t3", t: "学食メニュー確認", d: "メニューと営業時間を確認" },
    ],
  },
};

/**
 * 오프라인 가이드: 카테고리별 회화(한국어 + UI 언어별 해석), 용어, 학사 규정 요약
 */
const GUIDE_DATA = {
  ko: {
    categories: { all: "전체", admin: "행정/사무", academic: "학업/수업", daily: "식당/생활", emergency: "긴급/도움" },
    phrases: [
      { cat: "admin", k: "재학증명서를 발급받고 싶습니다.", e: "I'd like to get an enrollment certificate." },
      { cat: "admin", k: "외국인 등록증 갱신은 어디서 하나요?", e: "Where can I renew my alien registration card?" },
      { cat: "academic", k: "교수님, 질문이 있습니다.", e: "Professor, I have a question." },
      { cat: "academic", k: "과제 제출 기한을 연장해주실 수 있나요?", e: "Can I extend the deadline for the assignment?" },
      { cat: "daily", k: "학생 식당은 몇 시까지 운영하나요?", e: "What time does the student cafeteria close?" },
      { cat: "daily", k: "이 음식에 돼지고기가 들어있나요?", e: "Does this food contain pork?" },
      { cat: "emergency", k: "몸이 안 좋아요. 보건실이 어디인가요?", e: "I don't feel well. Where is the health clinic?" },
      { cat: "emergency", k: "학생증을 잃어버렸어요.", e: "I lost my student ID card." },
      { cat: "academic", k: "수강신청 사이트 주소가 무엇인가요?", e: "What is the URL for course registration?", onlyUniv: "wonkwang" },
      { cat: "academic", k: "이번 학기에 몇 학점까지 신청할 수 있나요?", e: "How many credits can I take this semester?", onlyUniv: "wonkwang" },
      { cat: "academic", k: "수강꾸러미에 담은 과목은 자동으로 신청되나요?", e: "Are the courses in my basket automatically registered?", onlyUniv: "wonkwang" },
    ],
    univ_info: {
      name: "원광대학교 (Wonkwang University)",
      course_registration: {
        title: "수강신청 가이드",
        steps: [
          { t: "1단계: 수업평가 완료", d: "전 학기 수업평가를 해야 수강신청이 가능합니다." },
          { t: "2단계: 수강꾸러미(예비)", d: "최대 20과목을 미리 담아둘 수 있습니다 (2월/8월)." },
          { t: "3단계: 본 수강신청", d: "학년별 지정 일자 09:30부터 선착순 진행됩니다." },
        ],
        links: [
          { name: "수강신청 전용창", url: "http://course.wku.ac.kr" },
          { name: "웹정보서비스", url: "https://intra.wku.ac.kr/WEB/SWupis/" },
        ],
      },
    },
    terms: [
      { k: "전공필수", d: "졸업을 위해 반드시 들어야 하는 전공 과목입니다." },
      { k: "학사경고", d: "성적이 일정 기준 미만일 때 받는 경고입니다." },
      { k: "이수학점", d: "과목 이수 시 획득하는 수치 (졸업 기준 130~140)" },
    ],
    rules: [
      { t: "출석 규정", d: "총 수업 시간의 1/4 이상 결석 시 F학점이 부여됩니다." },
      { t: "졸업 이수 학점", d: "일반적으로 총 130~140학점을 이수해야 졸업이 가능합니다." },
    ],
  },
  en: {
    categories: { all: "All", admin: "Admin", academic: "Academic", daily: "Daily life", emergency: "Emergency" },
    phrases: [
      { cat: "admin", k: "재학증명서를 발급받고 싶습니다.", e: "I'd like to get an enrollment certificate." },
      { cat: "admin", k: "외국인 등록증 갱신은 어디서 하나요?", e: "Where can I renew my alien registration card?" },
      { cat: "academic", k: "교수님, 질문이 있습니다.", e: "Professor, I have a question." },
      { cat: "academic", k: "과제 제출 기한을 연장해주실 수 있나요?", e: "Can I extend the deadline for the assignment?" },
      { cat: "daily", k: "학생 식당은 몇 시까지 운영하나요?", e: "What time does the student cafeteria close?" },
      { cat: "daily", k: "이 음식에 돼지고기가 들어있나요?", e: "Does this food contain pork?" },
      { cat: "emergency", k: "몸이 안 좋아요. 보건실이 어디인가요?", e: "I don't feel well. Where is the health clinic?" },
      { cat: "emergency", k: "학생증을 잃어버렸어요.", e: "I lost my student ID card." },
      { cat: "academic", k: "수강신청 사이트 주소가 무엇인가요?", e: "What is the URL for course registration?", onlyUniv: "wonkwang" },
      { cat: "academic", k: "이번 학기에 몇 학점까지 신청할 수 있나요?", e: "How many credits can I take this semester?", onlyUniv: "wonkwang" },
      { cat: "academic", k: "수강꾸러미에 담은 과목은 자동으로 신청되나요?", e: "Are the courses in my basket automatically registered?", onlyUniv: "wonkwang" },
    ],
    univ_info: {
      course_registration: {
        title: "Course registration guide",
        steps: [
          { t: "Step 1: Course evaluation", d: "You must complete the previous semester's teaching evaluation before you can register for courses." },
          { t: "Step 2: Course basket (preliminary)", d: "You can save up to 20 courses in advance (typically February/August)." },
          { t: "Step 3: Main registration", d: "First-come-first-served from 09:30 on your grade's designated registration day." },
        ],
        links: [
          { name: "Course registration portal", url: "http://course.wku.ac.kr" },
          { name: "Student web info (SWUPIS)", url: "https://intra.wku.ac.kr/WEB/SWupis/" },
        ],
      },
    },
    terms: [
      { k: "Major Required", d: "Core courses you must complete to graduate." },
      { k: "Academic Probation", d: "A warning issued when GPA falls below a set standard." },
      { k: "Credits Earned", d: "Credits you receive after passing courses (typically 130–140 to graduate)." },
    ],
    rules: [
      { t: "Attendance", d: "If absences exceed 1/4 of total class hours, an F may be assigned." },
      { t: "Credits to Graduate", d: "You generally need about 130–140 total credits to graduate." },
    ],
  },
  zh: {
    categories: { all: "全部", admin: "行政/事务", academic: "学业/课堂", daily: "食堂/生活", emergency: "紧急/求助" },
    phrases: [
      { cat: "admin", k: "재학증명서를 발급받고 싶습니다.", e: "我想办理在读证明。" },
      { cat: "admin", k: "외국인 등록증 갱신은 어디서 하나요?", e: "外国人登录证去哪里延期/更新？" },
      { cat: "academic", k: "교수님, 질문이 있습니다.", e: "教授，我有个问题。" },
      { cat: "academic", k: "과제 제출 기한을 연장해주실 수 있나요?", e: "可以延长作业提交期限吗？" },
      { cat: "daily", k: "학생 식당은 몇 시까지 운영하나요?", e: "学生食堂营业到几点？" },
      { cat: "daily", k: "이 음식에 돼지고기가 들어있나요?", e: "这个菜里有猪肉吗？" },
      { cat: "emergency", k: "몸이 안 좋아요. 보건실이 어디인가요?", e: "我不舒服，医务室在哪里？" },
      { cat: "emergency", k: "학생증을 잃어버렸어요.", e: "我的学生证丢了。" },
      { cat: "academic", k: "수강신청 사이트 주소가 무엇인가요?", e: "选课/注册网站的网址是什么？", onlyUniv: "wonkwang" },
      { cat: "academic", k: "이번 학기에 몇 학점까지 신청할 수 있나요?", e: "这学期最多可以选多少学分？", onlyUniv: "wonkwang" },
      { cat: "academic", k: "수강꾸러미에 담은 과목은 자동으로 신청되나요?", e: "预选篮里的课会自动注册吗？", onlyUniv: "wonkwang" },
    ],
    univ_info: {
      course_registration: {
        title: "选课注册指南",
        steps: [
          { t: "第一步：完成评教", d: "须先完成上一学期的课程评价后才能进行选课。" },
          { t: "第二步：预选篮子", d: "最多可提前加入20门课程（一般在2月/8月）。" },
          { t: "第三步：正式选课", d: "各年级指定日期起09:30起按先到先得进行。" },
        ],
        links: [
          { name: "选课专用系统", url: "http://course.wku.ac.kr" },
          { name: "学生网页信息服务", url: "https://intra.wku.ac.kr/WEB/SWupis/" },
        ],
      },
    },
    terms: [
      { k: "专业必修", d: "毕业必须修读的专业科目。" },
      { k: "学业警告", d: "成绩低于一定标准时会收到警告。" },
      { k: "修读学分", d: "课程通过后获得的学分（目标约130～140）。" },
    ],
    rules: [
      { t: "出勤规定", d: "缺席超过总学时1/4时，可能被判F。" },
      { t: "毕业学分", d: "一般需要修满约130～140学分才能毕业。" },
    ],
  },
  vi: {
    categories: { all: "Tất cả", admin: "Hành chính", academic: "Học thuật", daily: "Ăn uống/Đời sống", emergency: "Khẩn cấp" },
    phrases: [
      { cat: "admin", k: "재학증명서를 발급받고 싶습니다.", e: "Em muốn xin giấy xác nhận đang học." },
      { cat: "admin", k: "외국인 등록증 갱신은 어디서 하나요?", e: "Gia hạn thẻ đăng ký người nước ngoài ở đâu?" },
      { cat: "academic", k: "교수님, 질문이 있습니다.", e: "Thầy/Cô ơi, em có câu hỏi." },
      { cat: "academic", k: "과제 제출 기한을 연장해주실 수 있나요?", e: "Em có thể gia hạn nộp bài không?" },
      { cat: "daily", k: "학생 식당은 몇 시까지 운영하나요?", e: "Nhà ăn sinh viên đóng cửa mấy giờ?" },
      { cat: "daily", k: "이 음식에 돼지고기가 들어있나요?", e: "Món này có thịt heo không?" },
      { cat: "emergency", k: "몸이 안 좋아요. 보건실이 어디인가요?", e: "Em không khỏe. Phòng y tế ở đâu?" },
      { cat: "emergency", k: "학생증을 잃어버렸어요.", e: "Em bị mất thẻ sinh viên." },
      { cat: "academic", k: "수강신청 사이트 주소가 무엇인가요?", e: "Địa chỉ website đăng ký môn học là gì?", onlyUniv: "wonkwang" },
      { cat: "academic", k: "이번 학기에 몇 학점까지 신청할 수 있나요?", e: "Học kỳ này em có thể đăng ký tối đa bao nhiêu tín chỉ?", onlyUniv: "wonkwang" },
      { cat: "academic", k: "수강꾸러미에 담은 과목은 자동으로 신청되나요?", e: "Các môn trong giỏ dự chọn có tự động được đăng ký không?", onlyUniv: "wonkwang" },
    ],
    univ_info: {
      course_registration: {
        title: "Hướng dẫn đăng ký học phần",
        steps: [
          { t: "Bước 1: Hoàn thành đánh giá môn học", d: "Bạn phải hoàn thành đánh giá giảng dạy học kỳ trước mới được đăng ký học phần." },
          { t: "Bước 2: Giỏ môn dự chọn", d: "Có thể lưu trước tối đa 20 môn (thường vào tháng 2/tháng 8)." },
          { t: "Bước 3: Đăng ký chính thức", d: "Theo thứ tự đến trước được trước, bắt đầu từ 09:30 vào ngày quy định theo khóa/năm học." },
        ],
        links: [
          { name: "Cổng đăng ký học phần", url: "http://course.wku.ac.kr" },
          { name: "Dịch vụ thông tin web (SWUPIS)", url: "https://intra.wku.ac.kr/WEB/SWupis/" },
        ],
      },
    },
    terms: [
      { k: "Môn bắt buộc ngành", d: "Môn ngành bắt buộc để tốt nghiệp." },
      { k: "Cảnh cáo học vụ", d: "Cảnh báo khi điểm trung bình thấp hơn mức quy định." },
      { k: "Tín chỉ", d: "Điểm tín chỉ đạt được khi qua môn (thường cần 130–140 để tốt nghiệp)." },
    ],
    rules: [
      { t: "Quy định chuyên cần", d: "Nghỉ trên 1/4 thời lượng lớp có thể nhận điểm F." },
      { t: "Tín chỉ tốt nghiệp", d: "Thường cần khoảng 130–140 tín chỉ để tốt nghiệp." },
    ],
  },
  ja: {
    categories: { all: "すべて", admin: "事務・手続き", academic: "授業・学業", daily: "食堂・生活", emergency: "緊急・相談" },
    phrases: [
      { cat: "admin", k: "재학증명서를 발급받고 싶습니다.", e: "在学証明書を発行してほしいです。" },
      { cat: "admin", k: "외국인 등록증 갱신은 어디서 하나요?", e: "外国人登録証の延長はどこでできますか？" },
      { cat: "academic", k: "교수님, 질문이 있습니다.", e: "教授、質問があります。" },
      { cat: "academic", k: "과제 제출 기한을 연장해주실 수 있나요?", e: "課題の締切を延長できますか？" },
      { cat: "daily", k: "학생 식당은 몇 시까지 운영하나요?", e: "学生食堂は何時までですか？" },
      { cat: "daily", k: "이 음식에 돼지고기가 들어있나요?", e: "この料理に豚肉は入っていますか？" },
      { cat: "emergency", k: "몸이 안 좋아요. 보건실이 어디인가요?", e: "体調が悪いです。保健室はどこですか？" },
      { cat: "emergency", k: "학생증을 잃어버렸어요.", e: "学生証をなくしました。" },
      { cat: "academic", k: "수강신청 사이트 주소가 무엇인가요?", e: "履修登録サイトのURLは何ですか？", onlyUniv: "wonkwang" },
      { cat: "academic", k: "이번 학기에 몇 학점까지 신청할 수 있나요?", e: "今学期は最大何単位まで履修登録できますか？", onlyUniv: "wonkwang" },
      { cat: "academic", k: "수강꾸러미에 담은 과목은 자동으로 신청되나요?", e: "仮登録バスケットに入れた科目は自動で登録されますか？", onlyUniv: "wonkwang" },
    ],
    univ_info: {
      course_registration: {
        title: "履修登録ガイド",
        steps: [
          { t: "ステップ1：授業評価の完了", d: "前学期の授業評価を完了しないと履修登録ができません。" },
          { t: "ステップ2：履修バスケット（予備）", d: "最大20科目まで事前に入れておけます（2月／8月頃）。" },
          { t: "ステップ3：本履修登録", d: "学年別の指定日の09:30から先着順で行われます。" },
        ],
        links: [
          { name: "履修登録専用サイト", url: "http://course.wku.ac.kr" },
          { name: "学生ウェブ情報サービス（SWUPIS）", url: "https://intra.wku.ac.kr/WEB/SWupis/" },
        ],
      },
    },
    terms: [
      { k: "専攻必修", d: "卒業に必要な専攻の必修科目。" },
      { k: "学事警告", d: "成績が基準を下回ると受ける警告。" },
      { k: "修得単位", d: "科目を履修・合格して得る単位（卒業目安130～140）。" },
    ],
    rules: [
      { t: "出席", d: "総授業時間の1/4以上欠席するとFになる場合があります。" },
      { t: "卒業単位", d: "卒業には通常総130～140単位が必要です。" },
    ],
  },
};

const REMINDER_DEFS = [
  { id: "daily_checklist", kind: "daily", hour: 9, minute: 0 },
  { id: "weekly_visa", kind: "weekly", weekday: 1, hour: 10, minute: 0 }, // Monday
  { id: "daily_notice", kind: "daily", hour: 18, minute: 0 },
];

function $(id) {
  return document.getElementById(id);
}

function normalizeLang(lang) {
  const v = String(lang || "").toLowerCase();
  return TRANSLATIONS[v] ? v : "ko";
}

function getT() {
  const lang = normalizeLang(localStorage.getItem(storageKeys.language) || "ko");
  return TRANSLATIONS[lang] || TRANSLATIONS.ko;
}

function setLang(lang) {
  localStorage.setItem(storageKeys.language, normalizeLang(lang));
}

function getState() {
  return {
    lang: normalizeLang(localStorage.getItem(storageKeys.language) || "ko"),
    univ: localStorage.getItem(storageKeys.univ) || "",
    name: localStorage.getItem(storageKeys.name) || "",
  };
}

function setState(next) {
  if (typeof next.lang === "string") setLang(next.lang);
  if (typeof next.univ === "string") localStorage.setItem(storageKeys.univ, next.univ);
  if (typeof next.name === "string") localStorage.setItem(storageKeys.name, next.name);
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "") ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function hasNotificationSupport() {
  return "Notification" in window;
}

async function ensureNotificationPermission() {
  if (!hasNotificationSupport()) return "unsupported";
  if (Notification.permission === "granted") return "granted";
  if (Notification.permission === "denied") return "denied";
  try {
    return await Notification.requestPermission();
  } catch {
    return "default";
  }
}

function notifyBrowser(title, body) {
  if (!hasNotificationSupport()) return false;
  if (Notification.permission !== "granted") return false;
  try {
    new Notification(title, { body });
    return true;
  } catch {
    return false;
  }
}

function computeNextAt(def, now = new Date()) {
  const base = new Date(now.getTime());
  base.setSeconds(0, 0);

  if (def.kind === "daily") {
    const next = new Date(base.getTime());
    next.setHours(def.hour, def.minute, 0, 0);
    if (next.getTime() <= now.getTime()) next.setDate(next.getDate() + 1);
    return next.getTime();
  }

  if (def.kind === "weekly") {
    const next = new Date(base.getTime());
    next.setHours(def.hour, def.minute, 0, 0);
    const current = next.getDay(); // 0 Sun..6 Sat
    const target = def.weekday; // 1 Mon..
    let delta = (target - current + 7) % 7;
    if (delta === 0 && next.getTime() <= now.getTime()) delta = 7;
    next.setDate(next.getDate() + delta);
    return next.getTime();
  }

  return now.getTime() + 60_000;
}

function formatWhen(ts, lang) {
  try {
    return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : lang, {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(ts));
  } catch {
    const d = new Date(ts);
    return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  }
}

function getReminderText(defId, t) {
  if (defId === "daily_checklist") return { title: t.reminder_daily_title, desc: t.reminder_daily_desc };
  if (defId === "weekly_visa") return { title: t.reminder_visa_title, desc: t.reminder_visa_desc };
  if (defId === "daily_notice") return { title: t.reminder_notice_title, desc: t.reminder_notice_desc };
  return { title: defId, desc: "" };
}

function getReminderState() {
  return readJson(storageKeys.reminders, {});
}

function getReminderSchedule() {
  return readJson(storageKeys.reminderSchedule, {});
}

function setReminderEnabled(id, enabled) {
  const next = getReminderState();
  next[id] = !!enabled;
  writeJson(storageKeys.reminders, next);

  const sched = getReminderSchedule();
  if (enabled) {
    const def = REMINDER_DEFS.find((x) => x.id === id);
    if (def) sched[id] = computeNextAt(def);
  } else {
    delete sched[id];
  }
  writeJson(storageKeys.reminderSchedule, sched);
}

function renderNotificationsView() {
  const t = getT();
  const { lang } = getState();

  const setText = (id, val) => {
    const el = $(id);
    if (el) el.textContent = val;
  };

  setText("v-title-notifications", t.v_title_notifications);
  setText("notif-perm-title", t.notif_perm_title);
  setText("notif-perm-desc", t.notif_perm_desc);
  setText("btn-notif-permission-txt", t.notif_perm_btn);
  setText("notif-test-desc", t.notif_test_desc);
  setText("btn-notif-test-txt", t.notif_test_btn);

  const host = $("notifications-container");
  if (!host) return;

  const enabled = getReminderState();
  const sched = getReminderSchedule();

  host.innerHTML = `
    <div class="glass-card">
      ${REMINDER_DEFS.map((def) => {
        const txt = getReminderText(def.id, t);
        const on = !!enabled[def.id];
        const nextAt = sched[def.id] || (on ? computeNextAt(def) : null);
        const nextText = on && nextAt ? formatWhen(nextAt, lang) : "";
        return `
          <div class="toggle-row">
            <div style="flex:1; min-width:0;">
              <div class="toggle-title">${txt.title}</div>
              <div class="toggle-desc">${txt.desc}${on && nextText ? `<br/>Next: ${nextText}` : ""}</div>
            </div>
            <button class="switch ${on ? "on" : ""}" type="button" data-reminder="${def.id}" aria-label="toggle"></button>
          </div>
        `;
      }).join("")}
    </div>
  `;

  host.querySelectorAll("[data-reminder]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-reminder");
      if (!id) return;
      const isOn = !!getReminderState()[id];
      const next = !isOn;

      if (next) {
        const perm = await ensureNotificationPermission();
        if (perm !== "granted") {
          alert(t.reminder_permission_needed);
          return;
        }
      }

      setReminderEnabled(id, next);
      notifyBrowser(t.v_title_notifications, next ? t.reminder_enabled : t.reminder_disabled);
      renderNotificationsView();
    });
  });
}

let reminderTicker = null;
function startReminderLoop() {
  if (reminderTicker) return;
  reminderTicker = setInterval(() => {
    const enabled = getReminderState();
    const sched = getReminderSchedule();
    const now = Date.now();
    const t = getT();

    let changed = false;
    REMINDER_DEFS.forEach((def) => {
      if (!enabled[def.id]) return;
      const at = sched[def.id];
      if (!at) {
        sched[def.id] = computeNextAt(def);
        changed = true;
        return;
      }
      if (now + 5_000 >= at) {
        const txt = getReminderText(def.id, t);
        notifyBrowser(txt.title, txt.desc);
        sched[def.id] = computeNextAt(def, new Date(at + 1000));
        changed = true;
      }
    });

    if (changed) writeJson(storageKeys.reminderSchedule, sched);
  }, 30_000);
}

function getVoiceLang(lang) {
  if (lang === "ko") return "ko-KR";
  if (lang === "en") return "en-US";
  if (lang === "zh") return "zh-CN";
  if (lang === "vi") return "vi-VN";
  if (lang === "ja") return "ja-JP";
  return "en-US";
}

function speak(text, preferredLang) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(String(text || ""));
  const state = getState();
  utterance.lang = getVoiceLang(preferredLang || state.lang);
  utterance.rate = 0.92;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

function stopSpeak() {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
}

function getGuideBundle() {
  const { lang } = getState();
  return GUIDE_DATA[lang] || GUIDE_DATA.ko;
}

function playTTS(text) {
  if (!("speechSynthesis" in window)) {
    alert(getT().tts_unsupported);
    return;
  }
  speak(text, "ko");
}

function renderCategoryTabs() {
  const host = $("phrase-categories");
  if (!host) return;
  const bundle = getGuideBundle();
  if (!bundle?.categories) return;
  host.innerHTML = Object.entries(bundle.categories)
    .map(
      ([key, label]) =>
        `<button type="button" class="tab-btn${key === "all" ? " active" : ""}" data-phrase-category="${key}">${label}</button>`
    )
    .join("");
}

function renderPhrases(category = "all") {
  const container = $("phrases-container");
  if (!container) return;
  const bundle = getGuideBundle();
  if (!bundle?.phrases) return;
  const { univ } = getState();
  const filtered = bundle.phrases.filter((p) => {
    if (p.onlyUniv && p.onlyUniv !== univ) return false;
    return category === "all" || p.cat === category;
  });
  container.innerHTML = filtered
    .map(
      (p) => `
        <div class="phrase-card">
          <div style="flex:1; min-width:0; padding-right:6px;">
            <p class="kor-text">${p.k}</p>
            <p class="trans-text">${p.e}</p>
          </div>
          <button class="tts-btn" type="button" data-play-k="${encodeURIComponent(p.k)}" aria-label="speak">
            <i class="bx bx-volume-full"></i>
          </button>
        </div>
      `
    )
    .join("");
}

let phraseViewEventsBound = false;
function bindPhraseViewEvents() {
  if (phraseViewEventsBound) return;
  const root = $("view-phrases");
  if (!root) return;
  phraseViewEventsBound = true;
  root.addEventListener("click", (e) => {
    const tabBtn = e.target.closest("#phrase-categories [data-phrase-category]");
    if (tabBtn) {
      const cat = tabBtn.getAttribute("data-phrase-category") || "all";
      $("phrase-categories")?.querySelectorAll(".tab-btn").forEach((b) => {
        b.classList.toggle("active", (b.getAttribute("data-phrase-category") || "") === cat);
      });
      renderPhrases(cat);
      return;
    }
    const speakBtn = e.target.closest("[data-play-k]");
    if (speakBtn) {
      const encoded = speakBtn.getAttribute("data-play-k");
      if (!encoded) return;
      try {
        playTTS(decodeURIComponent(encoded));
      } catch {
        playTTS(encoded);
      }
    }
  });
}

function showView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  const el = $(id);
  if (el) el.classList.add("active");

  const navIdx = { "view-home": 0, "view-phrases": 1, "view-academic": 2, "view-profile": 3 };
  if (navIdx[id] !== undefined) {
    document.querySelectorAll("#app-nav .nav-item").forEach((n, i) => {
      if (i === navIdx[id]) n.classList.add("active");
      else n.classList.remove("active");
    });
  }
}

function updateDots(step) {
  const stepNum = parseInt(step, 10) || 1;
  document.querySelectorAll("#view-onboarding .dot").forEach((dot, idx) => {
    if (idx < stepNum) dot.classList.add("active");
    else dot.classList.remove("active");
  });
}

function showOnboardingStep(step) {
  const stepNum = parseInt(step, 10) || 1;
  document.querySelectorAll("#view-onboarding .onboarding-step").forEach((s) => {
    s.classList.remove("active");
    s.style.display = "none";
  });
  const target = $(`step-${stepNum}`);
  if (target) {
    target.classList.add("active");
    target.style.display = "block";
  }
  updateDots(stepNum);
}

function renderLangGrid() {
  const host = $("lang-grid");
  if (!host) return;
  const { lang } = getState();
  host.innerHTML = LANGS.map(
    (l) => `
      <button class="choice-card ${l.id === lang ? "selected" : ""}" type="button" data-lang="${l.id}">
        <h4>${l.label}</h4>
      </button>
    `
  ).join("");

  host.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-lang") || "ko";
      setState({ lang: next });
      applyTranslations();
      renderNotificationsView();
      renderLangGrid();
      renderUnivGrid();
      if (getState().univ) renderAppContent();
    });
  });
}

function renderUnivGrid() {
  const host = $("univ-grid");
  if (!host) return;
  const { lang, univ } = getState();
  host.innerHTML = UNIVERSITIES.map((u) => {
    const label = lang === "ko" ? u.name : u.en;
    return `
      <button class="choice-card ${u.id === univ ? "selected" : ""}" type="button" data-univ="${u.id}">
        <h4>${label}</h4>
      </button>
    `;
  }).join("");

  host.querySelectorAll("[data-univ]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-univ") || "";
      setState({ univ: id });
      renderUnivGrid();
    });
  });
}

function applyTranslations() {
  const state = getState();
  const t = getT();
  document.documentElement.lang = state.lang;

  const setText = (id, val) => {
    const el = $(id);
    if (el) el.textContent = val;
  };
  const setAttr = (id, attr, val) => {
    const el = $(id);
    if (el) el.setAttribute(attr, val);
  };

  setText("txt-onboarding-title", t.onboarding_title);
  setText("txt-onboarding-sub", t.onboarding_sub);
  setText("onboarding-note", t.onboarding_note);
  setText("lbl-lang", t.lbl_lang);
  setText("lbl-univ", t.lbl_univ);
  setText("lbl-name", t.lbl_name);
  setAttr("user-name", "placeholder", t.name_placeholder);
  setText("btn-start", t.btn_start);

  setText("title-tasks", t.title_tasks);
  setText("title-quick", t.title_quick);
  setText("title-terms", t.title_terms);
  setText("menu-rules", t.menu_rules);
  setText("menu-phrases", t.menu_phrases);
  setText("menu-univinfo", t.menu_univinfo);
  setText("menu-course-reg", t.menu_course_reg);

  setText("nav-home", t.nav_home);
  setText("nav-phrases", t.nav_phrases);
  setText("nav-info", t.nav_info);
  setText("nav-profile", t.nav_profile);

  setText("v-title-phrases", t.v_title_phrases);
  setText("v-title-academic", t.v_title_academic);
  setText("v-title-univinfo", t.v_title_univinfo);
  setText("v-title-course-reg", t.v_title_course_reg);
  setText("v-title-profile", t.v_title_profile);
  setText("tts-hint", t.tts_hint);
  setText("btn-stop-tts-txt", t.tts_stop);

  setText("title-settings", t.title_settings);
  setText("set-lang", t.set_lang);
  setText("set-lang-sub", t.set_lang_sub);
  setText("set-visa", t.set_visa);
  setText("set-visa-sub", t.set_visa_sub);
  setText("set-alarm", t.set_alarm);
  setText("set-alarm-sub", t.set_alarm_sub);

  const courseRegBtn = $("btn-open-course-reg");
  if (courseRegBtn) {
    if (state.univ === "wonkwang") courseRegBtn.removeAttribute("hidden");
    else courseRegBtn.setAttribute("hidden", "");
  }
}

function renderAppContent() {
  const { lang, univ, name } = getState();
  const t = getT();
  const guide = getGuideBundle();

  const univObj = UNIVERSITIES.find((u) => u.id === univ) || null;
  const univLabel = univObj ? (lang === "ko" ? univObj.name : univObj.en) : "-";
  const safeName = (name || "").trim() || "User";
  const imgUrl = `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(safeName)}`;

  const setText = (id, val) => {
    const el = $(id);
    if (el) el.textContent = val;
  };

  const img1 = $("user-img");
  const img2 = $("user-img-large");
  if (img1) img1.src = imgUrl;
  if (img2) img2.src = imgUrl;

  setText("display-name", safeName);
  setText("display-univ", univLabel);
  setText("profile-name", safeName);
  setText("profile-univ", univLabel);

  // Tasks with persistent check state
  const done = readJson(storageKeys.tasksDone, {});
  const taskHost = $("task-container");
  if (taskHost) {
    taskHost.innerHTML = t.tasks
      .map(
        (task) => `
          <div class="item-row">
            <button class="check-btn ${done[task.id] ? "checked" : ""}" type="button" data-task="${task.id}" aria-label="toggle">
              ${done[task.id] ? '<i class="bx bx-check"></i>' : ""}
            </button>
            <div style="flex:1;">
              <p style="font-size: 0.9rem; font-weight: 800;">${task.t}</p>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin-top:4px;">${task.d}</p>
            </div>
          </div>
        `
      )
      .join("");

    taskHost.querySelectorAll("[data-task]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-task");
        if (!id) return;
        const next = readJson(storageKeys.tasksDone, {});
        next[id] = !next[id];
        writeJson(storageKeys.tasksDone, next);
        renderAppContent();
      });
    });
  }

  // Terms
  const termHost = $("term-container");
  if (termHost) {
    termHost.innerHTML = guide.terms
      .map(
        (tm) => `
          <div class="glass-card" style="padding:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
              <span style="font-weight:900; color: var(--primary); font-size:0.9rem;">${tm.k}</span>
              <i class="bx bx-book" style="color:#cbd5e1;"></i>
            </div>
            <p style="font-size:0.8rem; color: var(--text-muted); line-height:1.5; font-weight:600;">${tm.d}</p>
          </div>
        `
      )
      .join("");
  }

  // Phrases + category tabs (한국어 TTS는 view-phrases 위임 이벤트에서 처리)
  renderCategoryTabs();
  renderPhrases("all");

  // Rules
  const academicHost = $("academic-container");
  if (academicHost) {
    academicHost.innerHTML = guide.rules
      .map(
        (r) => `
          <div class="glass-card">
            <h5 style="color: var(--primary); font-weight: 900; margin-bottom: 8px;">${r.t}</h5>
            <p style="font-size: 0.85rem; line-height: 1.6; color: var(--text-muted); font-weight: 600;">${r.d}</p>
          </div>
        `
      )
      .join("");
  }

  renderUniversityInfo();
  renderCourseRegView();
}

function pickLangMap(map, lang) {
  if (!map) return "";
  if (typeof map === "string") return map;
  return map[lang] || map.en || map.ko || "";
}

function renderCourseRegView() {
  const host = $("course-reg-container");
  if (!host) return;
  const { univ } = getState();
  const t = getT();
  if (univ !== "wonkwang") {
    host.innerHTML = "";
    return;
  }
  const wkuReg = getGuideBundle()?.univ_info?.course_registration ?? GUIDE_DATA.ko?.univ_info?.course_registration;
  if (!wkuReg?.steps?.length || !wkuReg?.links?.length) {
    host.innerHTML = "";
    return;
  }
  host.innerHTML = `
    <div class="glass-card">
      <h4 style="color: var(--primary); font-weight: 800; margin-bottom: 12px;">
        <i class="bx bxs-info-circle"></i> ${wkuReg.title}
      </h4>
      <div class="wku-steps">
        ${wkuReg.steps
          .map(
            (step) => `
          <div style="margin-bottom: 16px; border-left: 3px solid var(--primary-light); padding-left: 12px;">
            <p style="font-weight: 700; font-size: 0.9rem;">${step.t}</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${step.d}</p>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="link-group" style="margin-top: 20px;">
        ${wkuReg.links
          .map(
            (link) => `
          <a href="${link.url}" target="_blank" rel="noreferrer" class="btn-main" style="display: block; text-decoration: none; text-align: center; margin-bottom: 8px; padding: 12px; font-size: 0.9rem;">
            ${link.name} ${t.univ_wku_open}
          </a>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderUniversityInfo() {
  const { lang, univ } = getState();
  const t = getT();
  const host = $("univinfo-container");
  if (!host) return;

  const data = UNIVERSITY_DATABASE[univ];
  if (!data) {
    host.innerHTML = `
      <div class="glass-card">
        <h5 style="font-weight:900; margin-bottom:8px;">${t.menu_univinfo}</h5>
        <p style="color: var(--text-muted); font-weight:600; line-height:1.5;">${t.select_univ_alert}</p>
      </div>
    `;
    return;
  }

  const office = pickLangMap(data.office, lang);
  const emergency = pickLangMap(data.emergency, lang);
  const features = pickLangMap(data.features, lang);
  const title = lang === "ko" ? data.name : data.engName;

  const featureList = Array.isArray(features)
    ? `<ul style="margin-top:10px; padding-left:18px; color: var(--text-muted); font-weight:600; line-height:1.55;">
         ${features.map((x) => `<li style="margin:6px 0;">${x}</li>`).join("")}
       </ul>`
    : "";

  host.innerHTML = `
    <div class="glass-card">
      <h5 style="font-weight:900; color: var(--primary); margin-bottom:6px;">${title}</h5>
      <div style="color: var(--text-muted); font-weight:700; font-size:0.85rem;">${data.name}</div>

      <div style="margin-top:14px; display:grid; gap:10px;">
        <div>
          <div style="font-weight:900; font-size:0.85rem;">${t.univinfo_office}</div>
          <div style="color: var(--text-muted); font-weight:600; margin-top:6px; line-height:1.45;">${office}</div>
        </div>

        <div>
          <div style="font-weight:900; font-size:0.85rem;">${t.univinfo_tel}</div>
          <div style="display:flex; gap:10px; align-items:center; margin-top:6px; flex-wrap:wrap;">
            <a href="tel:${data.tel}" style="font-weight:900; color: var(--text); text-decoration: underline;">${data.tel}</a>
            <button class="chip" type="button" data-call="${data.tel}"><i class="bx bx-phone"></i> ${t.univinfo_call}</button>
          </div>
        </div>

        <div>
          <div style="font-weight:900; font-size:0.85rem;">${t.univinfo_website}</div>
          <div style="display:flex; gap:10px; align-items:center; margin-top:8px; flex-wrap:wrap;">
            <button class="chip" type="button" data-open="${data.website}"><i class="bx bx-link-external"></i> ${t.univinfo_open_site}</button>
            <a href="${data.website}" target="_blank" rel="noreferrer" style="color: var(--text-muted); font-weight:700; font-size:0.8rem; word-break:break-all;">${data.website}</a>
          </div>
        </div>

        <div>
          <div style="font-weight:900; font-size:0.85rem;">${t.univinfo_global}</div>
          <div style="display:flex; gap:10px; align-items:center; margin-top:8px; flex-wrap:wrap;">
            <button class="chip" type="button" data-open="${data.globalCenter}"><i class="bx bx-globe"></i> ${t.univinfo_open_global}</button>
            <a href="${data.globalCenter}" target="_blank" rel="noreferrer" style="color: var(--text-muted); font-weight:700; font-size:0.8rem; word-break:break-all;">${data.globalCenter}</a>
          </div>
        </div>

        <div>
          <div style="font-weight:900; font-size:0.85rem;">${t.univinfo_features}</div>
          ${featureList}
        </div>

        <div>
          <div style="font-weight:900; font-size:0.85rem; color: var(--danger);">${t.univinfo_emergency}</div>
          <div style="color: #991b1b; font-weight:900; margin-top:6px;">${emergency}</div>
        </div>
      </div>
    </div>
  `;

  host.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-open");
      if (!url) return;
      window.open(url, "_blank", "noreferrer");
    });
  });
  host.querySelectorAll("[data-call]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tel = btn.getAttribute("data-call");
      if (!tel) return;
      location.href = `tel:${tel}`;
    });
  });
}

function initHome() {
  const t = getT();
  const nameEl = $("user-name");
  const state = getState();
  const name = (nameEl?.value || "").trim();
  if (!nameEl) return;
  if (!name) {
    nameEl.style.borderColor = "var(--danger)";
    nameEl.focus();
    return;
  }
  if (!state.univ) {
    alert(t.select_univ_alert);
    return;
  }
  nameEl.style.borderColor = "";
  setState({ name });
  applyTranslations();
  renderAppContent();
  showView("view-home");
  const nav = $("app-nav");
  if (nav) nav.style.display = "flex";
}

function setupHandlers() {
  $("btn-start")?.addEventListener("click", initHome);

  document.querySelectorAll(".next-step").forEach((button) => {
    button.addEventListener("click", () => {
      const nextStep = button.getAttribute("data-next");
      if (!nextStep) return;
      if (nextStep === "3") {
        const { univ } = getState();
        if (!univ) {
          alert(getT().select_univ_alert);
          return;
        }
      }
      showOnboardingStep(nextStep);
    });
  });
  document.querySelectorAll(".prev-step").forEach((button) => {
    button.addEventListener("click", () => {
      const prevStep = button.getAttribute("data-prev");
      if (!prevStep) return;
      showOnboardingStep(prevStep);
    });
  });

  $("btn-open-phrases")?.addEventListener("click", () => showView("view-phrases"));
  $("btn-open-academic")?.addEventListener("click", () => showView("view-academic"));
  $("btn-open-univinfo")?.addEventListener("click", () => showView("view-univinfo"));
  $("btn-open-course-reg")?.addEventListener("click", () => {
    renderCourseRegView();
    showView("view-course-reg");
  });
  $("btn-open-profile")?.addEventListener("click", () => showView("view-profile"));

  $("btn-back-from-phrases")?.addEventListener("click", () => showView("view-home"));
  $("btn-back-from-academic")?.addEventListener("click", () => showView("view-home"));
  $("btn-back-from-univinfo")?.addEventListener("click", () => showView("view-home"));
  $("btn-back-from-course-reg")?.addEventListener("click", () => showView("view-home"));
  $("btn-back-from-profile")?.addEventListener("click", () => showView("view-home"));
  $("btn-open-onboarding")?.addEventListener("click", () => {
    showView("view-onboarding");
    showOnboardingStep(1);
  });
  $("btn-open-notifications")?.addEventListener("click", () => {
    renderNotificationsView();
    showView("view-notifications");
  });
  $("btn-home-bell")?.addEventListener("click", () => {
    renderNotificationsView();
    showView("view-notifications");
  });
  $("btn-back-from-notifications")?.addEventListener("click", () => showView("view-home"));

  $("btn-notif-permission")?.addEventListener("click", async () => {
    await ensureNotificationPermission();
    renderNotificationsView();
  });
  $("btn-notif-test")?.addEventListener("click", async () => {
    const t = getT();
    const perm = await ensureNotificationPermission();
    if (perm !== "granted") {
      alert(t.reminder_permission_needed);
      return;
    }
    notifyBrowser(t.test_notification_title, t.test_notification_body);
  });

  $("btn-stop-tts")?.addEventListener("click", stopSpeak);

  $("nav-home-btn")?.addEventListener("click", () => showView("view-home"));
  $("nav-phrases-btn")?.addEventListener("click", () => showView("view-phrases"));
  $("nav-info-btn")?.addEventListener("click", () => showView("view-academic"));
  $("nav-profile-btn")?.addEventListener("click", () => showView("view-profile"));

  $("btn-reset")?.addEventListener("click", () => {
    const t = getT();
    if (!confirm(t.reset_confirm)) return;
    Object.values(storageKeys).forEach((k) => localStorage.removeItem(k));
    location.reload();
  });

  $("user-name")?.addEventListener("input", () => {
    const el = $("user-name");
    if (el) el.style.borderColor = "";
  });
}

function boot() {
  const state = getState();
  // Default to browser language if nothing set yet
  if (!localStorage.getItem(storageKeys.language)) {
    const guess = (navigator.language || "ko").slice(0, 2).toLowerCase();
    setLang(guess);
  }

  applyTranslations();
  renderLangGrid();
  renderUnivGrid();
  setupHandlers();
  bindPhraseViewEvents();
  renderNotificationsView();
  startReminderLoop();
  showOnboardingStep(1);

  const nameEl = $("user-name");
  if (nameEl) nameEl.value = state.name || "";

  if (state.name && state.univ) {
    renderAppContent();
    showView("view-home");
    const nav = $("app-nav");
    if (nav) nav.style.display = "flex";
  } else {
    showView("view-onboarding");
    showOnboardingStep(1);
  }
}

document.addEventListener("DOMContentLoaded", boot);

