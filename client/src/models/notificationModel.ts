import { Ticket } from "./ticketModel";
import { User } from "./userModel";

export interface Notification {
  id: number;
  ticketId: number;
  ticket: Ticket[];
  admin: User;
  message: string;
  seen: boolean;
}
