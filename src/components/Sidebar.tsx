'use client';

import {
  LayoutDashboard,
  Plus,
  Settings,
  User,
} from 'lucide-react';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center py-8 h-screen w-20 border border-r-gray-200">
      <div className="flex flex-col gap-4">
        <SidebarButton
          icon={<LayoutDashboard />}
          route="/dashboard"
        />
        <SidebarButton
          icon={<Plus />}
          route="/create"
        />

        <SidebarButton
          icon={<User />}
          route="/user"
        />
      </div>
      <SidebarButton
        icon={<Settings />}
        route="/settings"
      />
    </div>
  );
};

export default Sidebar;
