import { Plus, BookPlus, CircleCheck, MailCheck} from 'lucide-react';
export default function DashboardActions() {
    const actions = [
        { label: "Create New Assignment", icon: <Plus className="w-4 h-4" /> },
        { label: "Grade Assignments", icon: <BookPlus className="w-4 h-4" /> },
        { label: "Take Attendance", icon: <CircleCheck className="w-4 h-4" /> },
        { label: "Send Email", icon: <MailCheck className="w-4 h-4" /> },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

            {actions.map((action) => (
                <button
                    key={action.label}
                    className="cursor-pointer bg-white hover:bg-[#f5f6fa] text-sm text-gray-700 py-3 px-4 rounded-md border border-gray-200 shadow-sm flex items-center gap-2"
                >
                    <span>{action.icon}</span>
                    {action.label}
                </button>
            ))}
        </div>
    );
}
