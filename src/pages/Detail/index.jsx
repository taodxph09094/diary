import React, { useEffect, useState } from "react";
import AppLayout from "../../layout";
import "./Detail.css";
import { useLocation } from "react-router-dom";
import { getDetail } from "../../api/post";
import { Spin } from "antd";

const Detail = () => {
  const location = useLocation();
  const { state } = location;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchDataPost = async () => {
        setLoading(true);
        const response = await getDetail(state?.id);
        if (response.status) {
          setData(response.result.post);
          setLoading(false);
        }
      };
      fetchDataPost();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [state?.id]);

  return (
    <AppLayout>
      <div style={{minHeight: 850}}>
        <div className="paper">
          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh",
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <>
              <div className="first-line">
                <p className="text-in-line">
                  {data?.title}, ngày {data?.day} tháng {data?.month} năm{" "}
                  {data?.year}
                </p>
              </div>
              <div className="content-line">
                <p className="content-in-line">{data?.content}</p>
              </div>

            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Detail;
