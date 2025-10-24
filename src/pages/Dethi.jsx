import React from "react";
import { Box, Typography } from "@mui/material";

function DeThi() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="container__group__popup">
            <div className="group__popup">
              <div className="topic__item">
                <div className="topic__item-left">Toán 5 – Chủ đề 1</div>
                <div className="topic__item-right">
                  <div className="level">
                    <p>Dễ</p>
                  </div>
                </div>
              </div>
              <div className="paragraph__item">
                <p>
                  Bài kiểm tra này giúp các em ôn tập và củng cố kiến thức về số
                  tự nhiên, bao gồm: cách đọc, viết số tự nhiên, so sánh các số
                  tự nhiên, và thực hiện các phép tính cộng, trừ, nhân, chia.
                </p>
              </div>
              <div className="info__item">
                <div className="quantity">
                  <FaFileAlt />
                  <p>30 câu</p>
                </div>
                <div className="time">
                  <FaClock />
                  <p>15 phút</p>
                </div>
                <div className="date">
                  <GrScheduleNew />
                  <p>20/09/2025</p>
                </div>
              </div>
              <div className="start__item">
                <button className="start__btn">Bắt đầu làm bài!</button>
              </div>
            </div>
          </div>
          <div/>
        </div>
      </div>
    </div>

  );
}

export default DeThi;
