import React, { useEffect, useState } from "react";
import AppLayout from "../../layout";
import CardTitle from "../../components/CardTitle";
import Card from "../../components/Card";
import { getAllPost } from "../../api/post";
import { Spin } from "antd";

const ForMe = () => {
  const [dataPost, setDataPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    try {
      const fetchDataPost = async () => {
        setLoading(true);
        const response = await getAllPost(year, month);
        if (response.status) {
          setDataPost(response.result.posts);
          setLoading(false);
        }
      };
      fetchDataPost();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [year, month]);

  return (
    <AppLayout>
      <CardTitle type="title" month={month} year={year} />
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
