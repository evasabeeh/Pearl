"use client";

import { useState } from "react";
import { Plus, BookPlus, CircleCheck, MailCheck, X } from "lucide-react";

export default function DashboardActions() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errors, setErrors] = useState({ recipient: "", message: "" });
    const [formData, setFormData] = useState({ recipient: "", message: "" });

    const actions = [
        { label: "Create New Assignment", icon: <Plus className="w-4 h-4" /> },
        { label: "Grade Assignments", icon: <BookPlus className="w-4 h-4" /> },
        { label: "Take Attendance", icon: <CircleCheck className="w-4 h-4" /> },
        {
            label: "Send Email",
            icon: <MailCheck className="w-4 h-4" />,
            onClick: () => {
                setErrors({ recipient: "", message: "" });
                setFormData({ recipient: "", message: "" });
                setIsModalOpen(true);
            },
        },
    ];

    const validate = () => {
        const newErrors = { recipient: "", message: "" };
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.recipient.trim()) {
            newErrors.recipient = "Recipient email is required.";
        } else if (!emailRegex.test(formData.recipient)) {
            newErrors.recipient = "Please enter a valid email address.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
        }

        setErrors(newErrors);
        return !newErrors.recipient && !newErrors.message;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log("Sending email:", formData);

        setIsModalOpen(false);
    };

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {actions.map((action) => (
                    <button
                        key={action.label}
                        onClick={action.onClick}
                        className="cursor-pointer bg-white hover:bg-[#f5f6fa] text-sm text-gray-700 py-3 px-4 rounded-md border border-gray-200 shadow-sm flex items-center gap-2"
                    >
                        <span>{action.icon}</span>
                        {action.label}
                    </button>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black"
                        >
                            <X className="cursor-pointer w-5 h-5" />
                        </button>

                        <h2 className="text-lg font-semibold mb-4">Send Email</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Recipient Email</label>
                                <input
                                    type="email"
                                    name="recipient"
                                    value={formData.recipient}
                                    onChange={(e) =>
                                        setFormData({ ...formData, recipient: e.target.value })
                                    }
                                    className={`w-full border px-3 py-2 text-sm rounded ${errors.recipient ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="teacher@example.com"
                                />
                                {errors.recipient && (
                                    <p className="text-xs text-red-500 mt-1">{errors.recipient}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className={`w-full border px-3 py-2 text-sm rounded ${errors.message ? "border-red-500" : "border-gray-300"
                                        }`}
                                    placeholder="Type your message..."
                                ></textarea>
                                {errors.message && (
                                    <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="cursor-pointer bg-[#5b7cfd] hover:bg-[#4c68e4] text-white text-sm font-medium px-4 py-2 rounded-3xl"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
