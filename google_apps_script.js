/* eslint-disable no-unused-vars */
/**
 * =========================================================================================
 * MÃ GOOGLE APPS SCRIPT HOÀN CHỈNH CHO THIỆP MỜI TỐT NGHIỆP LÝ TIỂU LONG
 * =========================================================================================
 * 
 * Google Sheet đích: 
 * https://docs.google.com/spreadsheets/d/1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs/edit?gid=0#gid=0
 * 
 * LƯU Ý QUAN TRỌNG ĐỂ KHÔNG BỊ LỖI CHUYỂN HƯỚNG ĐĂNG NHẬP (302 REDIRECT):
 * Khi Triển khai (Deploy) làm Web App:
 * 1. Thực thi dưới dạng (Execute as): "Tôi" (Me)
 * 2. Ai có quyền truy cập (Who has access): BẮT BUỘC chọn "Bất kỳ ai" (Anyone)
 *    (Không được chọn "Chỉ mình tôi" hay "Người có tài khoản Google")
 * =========================================================================================
 */

var SPREADSHEET_ID = "1bHEqsP7y5Shxk3YXBIafjcrBzTPySJjsPz9Epn6kKBs";

// Hàm xử lý chung cho cả POST và GET
function handleDataRecord(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var ss;
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    } catch (err) { }

    // Nếu script tạo độc lập, mở chính xác bằng ID trang tính
    if (!ss) {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    }

    var sheet = ss.getActiveSheet();

    // Nếu trang tính còn trống, tự động tạo dòng tiêu đề đẹp tông xanh tốt nghiệp
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Tên người được mời",
        "Trạng thái họ chọn",
        "Thời gian xác nhận"
      ]);

      var headerRange = sheet.getRange(1, 1, 1, 3);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0f2744"); // Tông xanh Navy học thuật
      headerRange.setFontColor("#fef08a"); // Chữ vàng ánh kim
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      sheet.setRowHeight(1, 38);

      sheet.setColumnWidth(1, 260); // Tên người được mời
      sheet.setColumnWidth(2, 180); // Trạng thái
      sheet.setColumnWidth(3, 200); // Thời gian
    }

    var name = "";
    var status = "";

    // Đọc từ URL parameters (hỗ trợ cả GET và POST urlencoded)
    if (e && e.parameter) {
      name = e.parameter.name || e.parameter.guestName || "";
      status = e.parameter.status || "";
    }

    // Nếu gửi dưới dạng JSON body trong POST
    if ((!name || !status) && e && e.postData && e.postData.contents) {
      try {
        var data = JSON.parse(e.postData.contents);
        name = data.name || data.guestName || name;
        status = data.status || status;
      } catch (err) {
        // Fallback
      }
    }

    // Nếu không có tên hoặc trạng thái thì không ghi dòng trống
    if (!name && !status) {
      return ContentService.createTextOutput("Hệ thống Webhook RSVP Lý Tiểu Long đang hoạt động. Vui lòng truyền tham số name và status.").setMimeType(ContentService.MimeType.TEXT);
    }

    // Thời gian khách xác nhận (múi giờ Việt Nam GMT+7)
    var formattedTime = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy HH:mm:ss");

    // Thêm dòng mới: Cột 1 = Tên người được mời, Cột 2 = Trạng thái, Cột 3 = Thời gian
    sheet.appendRow([name, status, formattedTime]);

    // Định dạng màu trực quan cho ô trạng thái
    var lastRow = sheet.getLastRow();
    var statusCell = sheet.getRange(lastRow, 2);
    if (status === "Sẽ tham dự") {
      statusCell.setBackground("#e8f5e9");
      statusCell.setFontColor("#2e7d32");
      statusCell.setFontWeight("bold");
    } else if (status === "Không tham dự") {
      statusCell.setBackground("#fce4ec");
      statusCell.setFontColor("#c2185b");
      statusCell.setFontWeight("bold");
    }

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        name: name,
        status: status,
        time: formattedTime
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Xử lý request POST từ web
function doPost(e) {
  return handleDataRecord(e);
}

// Xử lý request GET từ web (hoặc khi test trực tiếp trên trình duyệt)
function doGet(e) {
  return handleDataRecord(e);
}
