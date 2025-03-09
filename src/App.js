import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SearchPage from "./components/SearchPage";
import LegalAdvice from "./components/LegalAdvice";
import LegalChatbot from "./components/LegalChatbot";
import LegalAssistant from "./components/LegalAssistant";
import PredictionPage from "./components/PredictionPage";
import NotificationPage from "./components/NotificationPage";
import LegalEducation from "./components/LegalEducation";
import FactChecking from "./components/FactChecking";
import VirtualCourt from "./components/VirtualCourt";
import OnlineDispute from "./components/OnlineDispute";
import PredictiveCase from "./components/PredictiveCase";
import SummarisedCase from "./components/Summarisedcase";
import SignUp from "./components/SignUp";
import ProfileSetting from "./components/ProfileSetting";
import NewsUpdates from "./components/NewsUpdates";
import ContactUs from "./components/ContactUs";
import CommunityForum from "./components/CommunityForum";
import JudgeDashboard from "./components/JudgeDashboard";
import LawyerDashboard from "./components/LawyerDashboard";
import StudentDashboard from "./components/StudentDashboard";
import LitigantDashboard from "./components/LitigantDashboard";


function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |<Link to="/search"> Case Search</Link> |
        <Link to="/advice"> Legal Advice</Link> |
        <Link to="/chatbot"> Chatbot</Link> |
        <Link to="/assistant"> Assistant</Link> |
        <Link to="/prediction"> Prediction</Link> |
        <Link to="/notification"> Notification</Link> |
        <Link to="/education"> Education</Link> |
        <Link to="/checking"> Checking</Link> |
        <Link to="/virtual"> Virtual</Link> |
        <Link to="/dispute"> Dispute</Link>{" "} |
        <Link to="/predictive"> Predictive</Link> |
        <Link to="/summarised"> Summarised</Link> |
        <Link to="/signup"> Signup</Link> |
        <Link to="/profile"> ProfileSetting</Link> |
        <Link to="/news"> NewsUpdates</Link> |
        <Link to="/contact"> ContactUs</Link> |
        <Link to="/community"> Community</Link> |
        <Link to="/judge-dashboard">Judge Dashboard</Link>
        <Link to="/lawyer-dashboard">Lawyer Dashboard</Link>
        <Link to="/student-dashboard">Student Dashboard</Link>
        <Link to="/litigant-dashboard">Litigant Dashboard</Link>
 
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/advice" element={<LegalAdvice />} />
        <Route path="/chatbot" element={<LegalChatbot />} />
        <Route path="/assistant" element={<LegalAssistant />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/education" element={<LegalEducation />} />
        <Route path="/checking" element={<FactChecking />} />
        <Route path="/virtual" element={<VirtualCourt />} />
        <Route path="/dispute" element={<OnlineDispute />} />
        <Route path="/predictive" element={<PredictiveCase />} />
        <Route path="/summarised" element={<SummarisedCase />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<ProfileSetting />} />
        <Route path="/news" element={<NewsUpdates />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/community" element={<CommunityForum />} />
        <Route path="/judge-dashboard" element={<JudgeDashboard />} />
        <Route path="/lawyer-dashboard" element={<LawyerDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/litigant-dashboard" element={<LitigantDashboard />} />

      </Routes>
    </>
  );
}

export default App;
