import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Week from "./pages/Week";
import Month from "./pages/Month";
import Day from "./pages/Day";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Habit from "./pages/Habit";
import ProtectedRoute from "./ui/ProtectedRoute";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import NotProtectedRoute from "./ui/NotProtectedRoute";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Week replace to="calendar" />} />

            <Route path="day" element={<Day />} />
            <Route path="week" element={<Week />} />
            <Route path="month" element={<Month />} />
            <Route path="habit" element={<Habit />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route
            element={
              <NotProtectedRoute>
                <AppLayout />
              </NotProtectedRoute>
            }
          >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
            borderRadius: "0",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
