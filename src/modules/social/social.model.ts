import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISocialLinks extends Document {
  linkedin: string;
  discord: string;
  twitter: string;
  telegram: string;
}

const SocialLinksSchema: Schema = new Schema({
  linkedin: {
    type: String,
    required: true,
    default: "https://linkedin.com/in/yourprofile",
  },
  discord: {
    type: String,
    required: true,
    default: "https://discord.com/users/yourprofile",
  },
  twitter: {
    type: String,
    required: true,
    default: "https://twitter.com/yourprofile",
  },
  telegram: {
    type: String,
    required: true,
    default: "https://t.me/yourprofile",
  },
  email: {
    type: String,
    required: true,
    default: "infobtfventureagency@gmail.com",
  },

});

const SocialLinks: Model<ISocialLinks> = mongoose.model<ISocialLinks>(
  "SocialLinks",
  SocialLinksSchema
);

export default SocialLinks;
