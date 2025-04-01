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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [hoverData, setHoverData] = useState(null);
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
    deposit: 0,
    withdraw: 0,
  });

  useEffect(() => {
    const fetchTransactions = () => {
      const transactionHistory = JSON.parse(localStorage.getItem("transactions")) || [];
      if (transactionHistory.length === 0) {
        setCardData({ balance: 0, orders: 0, deposit: 0, withdraw: 0, ticket: 0 });
      } else {
        const totalBalance = transactionHistory.reduce((acc, t) => acc + t.amount, 0);
        const totalTransactions = transactionHistory.length;
        const totalDeposit = transactionHistory.filter(t => t.type === "Deposit").reduce((acc, t) => acc + t.amount, 0);
        const totalWithdraw = transactionHistory.filter(t => t.type === "Withdraw").reduce((acc, t) => acc + t.amount, 0);
        
        setCardData({
          balance: totalBalance.toFixed(2),
          orders: totalTransactions,
          deposit: totalDeposit.toFixed(2),
          withdraw: totalWithdraw.toFixed(2),
          ticket: 50,
        });

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
    const interval = setInterval(fetchTransactions, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboards">
      <h2>Analytics For User Transaction</h2>
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
        {[
          { icon: "fa-wallet", label: "Balance", value: `$${cardData.balance}` },
          { icon: "fa-box", label: "Your Orders", value: cardData.orders },
          { icon: "fa-dollar-sign", label: "Deposit", value: `$${cardData.deposit}` },
          { icon: "fa-exchange-alt", label: "Withdraw", value: `$${cardData.withdraw}` },
          { icon: "fa-ticket-alt", label: "Your Ticket", value: cardData.ticket },
        ].map((item, index) => (
          <div
            key={index}
            className="cardss"
            onMouseEnter={() => setHoverData({ label: item.label, value: item.value, date: new Date().toLocaleDateString() })}
            onMouseLeave={() => setHoverData(null)}
          >
            <i className={`fas ${item.icon}`}></i>
            <span>{item.label}</span>
            <h3>{item.value}</h3>
            {hoverData && hoverData.label === item.label && (
              <div className="hover-info">
                <p>Date: {hoverData.date}</p>
                <p>Sales: {hoverData.value}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;