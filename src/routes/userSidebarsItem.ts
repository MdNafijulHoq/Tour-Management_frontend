import Booking from "@/pages/User/Booking";
import type { ISidebaritem } from "@/types";

export const userSidebarItems: ISidebaritem[] = [
  {
    title: "History",
    items: [
      {
        title: "Booking",
        url: "/user/booking",
        component: Booking,
      },
    ],
  },
];
