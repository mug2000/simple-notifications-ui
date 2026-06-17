import { NotificationItem } from './NotificationItem';
import { Tab } from './Tab';
import { Header } from './Header';

export function Notifications() {
    return (
        <div className="w-[680px] bg-white rounded-3xl shadow-xl">
            <div className="flex items-center justify-between mb-6 p-4">
                <h1 className="text-3xl text-gray-900">Notifications</h1>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                    ✕
                </button>
            </div>

            <div className="flex items-center gap-8 px-4 border-b border-gray-200">
                <Tab active>Direct</Tab>
                <Tab>Overall</Tab>
                <button className="ml-auto text-primary hover:underline pb-3">Mark all as read</button>
            </div>

            <div className="space-0">
                <Header>Today</Header>

                <NotificationItem
                    name="M"
                    avatarColor="bg-gray-400"
                    icon="bg-primary"
                    message={<><strong>Mia Anders</strong> mentioned you in a comment in a thread:</>}
                    badge="FA-1"
                    time="1h ago"
                    isUnread
                />

                <NotificationItem
                    name="J"
                    avatarColor="bg-primary"
                    icon="bg-cyan-500"
                    message={<><strong>Jay Autumn</strong> created a new Goal in the <span className="text-primary font-semibold">DEV Department</span></>}
                    badge="GOAL"
                    badgeVariant="default"
                    time="4h ago"
                    isUnread
                />

                <NotificationItem
                    name="D"
                    avatarColor="bg-yellow-300"
                    icon="bg-red-500"
                    message={<><strong>Daniel Mayers</strong> rejected a PO:</>}
                    badge="PO#1302"
                    badgeVariant="primary"
                    time="08:42"
                />

                <Header>Yesterday</Header>

                <NotificationItem
                    name="M"
                    avatarColor="bg-purple-500"
                    icon="bg-blue-600"
                    message={<><strong>Mike Whits</strong> commented in a thread:</>}
                    badge="FA-1"
                    time="07/27/21 • 18:21"
                />

                <NotificationItem
                    name="D"
                    avatarColor="bg-yellow-300"
                    icon="bg-gray-800"
                    message={<><strong>Daniel Meyers</strong> invited you to a Department:</>}
                    badge="FINANCE TEAM"
                    badgeVariant="primary"
                    time="07/27/21 • 12:00"
                />
            </div>
        </div>
    );
}
