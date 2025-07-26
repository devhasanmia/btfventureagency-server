import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { TeamRoutes } from "../modules/team/team.route";
import { RecentlyWorkingRoutes } from "../modules/recentlyWorking/recentlyworking.route";

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
    }
];

routesConfig.forEach((routeConfig) => {
    router.use(routeConfig.path, routeConfig.router);
});
