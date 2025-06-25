import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#1677ff",
        borderRadius: 6,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      },
    }}
  >
    <App />
  </ConfigProvider>,
);
