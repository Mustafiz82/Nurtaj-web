"use client";

import { useState } from "react";
import { FiHome, FiGrid, FiUser, FiShoppingCart } from "react-icons/fi";

const MobileBottomNav = () => {
    const [activeTab, setActiveTab] = useState("home");

    const navItems = [
        { id: "home", label: "Home", icon: FiHome },
        { id: "categories", label: "Categories", icon: FiGrid },
        { id: "profile", label: "Profile", icon: FiUser },
        { id: "cart", label: "Cart", icon: FiShoppingCart },
    ];

    return (
        <div className="fixed bottom-0 z-[999] left-0 w-full bg-white shadow-md border-t flex justify-around py-3">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex flex-col items-center text-sm font-medium ${activeTab === item.id ? "text-primary" : "text-black/60"
                        }`}
                >
                    <item.icon className="text-2xl mb-1" />
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default MobileBottomNav;
