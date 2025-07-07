
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Settings
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { title: 'Dashboard', url: '/dashboard', icon: Calendar },
    { title: 'Customers', url: '/dashboard/customers', icon: Users },
    { title: 'Provider', url: '/dashboard/provider', icon: Users },
    { title: 'Calendar', url: '/dashboard/calendar', icon: Calendar },
    { title: 'Services', url: '/dashboard/services', icon: Settings },
    { title: 'Payment', url: '/dashboard/payment', icon: Settings },
    { title: 'Settings', url: '/dashboard/settings', icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="w-64 border-r border-gray-200 bg-white">
      <SidebarHeader className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Calendar className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">FlowTime</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <div className="space-y-2">
          <NavLink
            to="/dashboard/help"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <Settings className="h-5 w-5" />
            <span>Help & Support</span>
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <div className="h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white font-bold">
              U
            </div>
            <span>Your Profile</span>
          </NavLink>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
