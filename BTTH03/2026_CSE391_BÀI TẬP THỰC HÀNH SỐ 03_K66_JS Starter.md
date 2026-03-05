## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB

- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Lab JS Cơ bản</title>
  </head>
  <body>
    <h1>Khám phá JavaScript</h1>
    <p id="welcome">Chưa có JavaScript...</p>
    <button id="runBtn">Nhấn để chạy JS</button>

    <script src="main.js"></script>
  </body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```

---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

> Câu hỏi:
>
> - Em thấy dòng thông báo nào trong console?

    Hello from JavaScript!

> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?

    Điều này cho thấy JavaScript đang được thực thi khi trang web được tải.Trình duyệt đọc file main.js và chạy các lệnh trong đó, sau đó hiển thị kết quả ra Console để lập trình viên kiểm tra và debug chương trình.

---

#### Bước 2: “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)

    JavaScript có thể chạy cả trên trình duyệt và trên server.

> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?
>
> - HTML:Dùng để tạo cấu trúc và nội dung của trang web (tiêu đề, đoạn văn, hình ảnh, bảng…).
> - CSS: Dùng để thiết kế giao diện và kiểu dáng cho trang web (màu sắc, font chữ, bố cục…).
> - JavaScript: Dùng để tạo chức năng và tương tác cho trang web (xử lý sự kiện, thay đổi nội dung, kiểm tra dữ liệu người dùng…).

---

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age;
typeof name;
typeof isStudent;

1 + 2 * 3;
"Hello " + "world";
```

> Câu hỏi:
>
> - Kết quả `typeof age` là gì?

    number

> - Kết quả `typeof name` là gì?

    string

> - Kết quả `typeof isStudent` là gì?

    boolean

> - Em hãy tự mô tả ngắn gọn:
>   - `number` là: Là kiểu dữ liệu dùng để lưu trữ các giá trị số như số nguyên hoặc số thập phân.
>   - `string` là: Là kiểu dữ liệu dùng để lưu trữ chuỗi ký tự hoặc văn bản, thường đặt trong dấu " " hoặc ' '.
>   - `boolean` là: Là kiểu dữ liệu chỉ có hai giá trị là true hoặc false, thường dùng để biểu diễn điều kiện đúng hoặc sai.

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "An";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

> Câu hỏi:
>
> - Dòng log hiển thị gì sau khi em sửa thông tin?

    Xin chào, mình là Chí Đức, năm nay mình 20 tuổi.

> - Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào?

    Nếu quên dấu ';':Thông thường JavaScript vẫn có thể chạy, vì JavaScript có cơ chế tự chèn dấu ; (Automatic Semicolon Insertion).
    Nếu quên dấu'+' khi nối chuỗi trình duyệt sẽ báo lỗi trong Console như sau: Uncaught SyntaxError: missing ) after argument list (at main.js:7:13)

---

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị nhất em vừa khám phá được về console là gì?

    Điều thú vị nhất là Console cho phép chạy và kiểm tra các đoạn mã JavaScript trực tiếp. Nhờ đó em có thể nhanh chóng xem kết quả của chương trình và kiểm tra lỗi khi lập trình.

> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)?

    Trong quá trình thử nghiệm em gặp lỗi khi thiếu dấu + khi nối chuỗi trong câu lệnh console.log(). Trình duyệt báo lỗi trong Console nên em đọc thông báo lỗi, sau đó chỉnh sửa lại cú pháp cho đúng và chạy lại chương trình.

---

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```

---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: Giỏi
> b) Nếu `score = 6`, em dự đoán console sẽ in: Trung Bình

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
>
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: đều là Giỏi
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: đều là Trung bình

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Khi nào chương trình in `"Giỏi"`?

    Khi giá trị score lớn hơn hoặc bằng 8.

> - Khi nào chương trình in `"Yếu"`?

    Khi giá trị score nhỏ hơn 5.

> - Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống):Cấu trúc if/else giống như một ngã rẽ trong chương trình. Chương trình sẽ kiểm tra điều kiện, nếu điều kiện đúng thì thực hiện một hành động, nếu sai thì chuyển sang điều kiện khác hoặc thực hiện hành động khác.

........................................................................
........................................................................

---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:

```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: 8

2. Viết thêm hàm `xepLoai(avg)` trong file JS:

```js
function xepLoai(avg) {
  // TODO: Dùng if/else để:
  // avg >= 8  -> "Giỏi"
  // avg >= 6.5 -> "Khá"
  // avg >= 5  -> "Trung bình"
  // còn lại   -> "Yếu"
}
```

3. Gọi thử trong console:

