import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Login from "./pages/Login"; import Register from "./pages/Register"; import Dashboard from "./pages/Dashboard"; import Tasks from "./pages/Tasks"; import TaskDetails from "./pages/TaskDetails"; import TaskForm from "./pages/TaskForm";
export default function App(){return <Routes><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route element={<ProtectedRoute/>}><Route element={<Layout/>}><Route path="/dashboard" element={<Dashboard/>}/><Route path="/tasks" element={<Tasks/>}/><Route path="/tasks/new" element={<TaskForm/>}/><Route path="/tasks/:id" element={<TaskDetails/>}/><Route path="/tasks/:id/edit" element={<TaskForm/>}/></Route></Route><Route path="*" element={<Navigate to="/dashboard" replace/>}/></Routes>}
