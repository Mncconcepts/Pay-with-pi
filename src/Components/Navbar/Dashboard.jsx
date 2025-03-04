import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Dashboard.css";
import Footer from "./Footer";

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [activityData, setActivityData] = useState({
    labels: [],
    datasets: [
      {
        label: "Activity",
        data: [],
        borderColor: "#76ddeb",
        backgroundColor: "rgba(118, 221, 235, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Transactions",
        data: [],
        borderColor: "#ffa726",
        backgroundColor: "rgba(255, 167, 38, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  });

  const [cardData, setCardData] = useState({
    balance: 0,
    orders: 0,
    transactions: 0,
    deposit: 0,
    revenue: 0,
    users: 0,
    withdraw: 0,
    ticket: 0,
  });

  // Fetch transaction data in real time
  useEffect(() => {
    const fetchTransactions = () => {
      // Simulating API call (Replace this with actual API call)
      const transactionHistory = JSON.parse(localStorage.getItem("transactions")) || [];

      if (transactionHistory.length === 0) {
        // If no transactions exist, reset to zero
        setCardData({
          balance: 0,
          orders: 0,
          transactions: 0,
          deposit: 0,
          revenue: 0,
          users: 0,
          withdraw: 0,
          ticket: 0,
        });
      } else {
        // Calculate real-time data
        const totalBalance = transactionHistory.reduce((acc, t) => acc + t.amount, 0);
        const totalTransactions = transactionHistory.length;
        const totalDeposit = transactionHistory.filter(t => t.type === "Deposit").reduce((acc, t) => acc + t.amount, 0);
        const totalWithdraw = transactionHistory.filter(t => t.type === "Withdraw").reduce((acc, t) => acc + t.amount, 0);
        const totalRevenue = totalBalance - totalWithdraw; // Example revenue calculation

        setCardData({
          balance: totalBalance.toFixed(2),
          orders: totalTransactions,
          transactions: totalTransactions,
          deposit: totalDeposit.toFixed(2),
          revenue: totalRevenue.toFixed(2),
          users: 1000, // Placeholder (fetch actual user count if needed)
          withdraw: totalWithdraw.toFixed(2),
          ticket: 50, // Placeholder (fetch actual ticket count if needed)
        });

        // Update chart data
        const now = new Date().toLocaleTimeString();
        setActivityData(prevData => ({
          labels: [...prevData.labels.slice(-9), now],
          datasets: [
            { ...prevData.datasets[0], data: [...prevData.datasets[0].data.slice(-9), totalTransactions] },
            { ...prevData.datasets[1], data: [...prevData.datasets[1].data.slice(-9), totalDeposit] },
          ],
        }));
      }
    };

    fetchTransactions();

    // Fetch transactions every 10 seconds
    const interval = setInterval(fetchTransactions, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboards">
      <h2>Analytics</h2>
      <hr className="mb-4" />
      <div className="chart-container">
        <Line
          data={activityData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Activity and Transaction Tracking" },
            },
            scales: {
              x: { title: { display: true, text: "Time" } },
              y: { title: { display: true, text: "Count" } },
            },
          }}
        />
      </div>
      <div className="grid mb-5">
        <div className="cardss">
          <i className="fas fa-wallet"></i>
          <span>Balance</span>
          <h3>${cardData.balance}</h3>
        </div>
        <div className="cardss">
          <i className="fas fa-box"></i>
          <span>Orders</span>
          <h3>{cardData.orders}</h3>
        </div>
        <div className="cardss">
          <i className="fas fa-exchange-alt"></i>
          <span>Transactions</span>
          <h3>{cardData.transactions}</h3>
        </div>
        <div className="cardss">
          <i className="fas fa-dollar-sign"></i>
          <span>Deposit</span>
          <h3>${cardData.deposit}</h3>
        </div>
        <div className="cardss">
          <i className="fas fa-chart-line"></i>
          <span>Revenue</span>
          <h3>${cardData.revenue}</h3>
        </div>
        <div className="cardss">
          <i className="fas fa-users"></i>
          <span>Users</span>
          <h3>{cardData.users}</h3>
        </div>
        <div className="cardss">
          <i className="fas fa-exchange-alt"></i>
          <span>Withdraw</span>
          <h3>${cardData.withdraw}</h3>
        </div>
        <div className="cardss">
          <i className="fas fa-ticket-alt"></i>
          <span>Ticket</span>
          <h3>{cardData.ticket}</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
