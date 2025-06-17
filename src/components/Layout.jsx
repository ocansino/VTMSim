import React from 'react';
import BottomNav from './BottomNav';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pb-24">
      <Outlet />
      <BottomNav />
    </div>
  );
}
