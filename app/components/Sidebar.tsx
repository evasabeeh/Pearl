"use client";

import {
    BookOpen,
    Users,
    LayoutDashboard,
    Settings,
    HelpCircle,
    Mail,
    X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Timetable from "./TimeTable";

export default function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<"profile" | "timetable" | null>(null);

    const openProfileModal = () => {
        setModalContent("profile");
        setIsModalOpen(true);
    };

    const openTimetableModal = () => {
        setModalContent("timetable");
        setIsModalOpen(true);
    };

    return (
        <>
            <aside className="hidden md:flex w-full md:w-64 bg-[#1c1f2e] text-white flex-col justify-between p-4 md:p-6">
                <div>
                    <button
                        onClick={openProfileModal}
                        className="flex items-center gap-3 mb-10 hover:opacity-80 transition"
                    >
                        <Image
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="avatar"
                        />
                        <div className="text-left hover:text-lilac cursor-pointer">
                            <h2 className="text-sm font-semibold">Asmita Sharma</h2>
                            <p className="text-xs text-gray-400">Teacher</p>
                        </div>
                    </button>

                    <nav className="space-y-4">
                        <a href="#" className="flex items-center gap-3 text-sm font-medium text-white hover:text-lilac">
                            <LayoutDashboard className="w-4 h-4" /> Dashboard
                        </a>
                        <button
                            onClick={openTimetableModal}
                            className="w-full text-left cursor-pointer flex items-center gap-3 text-sm font-medium text-gray-300 hover:text-lilac"
                        >
                            <BookOpen className="w-4 h-4" /> Classes
                        </button>
                        <a href="#" className="flex items-center gap-3 text-sm font-medium text-gray-300 hover:text-lilac">
                            <Users className="w-4 h-4" /> Users
                        </a>
                        <a href="#" className="flex items-center gap-3 text-sm font-medium text-gray-300 hover:text-lilac">
                            <Mail className="w-4 h-4" /> Gradebook
                        </a>
                    </nav>
                </div>

                <div className="space-y-3 text-sm text-gray-400">
                    <a href="#" className="flex gap-2 items-center hover:text-lilac">
                        <Settings className="w-4 h-4" /> Settings
                    </a>
                    <a href="#" className="flex gap-2 items-center hover:text-lilac">
                        <HelpCircle className="w-4 h-4" /> Help
                    </a>
                    <a href="#" className="flex gap-2 items-center hover:text-lilac">
                        <Mail className="w-4 h-4" /> Contact Us
                    </a>
                </div>
            </aside>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-auto">
                    <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-black"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {modalContent === "profile" && (
                            <div className="flex flex-col items-center text-center space-y-4">
                                <Image
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    width={80}
                                    height={80}
                                    className="rounded-full"
                                    alt="Profile"
                                />
                                <h2 className="text-lg font-semibold">Asmita Sharma</h2>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p><strong>Qualification:</strong> M.Ed., B.Ed.</p>
                                    <p><strong>Mobile:</strong> +91 98765 43210</p>
                                    <p><strong>Blood Group:</strong> O+</p>
                                    <p><strong>Work Email:</strong> asmita.sharma@school.edu</p>
                                </div>
                            </div>
                        )}

                        {modalContent === "timetable" && (
                            <div className="mt-2">
                                <Timetable />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
