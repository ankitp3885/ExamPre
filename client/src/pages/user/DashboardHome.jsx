import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeDashboard = () => {
  const [userData] = useState({
    name: "",
    totalExams: 12,
    attemptedExams: 10,
    averageScore: 70,
    highestScore: 90,
    lastExam: "JavaScript Basics",
    progress: 70,
  });

  return (
    <div className="container mt-4">
      {/* Heading */}
      <h2 className="mb-4 fw-bold">
        Welcome, <span className="text-primary">{userData.name}</span> 
      </h2>

      {/* Top Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-danger shadow">
            <div className="card-body">
              <h5 className="card-title">Total Exams</h5>
              <h2 className="fw-bold">{userData.totalExams}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-primary shadow">
            <div className="card-body">
              <h5 className="card-title">Attempted Exams</h5>
              <h2 className="fw-bold">{userData.attemptedExams}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-success shadow">
            <div className="card-body">
              <h5 className="card-title">Average Score</h5>
              <h2 className="fw-bold">{userData.averageScore}%</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Progress */}
      <div className="card mb-4 shadow">
        <div className="card-body">
          <h5 className="card-title fw-bold">Performance Progress</h5>
          <div className="progress" style={{ height: "25px" }}>
            <div
              className="progress-bar bg-warning fw-bold"
              role="progressbar"
              style={{ width:' ${userData.progress}% '}}
              aria-valuenow={userData.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {userData.progress}%
            </div>
          </div>
          <p className="mt-3 text-muted">
            Your performance is on the rise 
          </p>
        </div>
      </div>

      {/* Last Exam Summary */}
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title fw-bold">Last Exam Summary</h5>
          <p>
            <strong>Exam:</strong> {userData.lastExam}
          </p>
          <p>
            <strong>Highest Score:</strong>{" "}
            <span className="text-success fw-bold">
              {userData.highestScore}%
            </span>
          </p>
          <p>
            <strong>Average Score:</strong>{" "}
            <span className="text-primary fw-bold">
              {userData.averageScore}%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;