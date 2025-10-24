import React, { useState } from 'react';
import { Box, Typography, Divider, LinearProgress } from '@mui/material';
import '@/styles/ProgressCard.css';

function Rank() {
  const [showAllTasks, setShowAllTasks] = useState(false);

  const dataTasks = [
    {
      id: 1,
      title: 'Hoàn thành bài học',
      img: 'src/assets/images/lua.png',
      done: 10,
      total: 20,
    },
    {
      id: 2,
      title: 'Kiếm thêm 20 vàng',
      img: 'src/assets/images/da.png',
      done: 12,
      total: 20,
    },
    {
      id: 3,
      title: 'Đọc 5 câu chuyện',
      img: 'src/assets/images/lua.png',
      done: 3,
      total: 5,
    },
    {
      id: 4,
      title: 'Hoàn thành quiz',
      img: 'src/assets/images/da.png',
      done: 8,
      total: 10,
    },
  ];

  const handleToggleTasks = () => {
    setShowAllTasks(!showAllTasks);
  };

  const displayedTasks = showAllTasks ? dataTasks : dataTasks.slice(0, 2);
  const hasNoTasks = dataTasks.length === 0;

  return (
    <Box className="rank-container">
      <Box className="rank-header">
        <Box className="rank-header-rank">
          <Typography variant="h5">Bảng xếp hạng</Typography>
          <Box className="rank-notification">
            <img src="src/assets/images/khien.png" alt="" />
            <Typography variant="body1" > Hoàn thành thêm 9 bài học để mở khóa tính năng</Typography>
          </Box>
        </Box>

      </Box>

      <Divider className="rank-divider"></Divider>
      
      {!hasNoTasks ? (
        <Box className="rank-task">
          <Box className="rank-header-content">
            <Typography variant="h5">Nhiệm vụ hằng ngày</Typography>
            <Typography variant="h6" className="see-all" onClick={handleToggleTasks}>
              {showAllTasks ? 'Thu gọn' : 'Xem tất cả'}
            </Typography>
          </Box>

          <Box className="rank-task-content">
            {displayedTasks.map(task => {
              const percent = (task.done / task.total) * 100;
              return (
                <Box key={task.id} className="rank-task-item">
                  <img src={task.img} alt={task.title} />
                  <Box className="rank-task-info">
                    <Typography variant="body1">{task.title}</Typography>
                    <Box className="rank-task-progress">
                      <LinearProgress variant="determinate" value={percent} className="linear" />
                      <Typography variant="body2">
                        {task.done}/{task.total}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ) : (

        <Box className="rank-task-empty">
          <Box className="rank-header-content">
            <Typography variant="h5">Nhiệm vụ hằng ngày</Typography>
          </Box>
          <Box className="rank-empty-message">
            <Typography variant="body1" className="empty-text">
              Không có nhiệm vụ nào cả
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Rank;
