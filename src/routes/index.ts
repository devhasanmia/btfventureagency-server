import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { TeamRoutes } from "../modules/team/team.route";
import { RecentlyWorkingRoutes } from "../modules/recentlyWorking/recentlyworking.route";
import { ServiceRoutes } from "../modules/services/services.route";
import { ContactRoutes } from "../modules/contact/contact.route";
import { PartnershipRoutes } from "../modules/partnership/partnership.route";
import { dashboardController } from "../modules/dashboard/dashboard.controller";

export const router = Router();

const routesConfig = [
    {
        path: "/user",
        router: UserRoutes,
    },
    {
        path: "/auth",
        router: authRoutes
    },
    {
        path: "/team",
        router: TeamRoutes
    },{
        path: "/recently-working",
        router: RecentlyWorkingRoutes
    },
    {
        path: "/service",
        router: ServiceRoutes
    },{
        path: "/contact",
        router: ContactRoutes
    },
    {
        path: "/partnership",
        router: PartnershipRoutes
    },
    
];

routesConfig.forEach((routeConfig) => {
    router.use(routeConfig.path, routeConfig.router);
});
