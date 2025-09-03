import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="app">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="main">
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
