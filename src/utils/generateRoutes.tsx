import type { ISidebaritem } from "@/types";

/**
 * flatmap -> if there is double layer array it convert it into single layer array
 */
export const generateRoutes = (sidebarItems: ISidebaritem[]) => {
  return sidebarItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      Component: route.component,
    }))
  );
};
