import SocialLinks from "../modules/social/social.model";

const ensureDefaultSocialLinks = async () => {
    const count = await SocialLinks.countDocuments();
    if (count === 0) {
        await SocialLinks.create({
            linkedin: "https://linkedin.com/in/yourprofile",
            discord: "https://discord.com/users/yourprofile",
            twitter: "https://twitter.com/yourprofile",
            telegram: "https://t.me/yourprofile",
            email:"infobtfventureagency@gmail.com"
        });
        console.log("Default social links created.");
    }
};

export default ensureDefaultSocialLinks;
