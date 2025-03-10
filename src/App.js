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
import HomePage from "./components/HomePage";


function App() {
  return (
    <>
      

      <Routes>
        <Route path="/landing" element={<LandingPage />} />
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
        <Route path="/" element={<HomePage />} />

      </Routes>
    </>
  );
}

export default App;