```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
>
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: tinhDiemTrungBinh hoặc xepLoai
>   - Tham số (parameters): Các giá trị truyền vào hàm như m1, m2, m3, avg.
>   - Thân hàm (body): Là phần chứa các câu lệnh xử lý bên trong dấu { }.
>   - Giá trị trả về (return): Là kết quả mà hàm trả về sau khi thực hiện xong, ví dụ return avg.
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì?

    Việc sử dụng hàm giúp tái sử dụng code nhiều lần, chương trình dễ đọc, dễ bảo trì và dễ quản lý hơn thay vì phải viết lại cùng một đoạn code nhiều lần.

---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  // TODO:
  // Nếu age >= 18 -> console.log("Đủ 18 tuổi");
  // Ngược lại -> console.log("Chưa đủ 18 tuổi");
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

#### Bước 5: Phản tư

> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất?

    Phần khó hiểu nhất là cách sử dụng if/else trong hàm để phân loại kết quả.

> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)?

    Em đã thử thay đổi các giá trị khác nhau trong chương trình, quan sát kết quả trên Console và đọc lại ví dụ để hiểu rõ hơn cách hoạt động của điều kiện và hàm.

---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent =
    "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```

---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
>
> - `document.getElementById("status")` đang làm gì?

    Lệnh này dùng để lấy phần tử HTML có id là status trong trang web để JavaScript có thể truy cập và thay đổi nội dung của phần tử đó.

> - Sự kiện `"click"` xảy ra khi nào?

    Sự kiện "click" xảy ra khi người dùng nhấn chuột vào một phần tử, ví dụ như nút button trên trang web.

> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?

    Khi nhấn nút btnHello, nội dung của thẻ <p id="status"> sẽ được thay đổi thành: Xin chào! Đây là nội dung được thay đổi bằng JavaScript.

---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
>
> - Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử.

    Có

> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`.

    Ví dụ thay đổi màu chữ của toàn bộ trang:document.body.style.color = "blue";

---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
>
> - Sự kiện `"input"` khác gì so với `"click"`?

    input xảy ra Khi người dùng bấm chuột vào phần tử (button, div, link...)
    click xảy ra khi nội dung trong ô nhập liệu thay đổi (gõ, xoá, dán text...)

> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì?

    Xin chào, !

---

#### Bước 4: Liên hệ khái niệm DOM

> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.
>
> Em hãy:
>
> - Tự mô tả DOM bằng lời của em:
>   DOM là cầu nối giữa HTML và JavaScript, giúp JS chỉnh sửa trang web sau khi trang đã tải.
> - Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể).

    document.body.style.backgroundColor = "red";

---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. Khi vừa tải trang (chưa tương tác).
2. Sau khi nhấn “Chào”.
3. Sau khi đổi nền sang màu đỏ.
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.

_(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)_

---

## 6. KẾT THÚC (15’): GIỚI THIỆU JQUERY \& PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

```js
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});
```

> Câu hỏi:
>
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?

    Hai đoạn code đều làm cùng một việc: Bắt sự kiện click của nút btnHello và hiển thị thông báo alert khi người dùng nhấn nút.

> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?

    `document.getElementById` vs `$("#id")`:
    JS thuần phải viết đầy đủ document.getElementById()
    jQuery chỉ cần $("#id") nên ngắn và dễ viết hơn.

    `addEventListener` vs `.on`:
    JS thuần dùng addEventListener
    jQuery dùng .on() nên viết ngắn hơn.

> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. Đơn giản hóa việc thao tác DOM (chọn, thay đổi nội dung, style của phần tử HTML nhanh hơn so với JS thuần).
>   2. Xử lý sự kiện và tạo hiệu ứng/animation trên trang web (click, hover, ẩn/hiện phần tử, hiệu ứng chuyển động, AJAX...).

---

### 6.2. Tự đánh giá \& định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?

    Em tò mò nhất về DOM và cách JavaScript thay đổi nội dung trang web khi người dùng tương tác như click nút hoặc nhập dữ liệu.

> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)?

    Em muốn thử làm tính năng đổi theme sáng/tối (dark mode) hoặc bộ đếm số lần nhấn nút bằng JavaScript.

> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến \& kiểu dữ liệu: [ ] Chưa hiểu [V] Tạm ổn [ ] Khá rõ
>    - If/else \& hàm: [ ] Chưa hiểu [V] Tạm ổn [ ] Khá rõ
>    - DOM \& sự kiện: [ ] Chưa hiểu [V] Tạm ổn [ ] Khá rõ

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
  - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
  - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

````

---```

````
