import Link from "next/link";
import {
  BarChart3,
  Users2,
  Zap,
  FileText,
  Settings,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className={cn("pb-12 min-h-screen w-60 bg-gray-900")}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gray-800" />
            <h2 className="text-lg font-semibold text-white tracking-tight">
              Analytics
            </h2>
          </div>
        </div>
        <div className="px-3">
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-gray-800"
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Zap className="mr-2 h-4 w-4" />
              Engagement
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Users2 className="mr-2 h-4 w-4" />
              Demographics
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Performance
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <FileText className="mr-2 h-4 w-4" />
              Posts
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat with AI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
