'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import { LucideIcon, X } from 'lucide-react'
import { sidebarItems } from '@/config/sidebar-item';

interface AdminSidebarProps {
  role: string;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const AdminSidebar = ({ isOpen, toggleSidebar, role }: AdminSidebarProps) => {
  const pathname = usePathname();
  const items = sidebarItems(role);
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-72 lg:w-64 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-all duration-300 ease-in-out lg:relative lg:translate-x-0`}
      >
        <div className="h-16 flex items-center justify-between px-4">
          <div className="flex gap-1 items-center justify-center">
            {/* <Image
              src="/assets/gif/loading.gif"
              alt="icon"
              width={48}
              height={48}
              className="w-10 h-10"
            /> */}
            <Image
              src="/assets/icon/icon.png"
              alt="icon"
              width={48}
              height={48}
              className="w-6 h-6"
            />
            <h2 className="text-2xl font-bold text-foreground">Mango<span className='text-yellow-600'>Care</span></h2>
          </div>
          <button 
            onClick={toggleSidebar} 
            className="lg:hidden focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close sidebar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="px-4 mt-2 space-y-1">
          {items.map((item) => (
            <Link
              key={item.label}
              href={`${item.href}`}
              className={`w-full text-left text-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:text-primary transition-colors ${
                pathname === item.href ? 'bg-primary text-primary-foreground hover:text-primary-foreground' : ''
              } flex items-center gap-3`}
            >
              <item.icon className="h-5 w-5" aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}

export default AdminSidebar