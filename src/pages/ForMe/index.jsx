import React, { useEffect, useState } from "react";
import AppLayout from "../../layout";
import CardTitle from "../../components/CardTitle";
import Card from "../../components/Card";
import { getAllPost } from "../../api/post";
import { Col, Row, Select, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const ForMe = () => {
  const navigate = useNavigate();
  const [dataPost, setDataPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    const fetchDataPost = async () => {
      try {
        setLoading(true);
        const response = await getAllPost(year, month);
        if (response.status) {
          setDataPost(response.result.posts);
          setLoading(false);
        } else {
          localStorage.clear();
          navigate("/diary");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataPost();
  }, [year, month]);
  const handleChange = (value) => {
    setMonth(value);
  };
  return (
    <AppLayout>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardTitle type="title" month={month} year={year} />
        <CardTitle>
          <Select
            defaultValue={month}
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: 1,
                label: "Tháng 1",
              },
              {
                value: 2,
                label: "Tháng 2",
              },
              {
                value: 3,
                label: "Tháng 3",
              },
              {
                value: 4,
                label: "Tháng 4",
              },
              {
                value: 5,
                label: "Tháng 5",
              },
              {
                value: 6,
                label: "Tháng 6",
              },
              {
                value: 7,
                label: "Tháng 7",
              },
              {
                value: 8,
                label: "Tháng 8",
              },
              {
                value: 9,
                label: "Tháng 8",
              },
              {
                value: 10,
                label: "Tháng 10",
              },
              {
                value: 11,
                label: "Tháng 11",
              },
              {
                value: 12,
                label: "Tháng 12",
              },
            ]}
          />
        </CardTitle>
      </div>

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
          <Spin size="large" />
        </div>
      ) : (
        <div className="list-card">
          {dataPost.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      )}
    </AppLayout>
  );
};

export default ForMe;
