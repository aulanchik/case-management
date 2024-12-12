import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllCases, AcceptedCases, PendingCases, RejectedCases } from "@/pages";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/all" element={<AllCases />} />
        <Route path="/accepted" element={<AcceptedCases />} />
        <Route path="/pending" element={<PendingCases />} />
        <Route path="/rejected" element={<RejectedCases />} />
        <Route path="/" element={<AllCases />} />
      </Routes>
    </Router>
  );
};

export default App;
