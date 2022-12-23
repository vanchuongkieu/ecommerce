<template>
    <p>
        Tiếp nối phần cua Vinh, em xin phép giới thiệu về chi tiết hệ thống của brightchamps như sau:
        Hệ thống Brightchamps sẽ gồm có 2 phần chính
        Phần thứ nhất là Landingpage, là nơi giới thiệu cũng như quảng bá hệ thống và đăng ký học cho mọi người.
        Phần thứ hai sẽ gồm có 4 module chính: Admin, employee, teacher, student
        Mỗi module sẽ được chia thành các subdomain cùng với landing page là domain chính.
        Và tất cả đều sẽ được nằm trên cùng 1 project dự án

        Tiếp theo đến phần Admin, sẽ bao gôm các phần quản lý chung dành cho admin, đặc biệt trong phần quản lý nhân viên. 
        sẽ có chức năng là phân quyền giống như bạn Vinh đã nói ở phần trước đó, phân quyền ở đây là phân quyền động
        để mọi người có thể dễ hình dung hơn, em sẽ có 1 ví dụ như nhau:
        Có 1 nhân viên A, đang chỉ có 1 quyền là Xem Lớp học và không có quyền tạo và sửa, khi đó, admin sẽ thêm quyền Tạo và Sửa cho nhân viên A.
        Khi này, nhân viên A đã có thể tạo cũng như sửa Lớp học, ngược lại admin cũng có thể tước quyền của nhân viên A đi.

        Phần tiếp theo, em xin mời bạn Vân tiếp tục trình bày.
    </p>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>
