import { useTheme } from "../components/ThemeContext";

export function useThemeColors() {
    const { theme } = useTheme();

    const colors = {
        // Text colors
        textPrimary: theme === "dark" ? "#ffffff" : "#111827",
        textSecondary: theme === "dark" ? "#d1d5db" : "#4b5563",
        textTertiary: theme === "dark" ? "#9ca3af" : "#6b7280",

        // Background colors
        bgGlass: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
        bgGlassHover: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",

        // Border colors
        border: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        borderHover: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.15)",

        // Accent colors (same for both themes)
        accentRed: "#dc143c",
        accentRedLight: "#ff1744",
        accentBlue: theme === "dark" ? "#4169e1" : "#2563eb",
        accentBlueLight: theme === "dark" ? "#1e90ff" : "#3b82f6",

        // Gradient colors
        gradientName1: theme === "dark"
            ? "linear-gradient(135deg, #ffffff 0%, #dc143c 100%)"
            : "linear-gradient(135deg, #111827 0%, #dc143c 100%)",
        gradientName2: theme === "dark"
            ? "linear-gradient(135deg, #dc143c 0%, #4169e1 100%)"
            : "linear-gradient(135deg, #dc143c 0%, #2563eb 100%)",

        // Glow effects
        glowRed: theme === "dark" ? "rgba(220, 20, 60, 0.3)" : "rgba(220, 20, 60, 0.15)",
        glowBlue: theme === "dark" ? "rgba(65, 105, 225, 0.3)" : "rgba(37, 99, 235, 0.15)",
    };

    return colors;
}
