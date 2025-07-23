import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { authRoutes } from "../modules/auth/auth.route";
import { TeamRoutes } from "../modules/team/team.route";

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
    }
];

routesConfig.forEach((routeConfig) => {
    router.use(routeConfig.path, routeConfig.router);
});
