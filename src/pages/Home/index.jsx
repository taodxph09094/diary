import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/background/Mind.png";
import imageMove from "../../assets/images/images/moveTo.png";
import { useNavigate } from "react-router-dom";
import { Form, Input, Modal, message } from "antd";
import { postLogin } from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/user";
const Home = ({ isLogin, auth }) => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
  };
  const imgStyle = {
    position: "absolute",
    bottom: 70,
    left: "50%",
    width: 400,
    height: 200,
    transform: "translateX(-50%)",
    cursor: "pointer",
  };
  const styleModal = {
    width: "100%",
    height: 200,
    backgroundColor: "#ffbe88",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const btnDiv = {
    display: "flex",
    justifyContent: "space-between",
  };
  const styleForm = {};
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [checkModal, setCheckModal] = useState(false);

  const handleMove = () => {
    setCheckModal(true);
  };
  const handleClose = () => {
    setCheckModal(false);
    form.resetFields();
  };
  const onSubmit = async (values) => {
    const response = await postLogin(values);
    if (response.status) {
      localStorage.setItem("userToken", response.result.token);
      dispatch(
        setUser({
          userToken: response.result.token,
          userData: response.result.userData,
        })
      );
      navigate("/diary");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {}, []);
  return (
    <div style={divStyle}>
      <img src={imageMove} style={imgStyle} alt="" onClick={handleMove} />
      {checkModal && (
        <Modal open={checkModal} centered closable={false} footer={null}>
          <div style={styleModal}>
            <div style={styleForm}>
              <Form onFinish={onSubmit} layout="horizontal" form={form}>
                <Form.Item
                  label=""
                  name="username"
                  onFinishFailed={onFinishFailed}
                  rules={[
                    {
                      required: true,
                      message: "Xin nhập tài khoản!",
                    },
                  ]}
                >
                  <div
                    style={{
                      width: 250,
                      backgroundColor: "#fff",
                      height: 40,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Input
                      style={{ border: "none" }}
                      placeholder="Nhập tài khoản"
                    />
                  </div>
                </Form.Item>

                <Form.Item
                  label=""
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Xin nhập mật khẩu!",
                    },
                  ]}
                >
                  <div
                    style={{
                      width: 250,
                      backgroundColor: "#fff",
                      height: 40,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Input.Password
                      style={{ border: "none" }}
                      placeholder="Nhập mật khẩu"
                    />
                  </div>
                </Form.Item>
              </Form>
            </div>
            <div style={btnDiv}>
              <div
                style={{
                  width: 120,
                  height: 40,
                  backgroundColor: "#d96540",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 18,
                  color: "#000",
                  fontWeight: 500,
                  cursor: "pointer",
                  marginRight: 10,
                }}
                onClick={handleClose}
              >
                Đóng
              </div>
              <div
                style={{
                  width: 120,
                  height: 40,
                  backgroundColor: "#d96540",
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 18,
                  color: "#000",
                  fontWeight: 500,
                  cursor: "pointer",
                  marginLeft: 10,
                }}
                onClick={() => form.submit()}
              >
                Đăng nhập
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
