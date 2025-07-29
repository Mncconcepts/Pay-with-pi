import React, { useState } from "react";
import { LineChart, Line, PieChart, Pie, BarChart, Bar, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faShoppingCart, faExchangeAlt, faUsers, faUserPlus, faMoneyBillWave, faChartLine, faArrowDown, faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";
import Footer from "../Components/Navbar/Footer";

const Admin = () => {
    const [popupType, setPopupType] = useState(null);

  const handleOpenPopup = (type) => {
    setPopupType(type);
  };

  const handleClosePopup = () => {
    setPopupType(null);
  };
  
    const data = [
        { month: "Jan", sales: 10 },
        { month: "Feb", sales: 20 },
        { month: "Mar", sales: 15 },
        { month: "Apr", sales: 30 },
        { month: "May", sales: 25 },
        { month: "June", sales: 25 },
    ];

    const pieData = [
        { name: "Sale", value: 40, color: "#5A67D8" },
        { name: "Distribute", value: 30, color: "#F56565" },
        { name: "Return", value: 30, color: "#ECC94B" },
    ];

    return (
        <div className="dashboards-container">
            {/* Header Section */}
            <div className="dashboard-header-card">
                <div className="dashboard-header">
                    <Kard title="0" subtitle="Wallet Balance" color="purple" icon={faWallet} />
                    <Kard title="0" subtitle="Orders" color="blue" icon={faShoppingCart} />
                    <Kard title="0" subtitle="Transaction" color="red" icon={faExchangeAlt} />
                    <Kard title="0" subtitle="Total Users" color="orange" icon={faUsers} />
                    <Kard title="0+" subtitle="New Customers" color="green" icon={faUserPlus} />
                    <Kard title="0+" subtitle="Deposit" color="teal" icon={faMoneyBillWave} />
                    <Kard title="0+" subtitle="Revenue" color="purple" icon={faChartLine} />
                    <Kard title="0+" subtitle="Withdraw" color="blue" icon={faArrowDown} />
                    <Kard title="0+" subtitle="Tickets" color="orange" icon={faTicketAlt} />
                </div>
            </div>

            {/* Main Content */}
            <div className="dashboard-content">
                <div className="dashboard-chart">
                    <h2 className="mt-2">Sales Overview</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sales" stroke="#5A67D8" strokeWidth={2} dot={{ r: 4 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="dashboard-analytics">
                    <h2 className="mt-2">Sales Distribution</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Tooltip />
                            <Legend />
                            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Additional Charts */}
            <div className="dashboard-extra-charts">
                <div className="dashboard-bar-chart">
                    <h2 className="mt-2">Order Statistics</h2>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="sales" fill="#8884d8" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Additional Cards */}
            <div className="dashboard-cards">
                <div className="dashboard-recent-activities">
                    <h2 className="mt-2">Recent Activities</h2>
                    <ul>
                        <li>New order placed by John Doe</li>
                        <li>Product XYZ shipped</li>
                        <li>Payment received from Jane</li>
                        <li>Inventory updated</li>
                    </ul>
                </div>
                <div className="dashboard-order-status">
                    <h2 className="mt-2">Order Status</h2>

                    <div className="status-row">
                        <p>Pending: 0</p>
                        <button className="open-btn" onClick={() => handleOpenPopup("Pending")}>Open</button>
                    </div>

                    <div className="status-row">
                        <p>Completed: 0</p>
                        <button className="open-btn" onClick={() => handleOpenPopup("Completed")}>Open</button>
                    </div>

                    <div className="status-row">
                        <p>Cancelled: 0</p>
                        <button className="open-btn" onClick={() => handleOpenPopup("Cancelled")}>Open</button>
                    </div>
                </div>
            </div>

            {popupType && (
                <div className="poopup-overlay">
                    <div className="poopup-card">
                        {popupType === "Pending" && (
                            <>
                                <h2 className="text-center mt-3">Pending Orders</h2>
                                <p>These orders are waiting for approval.</p>
                                <p className="text-start"><strong>Order ID:</strong> #12345</p>
                                <p className="text-start"><strong>Customer:</strong> Jane Doe</p>
                                <p className="text-start"><strong>Status:</strong> Pending</p>
                                <p className="text-start"><strong>Total:</strong> $120</p>
                            </>
                        )}

                        {popupType === "Completed" && (
                            <>
                                <h2 className="text-center mt-3">Completed Orders</h2>
                                <p>These orders have been successfully processed.</p>
                                <p className="text-start"><strong>Order ID:</strong> #67890</p>
                                <p className="text-start"><strong>Customer:</strong> Mark Smith</p>
                                <p className="text-start"><strong>Status:</strong> Completed</p>
                                <p className="text-start"><strong>Total:</strong> $250</p>
                            </>
                        )}

                        {popupType === "Cancelled" && (
                            <>
                                <h2 className="text-center mt-3">Cancelled Orders</h2>
                                <p>These orders were cancelled by the customer.</p>
                                <p className="text-start"><strong>Order ID:</strong> #54321</p>
                                <p className="text-start"><strong>Customer:</strong> Emma Johnson</p>
                                <p className="text-start"><strong>Status:</strong> Cancelled</p>
                                <p className="text-start"><strong>Total:</strong> $75</p>
                            </>
                        )}

                        <button className="close-btn w-100" onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};


const Kard = ({ title, subtitle, color, icon }) => {
    return (
        <div className={`kard ${color}`}>
            <FontAwesomeIcon icon={icon} className="icon-style" />
            <div>
                <p>{subtitle}</p>
                <h3>{title}</h3>
            </div>
        </div>
    );
};


export default Admin;
