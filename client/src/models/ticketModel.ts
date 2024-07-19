import { Notification } from "./notificationModel";
import { User } from "./userModel";

export interface Ticket {
  id: number;
  userId: number;
  user: User;
  title: string;
  description: string;
  status: string;
  notification: Notification[];
}
