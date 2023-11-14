import React, { useState } from "react";
import AppLayout from "../../layout";
import CardTitle from "../../components/CardTitle";
import { Input, Form, Button, message } from "antd";
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
    console.log(body);
    const response = await createPost(body);
        if(response.status){
            message.success("Đăng thành công!")
            navigate('/diary')
        }
  };

  return (
    <AppLayout>
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
    </AppLayout>
  );
};

export default CreatePage;
