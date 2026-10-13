// CẤU HÌNH LIÊN KẾT GOOGLE SHEET XÁC NHẬN THAM DỰ LỄ TỐT NGHIỆP
// Link Google Sheet của bạn:
// https://docs.google.com/spreadsheets/d/11rBHAxo92bhs9VbkTZizsY12kOuKDaDZA9HKYpto1h4/edit?gid=0#gid=0

export const RSVP_CONFIG = {
  // Đường link Google Sheet chính thức của bạn (Lý Tiểu Long)
  SHEET_URL: 'https://docs.google.com/spreadsheets/d/1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs/edit?gid=0#gid=0',
  SHEET_ID: '1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs',

  // Đường dẫn Web App Google Apps Script để nhận dữ liệu từ web vào Sheet
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxIjAxk49gL4ASvyLf7ryCBAOuB6dCRnBlsvT2tRmf0GfZaN_S7h27EuDKCkpW1eKH4/exec',
};

// Hàm lấy SCRIPT_URL ưu tiên từ localStorage (nếu có nhập trực tiếp trên web) hoặc từ config
export function getRsvpScriptUrl() {
  if (typeof window !== 'undefined') {
    const localUrl = localStorage.getItem('graduation_rsvp_script_url');
    if (localUrl && localUrl.trim().length > 0) {
      return localUrl.trim();
    }
  }
  return RSVP_CONFIG.SCRIPT_URL;
}

// Hàm lưu SCRIPT_URL vào localStorage để thử nghiệm nhanh mà không cần build lại code
export function setRsvpScriptUrl(url) {
  if (typeof window !== 'undefined') {
    if (url && url.trim().length > 0) {
      localStorage.setItem('graduation_rsvp_script_url', url.trim());
    } else {
      localStorage.removeItem('graduation_rsvp_script_url');
    }
  }
}
