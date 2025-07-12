import {
    BookOpen,
    Users,
    LayoutDashboard,
    Settings,
    HelpCircle,
    Mail,
} from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="hidden md:flex w-full md:w-64 bg-[#1c1f2e] text-white flex-col justify-between p-4 md:p-6">
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="w-10 h-10 rounded-full"
                        alt="avatar"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">Asmita Sharma</h2>
                        <p className="text-xs text-gray-400">Teacher</p>
                    </div>
                </div>

                <nav className="space-y-4">
                    <a href="#" className="flex items-center gap-3 text-sm font-medium text-white hover:text-lilac">
                        <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 text-sm font-medium text-gray-300 hover:text-lilac">
                        <BookOpen className="w-4 h-4" /> Classes
                    </a>
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
    );
}
