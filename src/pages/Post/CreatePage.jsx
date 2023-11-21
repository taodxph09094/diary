import React, { useState } from "react";
import AppLayout from "../../layout";
import CardTitle from "../../components/CardTitle";
import { Input, Form, Button, message, Spin } from "antd";
import { createPost } from "../../api/post";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
const CreatePage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const currentDayOfWeek = currentDate.toLocaleDateString("vi", {
    weekday: "long",
  });
  const [loading, setLoading] = useState(false);
  const handleButtonClick = () => {
    form.submit();
  };
  const onFinish = async (values) => {
    const body ={
        year : currentYear,
        month: currentMonth,
        day: currentDay,
        city: 'Vietnam',
        title: currentDayOfWeek,
        content: values.text
    }
    setLoading(true);
    const response = await createPost(body);
        if(response.status){
            message.success("Đăng thành công!")
             setLoading(false);
            navigate('/diary')
        }
  };

  return (
    <AppLayout>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Spin size="large"  />
        </div>
      ) : (
       <>
        <CardTitle type="Viết bài mới" />
        <div className="list-card">
          <div className="day-month">
            Thứ: {currentDayOfWeek}, Ngày: {currentDay}, Tháng: {currentMonth},
            Năm: {currentYear}
          </div>
        </div>
        <div style={{ marginTop: 50 }}>
          <Form onFinish={onFinish} form={form}>
            <Form.Item
              name="text"
              rules={[
                {
                  required: true,
                  message: "Khong de trong",
                },
              ]}
            >
              <TextArea
                placeholder="Viết gì đi nào.."
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
                style={{ fontFamily: "Playpen Sans, cursive" }}
              />
            </Form.Item>
          </Form>
          <div className="button-send" onClick={handleButtonClick}>
            Đăng
          </div>
        </div>
       </>
      )}
    </AppLayout>
  );
};

export default CreatePage;
