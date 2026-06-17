import { Avatar } from './Avatar';
import { Badge } from './Badge';

export function NotificationItem({
    name,
    avatarColor,
    icon,
    message,
    badge,
    badgeVariant,
    time,
    isUnread
}: {
    name: string;
    avatarColor: string;
    icon?: string;
    message: React.ReactNode;
    badge?: string;
    badgeVariant?: 'default' | 'primary';
    time: string;
    isUnread?: boolean;
}) {
    return (
        <div className="flex gap-3 py-4 border-b border-gray-200 last:border-0">
            {isUnread ? <div className="w-3 h-3 rounded-full bg-primary mt-1 ml-2" /> : <div className="w-3 h-3 ml-2" />}
            <Avatar name={name} color={avatarColor} icon={icon} />
            <div className="flex-1">
                <p className="text-gray-800 mb-2">{message}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                    {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
}
