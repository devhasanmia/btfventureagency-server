import { Partnership } from "../partnership/partnership.model";
import { Team } from "../team/team.model";
import { Services } from "../services/services.model";
import RecentlyWorking from "../recentlyWorking/recentlyworking.model";
import { Contact } from "../contact/contact.model";
import Blog from "../blog/blog.model";

export const getDashboardCounts = async () => {
  const [
    totalcontact,
    totalTeam,
    totalServices,
    totalRecentlyWorking,
    totalPartnership,
    totalBlog
  ] = await Promise.all([
    Contact.countDocuments(),
    Team.countDocuments(),
    Services.countDocuments(),
    RecentlyWorking.countDocuments(),
    Partnership.countDocuments(),
    Blog.countDocuments()
  ]);

  return {
    totalcontact,
    totalTeam,
    totalServices,
    totalRecentlyWorking,
    totalPartnership,
    totalBlog
  };
};
