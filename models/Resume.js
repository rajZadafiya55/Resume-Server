import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  degree: String,
  school: String,
  startDate: Date,
  endDate: Date,
});

const experienceSchema = new mongoose.Schema({
  position: String,
  company: String,
  startDate: Date,
  endDate: Date,
  description: String,
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  technologies: [String],
  startDate: Date,
  endDate: Date,
});

const certificationSchema = new mongoose.Schema({
  title: String,
  issuer: String,
  date: Date,
});

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: String,
    title: String,
    email: String,
    phone: String,
    address: String,
    github: String,
    website: String,
    summary: String, 
    hobbies: [String],
    education: [educationSchema],
    experiences: [experienceSchema], 
    projects: [projectSchema],
    certifications: [certificationSchema],
    skills: [String],
    languages: [String],
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
