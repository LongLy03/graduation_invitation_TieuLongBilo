/**
 * Helper xử lý trích xuất và chuẩn hóa tên người được mời từ URL khi host trên Vercel hoặc các nền tảng khác.
 * 
 * Hỗ trợ đa dạng các định dạng URL:
 * 1. Query Params:
 *    - ?to=Bảo+Trân  hoặc  ?to=Bảo_Trân  hoặc  ?to=Bảo-Trân
 *    - ?name=Bảo+Trân  hoặc  ?guest=Bảo+Trân  hoặc  ?ten=Bảo+Trân
 *    - ?khach=Bảo+Trân hoặc ?u=Bảo+Trân hoặc ?n=Bảo+Trân
 * 
 * 2. Hash Fragments (khi gửi qua Zalo / Facebook Messenger link có thể chứa hash):
 *    - #?to=Bảo+Trân  hoặc  #/to=Bảo+Trân  hoặc  #to=Bảo+Trân  hoặc  #Bảo+Trân
 * 
 * 3. Path Segment (Vanity URL / Đường dẫn đẹp):
 *    - /to/Bảo-Trân  hoặc  /to/Bảo+Trân  hoặc  /Bảo-Trân
 */

/**
 * Giải mã chuỗi URL một cách an toàn, tránh lỗi URIError khi có ký tự đặc biệt
 */
export function safeDecodeUri(str) {
  if (!str) return '';
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch {
    try {
      return unescape(str);
    } catch {
      return str;
    }
  }
}

/**
 * Chuẩn hóa tên khách mời:
 * - Thay thế dấu `+` và `_` thành khoảng trắng
 * - Thay thế dấu `-` thành khoảng trắng nếu viết theo dạng slug (không chứa chữ số)
 * - Tự động viết hoa chữ cái đầu mỗi từ (Title Case) nếu người dùng gõ chữ thường
 * - Loại bỏ khoảng trắng thừa
 */
export function formatGuestName(name) {
  if (!name || typeof name !== 'string') return '';

  // 1. Chuyển đổi ký tự nối thành khoảng trắng
  let cleaned = name.replace(/[+_]/g, ' ');

  // Nếu dùng dấu gạch ngang dạng slug (VD: "Bao-Tran", "Nguyen-Van-A")
  // Chỉ thay thế nếu không chứa chữ số để tránh ảnh hưởng ngày tháng nếu có
  if (cleaned.includes('-') && !/\d/.test(cleaned)) {
    cleaned = cleaned.replace(/-/g, ' ');
  }

  // 2. Chuẩn hóa khoảng trắng dư thừa
  cleaned = cleaned.replace(/\s+/g, ' ').trim();

  // 3. Tự động viết hoa chữ cái đầu (Title Case) nếu chuỗi là chữ thường
  if (cleaned && cleaned === cleaned.toLowerCase()) {
    cleaned = cleaned
      .split(' ')
      .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : ''))
      .join(' ');
  }

  return cleaned;
}

/**
 * Lấy tên người được mời từ URL hiện tại
 * @param {string} fallbackDefault Tên hiển thị mặc định nếu URL không truyền tên khách
 * @returns {string} Tên khách mời đã được chuẩn hóa
 */
export function getGuestNameFromUrl(fallbackDefault = 'Bạn Thân Mến') {
  if (typeof window === 'undefined') return fallbackDefault;

  try {
    let rawName = '';

    // Danh sách các khóa tìm kiếm phổ biến trong query param
    const paramKeys = ['to', 'name', 'guest', 'ten', 'khach', 'u', 'n', 'guestName', 'invitation'];

    // 1. Ưu tiên 1: Đọc từ window.location.search (?to=..., ?name=...)
    if (window.location.search) {
      const searchParams = new URLSearchParams(window.location.search);
      for (const key of paramKeys) {
        const val = searchParams.get(key);
        if (val && val.trim().length > 0) {
          rawName = val.trim();
          break;
        }
      }
    }

    // 2. Ưu tiên 2: Đọc từ window.location.hash (khi app chat như Zalo/FB thêm hash vào link)
    if (!rawName && window.location.hash) {
      const hash = window.location.hash.replace(/^#\/?/, '');

      // Parse hash nếu chứa dấu ? hoặc = (VD: #?to=BaoTran hoặc #to=BaoTran)
      if (hash.includes('=') || hash.includes('?')) {
        const hashQuery = hash.startsWith('?') ? hash.slice(1) : (hash.includes('?') ? hash.split('?')[1] : hash);
        const hashParams = new URLSearchParams(hashQuery);
        for (const key of paramKeys) {
          const val = hashParams.get(key);
          if (val && val.trim().length > 0) {
            rawName = val.trim();
            break;
          }
        }
      } else {
        // Hash trực tiếp dạng #Bao-Tran hoặc #to/Bao-Tran
        const cleanHash = hash.replace(/^to\//i, '').replace(/^\//, '');
        const sectionIds = ['thiep', 'thong-tin-lien-lac', 'huong-dan-di', 'luu-y', 'countdown', 'hen-gap'];
        if (cleanHash && !sectionIds.includes(cleanHash.toLowerCase())) {
          rawName = cleanHash;
        }
      }
    }

    // 3. Ưu tiên 3: Đọc từ window.location.pathname (VD: domain.vercel.app/to/Bao-Tran hoặc domain.vercel.app/Bao-Tran)
    if (!rawName && window.location.pathname) {
      const pathname = safeDecodeUri(window.location.pathname).replace(/^\/+|\/+$/g, '');
      if (pathname) {
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length === 2 && segments[0].toLowerCase() === 'to') {
          rawName = segments[1];
        } else if (segments.length === 1) {
          const single = segments[0];
          // Bỏ qua các file tĩnh hoặc route đặc biệt
          const staticIgnored = ['index.html', 'location', 'music', 'images', 'assets', 'api', 'favicon.ico'];
          if (!staticIgnored.includes(single.toLowerCase())) {
            rawName = single;
          }
        }
      }
    }

    // Nếu tìm thấy rawName, giải mã và format
    if (rawName) {
      const decoded = safeDecodeUri(rawName);
      const formatted = formatGuestName(decoded);
      if (formatted) {
        return formatted;
      }
    }
  } catch (err) {
    console.warn('Lỗi phân tích tên khách mời từ URL:', err);
  }

  return fallbackDefault;
}

/**
 * Tiện ích hỗ trợ tạo nhanh đường dẫn thiệp mời theo tên khách
 * @param {string} name Tên khách mời cần tạo link
 * @param {string} paramKey Tham số sử dụng (mặc định 'to')
 * @returns {string} URL đầy đủ có thể copy gửi cho khách
 */
export function generateInvitationUrl(name, paramKey = 'to') {
  if (typeof window === 'undefined') return '';
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  if (!name || !name.trim()) return baseUrl;
  return `${baseUrl}?${paramKey}=${encodeURIComponent(name.trim())}`;
}
