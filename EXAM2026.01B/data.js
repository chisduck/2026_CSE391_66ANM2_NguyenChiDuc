const initialEvents = [{}];

// Hàm này để kiểm tra và nạp dữ liệu mẫu nếu LocalStorage đang trống
function initData() {
  if (!localStorage.getItem("hotel_bookings")) {
    localStorage.setItem("hotel_bookings", JSON.stringify(initialBookings));
  }
}

// Chạy hàm khởi tạo ngay khi load file data.js
initData();
