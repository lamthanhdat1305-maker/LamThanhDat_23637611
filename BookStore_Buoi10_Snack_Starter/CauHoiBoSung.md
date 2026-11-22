# Buổi 10 – Trả lời Câu hỏi bổ sung

## Câu 1. Vì sao khi đổi numColumns của FlatList phải đổi cả key? Bỏ key thì chuyện gì xảy ra?

FlatList tính bố cục hàng và cột một lần lúc được tạo, nên không cho đổi số cột khi đang chạy. Khi key đổi theo số cột (`key={String(numColumns)}`), React coi đó là một component khác: nó gỡ FlatList cũ và dựng FlatList mới với số cột mới. Nếu bỏ key, bật công tắc "Dạng lưới" sẽ báo lỗi "Changing numColumns on the fly is not supported" và danh sách không chuyển sang 2 cột.

## Câu 2. Dữ liệu nào nên để trong useState của màn hình, dữ liệu nào nên đưa vào Redux? Lấy ví dụ từ BookStore.

Dữ liệu chỉ một màn hình dùng và mất đi khi rời màn cũng không sao thì để trong useState. Ví dụ `keyword` (ô tìm kiếm) và `isTile` (công tắc "Dạng lưới") chỉ ảnh hưởng tới màn Home. Dữ liệu nhiều màn cùng đọc hoặc sửa thì đưa vào Redux. Ví dụ giỏ hàng được màn Chi tiết thêm vào, màn Giỏ hàng hiển thị và thanh tab đọc để hiện badge. Yêu thích được màn Chi tiết bật tắt và tab Yêu thích hiển thị.

## Câu 3. Trong createSlice được viết state.items.push(…) và found.quantity += 1. Vì sao viết như vậy được, trong khi ở component bình thường không được sửa trực tiếp state?

createSlice của Redux Toolkit dùng sẵn thư viện Immer. Reducer thực chất làm việc trên một bản nháp của state. Immer ghi lại các thay đổi trên bản nháp đó rồi tạo ra một state mới, state cũ vẫn giữ nguyên. Ở component thường không có Immer, nên sửa trực tiếp state thì tham chiếu không đổi, React không biết có thay đổi và không vẽ lại.

## Câu 4. selectIsFavorite(id) trả về một hàm. Vì sao viết như vậy? Danh sách yêu thích chỉ lưu id mà không lưu cả đối tượng sách thì có lợi gì?

useAppSelector chỉ nhận một hàm có một tham số là state. Muốn hỏi theo một cuốn sách cụ thể thì truyền id vào trước, nhận về hàm đọc state cho riêng sách đó. Chỉ lưu id thì state gọn, không trùng lặp dữ liệu với mảng sách. Thông tin sách (tên, giá…) luôn lấy từ một nguồn duy nhất nên không bị lệch. Kiểm tra đã thích hay chưa, thêm hoặc bỏ cũng đơn giản.

## Câu 5. BookCard dùng React.memo, còn onSelect ở Home được bọc bằng useCallback. Nếu bỏ useCallback thì React.memo còn tác dụng không? Giải thích.

Gần như không còn tác dụng. React.memo so sánh props cũ và mới; nếu giống nhau thì bỏ qua lần vẽ lại. Không có useCallback thì mỗi lần Home render lại (gõ tìm kiếm, bật công tắc…) sẽ tạo ra một hàm onSelect mới, nên prop onSelect luôn khác lần trước. Vì vậy mọi BookCard đều bị vẽ lại. useCallback giữ nguyên hàm giữa các lần render, nhờ đó React.memo mới bỏ qua được các thẻ không đổi.

## Câu 6 (Bonus). Một createAsyncThunk có ba hành động pending, fulfilled, rejected. Mỗi hành động làm thay đổi những trường nào của state trong booksSlice?

- **pending**: `status` thành "loading", `error` được xoá về null. `items` giữ nguyên.
- **fulfilled**: `status` thành "succeeded", `items` được thay bằng mảng sách nhận từ API.
- **rejected**: `status` thành "failed", `error` lưu thông báo lỗi (hoặc "Không tải được dữ liệu" nếu không có). `items` giữ nguyên.

Trước khi gọi lần nào, `status` là "idle".
