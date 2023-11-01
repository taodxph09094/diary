import React from "react";
import AppLayout from "../../layout";
import CardTitle from "../../components/CardTitle";
import Card from "../../components/Card";

const ForMe = () => {
  const dataCard = Array(30).fill(null);
  return (
    <AppLayout>
      <CardTitle type="title" />
      <div className="list-card">
        {dataCard.map((item, index) => (
          <Card key={index} />
        ))}
      </div>
    </AppLayout>
  );
};

export default ForMe;
