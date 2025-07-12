"use client";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardActions from "./components/DashboardActions";
import PeriodProgress from "./components/PeriodProgress";
import AssignmentTable from "./components/AssignmentTable";
import StudentTable from "./components/StudentTable";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4 md:p-8 space-y-6">
                <Header />
                <DashboardActions />
                <PeriodProgress />
                <AssignmentTable />
                <StudentTable />
            </main>
        </div>
    );
}
