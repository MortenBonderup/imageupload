import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: "/imageupload/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "create",
                element: <CreatePage />,
            },
            {
                path: "posts/:postId",
                element: <UpdatePage />,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;

/*export default function App() {
    return (
        <main>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/posts/:postId" element={<UpdatePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    );
} */
