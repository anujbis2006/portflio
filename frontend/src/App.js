import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    classNames: {
                        toast: "font-body !bg-card !text-foreground !border-border",
                        description: "!text-muted-foreground",
                    },
                }}
            />
        </ThemeProvider>
    );
}

export default App;
