import React from "react";
import AppLayout from "../../layout";
import "./Detail.css";

const Detail = () => {
  const content =
    "Trong mã CSS này, chúng ta đã thêm một thuộc tính box-shadow vào pseudo-element ::before để tạo box shadow cho đường kẻ dọc. Bạn có thể điều chỉnh giá trị box-shadow (độ lệch ngang, độ lệch dọc, bán kính mờ và màu sắc) theo ý muốn để tạo hiệu ứng shadow mong muốn cho đường kẻ dọc.";
  return (
    <AppLayout>
      <div>
        <div className="paper">
          <div className="first-line">
            <p className="text-in-line">Ngày</p>
          </div>
          <div className="content-line">
            <p className="content-in-line">{content}</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Detail;
