"use client";

import { useState, useEffect } from "react";

interface Notification {
  id: string;
  message: string;
  type?: "info" | "success" | "warning" | "error";
  timestamp: Date;
  read?: boolean;
}

interface NotificationCenterProps {
  initialNotifications?: Notification[];
}

export function NotificationCenter({ initialNotifications = [] }: NotificationCenterProps) {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="
          relative px-3 py-2 rounded-md border border-[var(--border)]
          bg-[var(--surface)] text-[var(--text)]
          hover:bg-[var(--background)]
          transition
        "
      >
        🔔 Notifications
        {unreadCount > 0 && (
          <span
            className="
              absolute -top-1 -right-1 px-1.5 py-0.5 text-xs
              bg-red-600 text-white rounded-full
            "
          >
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div
          className="
            absolute right-0 mt-2 w-80 max-h-96 overflow-auto
            bg-[var(--surface)] border border-[var(--border)]
            rounded-md shadow-lg animate-fade
            z-50
          "
        >
          <div className="sticky top-0 bg-[var(--surface)] border-b border-[var(--border)] p-3 flex items-center justify-between">
            <h3 className="font-semibold text-[var(--text)]">Notifications</h3>
            {notifications.length > 0 && (
              <button
                onClick={clearAll}
                className="text-xs text-[var(--primary)] hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {notifications.length === 0 && (
            <p className="p-4 text-center text-[var(--textMuted)]">
              No notifications
            </p>
          )}

          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => markAsRead(n.id)}
              className={`
                p-4 border-b border-[var(--border)]
                cursor-pointer hover:bg-[var(--background)]
                transition
                ${!n.read ? "bg-blue-50/50" : ""}
              `}
            >
              <p className="text-sm text-[var(--text)]">{n.message}</p>
              <p className="text-xs text-[var(--textMuted)] mt-1">
                {new Date(n.timestamp).toLocaleTimeString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
