import { createStitches } from '@stitches/react';


const { styled, theme, globalCss, config, css, keyframes } = createStitches({
  prefix: "nwwb",
  media: {
    xs: "(min-width: 320px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    xlg: "(min-width: 1440px)",
    "2xl": "(min-width: 1536px)",
    xs2: "(max-width: 320px)",
    sm2: "(max-width: 640px)",
    md2: "(max-width: 768px)",
    lg2: "(max-width: 1024px)",
    xl2: "(max-width: 1280px)",
    xlg2: "(max-width: 1440px)",
    "2xl2": "(max-width: 1536px)",
  },
  theme: {
    colors: {
      colorPrimary:'#867463',
      bgPrimary:'#FBF4E7',
      AzulPrimario:"#003e7b",
      VermelhoPrimario:"rgba(192,71,51,1)",
      darkGray: "#121212",
      white: "#fff",
      whiteSmoke: "#f8f8f8",
      grey: "#EDEDF1",
      FoggyGrey: "#ACA99F",
      SonicSilver: "#777777",
      Warning: "#D24340",
      LightYellow: "#FBC81D",

      nwSlate50: "#f8fafc",
      nwSlate100: "#f1f5f9",
      nwSlate200: "#e2e8f0",
      nwSlate300: "#cbd5e1",
      nwSlate400: "#94a3b8",
      nwSlate500: "#64748b",
      nwSlate600: "#475569",
      nwSlate700: "#334155",
      nwSlate800: "#1e293b",
      nwSlate900: "#0f172a",
      nwGray50: "#f9fafb",
      nwGray100: "#f3f4f6",
      nwGray200: "#e5e7eb",
      nwGray300: "#d1d5db",
      nwGray400: "#9ca3af",
      nwGray500: "#6b7280",
      nwGray600: "#4b5563",
      nwGray700: "#374151",
      nwGray800: "#1f2937",
      nwGray900: "#111827",
      nwZinc50: "#fafafa",
      nwZinc100: "#f4f4f5",
      nwZinc200: "#e4e4e7",
      nwZinc300: "#d4d4d8",
      nwZinc400: "#a1a1aa",
      nwZinc500: "#71717a",
      nwZinc600: "#52525b",
      nwZinc700: "#3f3f46",
      nwZinc800: "#27272a",
      nwZinc900: "#18181b",
      nwNeutral50: "#fafafa",
      nwNeutral100: "#f5f5f5",
      nwNeutral200: "#e5e5e5",
      nwNeutral300: "#d4d4d4",
      nwNeutral400: "#a3a3a3",
      nwNeutral500: "#737373",
      nwNeutral600: "#525252",
      nwNeutral700: "#404040",
      nwNeutral800: "#262626",
      nwNeutral900: "#171717",
      nwStone50: "#fafaf9",
      nwStone100: "#f5f5f4",
      nwStone200: "#e7e5e4",
      nwStone300: "#d6d3d1",
      nwStone400: "#a8a29e",
      nwStone500: "#78716c",
      nwStone600: "#57534e",
      nwStone700: "#44403c",
      nwStone800: "#292524",
      nwStone900: "#1c1917",
      nwRed50: "#fef2f2",
      nwRed100: "#fee2e2",
      nwRed200: "#fecaca",
      nwRed300: "#fca5a5",
      nwRed400: "#f87171",
      nwRed500: "#ef4444",
      nwRed600: "#dc2626",
      nwRed700: "#b91c1c",
      nwRed800: "#991b1b",
      nwRed900: "#7f1d1d",
      nwOrange50: "#fff7ed",
      nwOrange100: "#ffedd5",
      nwOrange200: "#fed7aa",
      nwOrange300: "#fdba74",
      nwOrange400: "#fb923c",
      nwOrange500: "#f97316",
      nwOrange600: "#ea580c",
      nwOrange700: "#c2410c",
      nwOrange800: "#9a3412",
      nwOrange900: "#7c2d12",
      nwAmber50: "#fffbeb",
      nwAmber100: "#fef3c7",
      nwAmber200: "#fde68a",
      nwAmber300: "#fcd34d",
      nwAmber400: "#fbbf24",
      nwAmber500: "#f59e0b",
      nwAmber600: "#d97706",
      nwAmber700: "#b45309",
      nwAmber800: "#92400e",
      nwAmber900: "#78350f",
      nwYellow50: "#fefce8",
      nwYellow100: "#fef9c3",
      nwYellow200: "#fef08a",
      nwYellow300: "#fde047",
      nwYellow400: "#facc15",
      nwYellow500: "#eab308",
      nwYellow600: "#ca8a04",
      nwYellow700: "#a16207",
      nwYellow800: "#854d0e",
      nwYellow900: "#713f12",
      nwLime50: "#f7fee7",
      nwLime100: "#ecfccb",
      nwLime200: "#d9f99d",
      nwLime300: "#bef264",
      nwLime400: "#a3e635",
      nwLime500: "#84cc16",
      nwLime600: "#65a30d",
      nwLime700: "#4d7c0f",
      nwLime800: "#3f6212",
      nwLime900: "#365314",
      nwGreen50: "#f0fdf4",
      nwGreen100: "#dcfce7",
      nwGreen200: "#bbf7d0",
      nwGreen300: "#86efac",
      nwGreen400: "#4ade80",
      nwGreen500: "#22c55e",
      nwGreen600: "#16a34a",
      nwGreen700: "#15803d",
      nwGreen800: "#166534",
      nwGreen900: "#14532d",
      nwEmerald50: "#ecfdf5",
      nwEmerald100: "#d1fae5",
      nwEmerald200: "#a7f3d0",
      nwEmerald300: "#6ee7b7",
      nwEmerald400: "#34d399",
      nwEmerald500: "#10b981",
      nwEmerald600: "#059669",
      nwEmerald700: "#047857",
      nwEmerald800: "#065f46",
      nwEmerald900: "#064e3b",
      nwTeal50: "#f0fdfa",
      nwTeal100: "#ccfbf1",
      nwTeal200: "#99f6e4",
      nwTeal300: "#5eead4",
      nwTeal400: "#2dd4bf",
      nwTeal500: "#14b8a6",
      nwTeal600: "#0d9488",
      nwTeal700: "#0f766e",
      nwTeal800: "#115e59",
      nwTeal900: "#134e4a",
      nwCyan50: "#ecfeff",
      nwCyan100: "#cffafe",
      nwCyan200: "#a5f3fc",
      nwCyan300: "#67e8f9",
      nwCyan400: "#22d3ee",
      nwCyan500: "#06b6d4",
      nwCyan600: "#0891b2",
      nwCyan700: "#0e7490",
      nwCyan800: "#155e75",
      nwCyan900: "#164e63",
      nwSky50: "#f0f9ff",
      nwSky100: "#e0f2fe",
      nwSky200: "#bae6fd",
      nwSky300: "#7dd3fc",
      nwSky400: "#38bdf8",
      nwSky500: "#0ea5e9",
      nwSky600: "#0284c7",
      nwSky700: "#0369a1",
      nwSky800: "#075985",
      nwSky900: "#0c4a6e",
      nwBlue50: "#eff6ff",
      nwBlue100: "#dbeafe",
      nwBlue200: "#bfdbfe",
      nwBlue300: "#93c5fd",
      nwBlue400: "#60a5fa",
      nwBlue500: "#3b82f6",
      nwBlue600: "#2563eb",
      nwBlue700: "#1d4ed8",
      nwBlue800: "#1e40af",
      nwBlue900: "#1e3a8a",
      nwIndigo50: "#eef2ff",
      nwIndigo100: "#e0e7ff",
      nwIndigo200: "#c7d2fe",
      nwIndigo300: "#a5b4fc",
      nwIndigo400: "#818cf8",
      nwIndigo500: "#6366f1",
      nwIndigo600: "#4f46e5",
      nwIndigo700: "#4338ca",
      nwIndigo800: "#3730a3",
      nwIndigo900: "#312e81",
      nwViolet50: "#f5f3ff",
      nwViolet100: "#ede9fe",
      nwViolet200: "#ddd6fe",
      nwViolet300: "#c4b5fd",
      nwViolet400: "#a78bfa",
      nwViolet500: "#8b5cf6",
      nwViolet600: "#7c3aed",
      nwViolet700: "#6d28d9",
      nwViolet800: "#5b21b6",
      nwViolet900: "#4c1d95",
      nwPurple50: "#faf5ff",
      nwPurple100: "#f3e8ff",
      nwPurple200: "#e9d5ff",
      nwPurple300: "#d8b4fe",
      nwPurple400: "#c084fc",
      nwPurple500: "#a855f7",
      nwPurple600: "#9333ea",
      nwPurple700: "#7e22ce",
      nwPurple800: "#6b21a8",
      nwPurple900: "#581c87",
      nwFuchsia50: "#fdf4ff",
      nwFuchsia100: "#fae8ff",
      nwFuchsia200: "#f5d0fe",
      nwFuchsia300: "#f0abfc",
      nwFuchsia400: "#e879f9",
      nwFuchsia500: "#d946ef",
      nwFuchsia600: "#c026d3",
      nwFuchsia700: "#a21caf",
      nwFuchsia800: "#86198f",
      nwFuchsia900: "#701a75",
      nwPink50: "#fdf2f8",
      nwPink100: "#fce7f3",
      nwPink200: "#fbcfe8",
      nwPink300: "#f9a8d4",
      nwPink400: "#f472b6",
      nwPink500: "#ec4899",
      nwPink600: "#db2777",
      nwPink700: "#be185d",
      nwPink800: "#9d174d",
      nwPink900: "#831843",
      nwRose50: "#fff1f2",
      nwRose100: "#ffe4e6",
      nwRose200: "#fecdd3",
      nwRose300: "#fda4af",
      nwRose400: "#fb7185",
      nwRose500: "#f43f5e",
      nwRose600: "#e11d48",
      nwRose700: "#be123c",
      nwRose800: "#9f1239",
      nwRose900: "#881337",

      gray100: "#f8f8f8",
      gray200: "#f2f2f3",
      gray300: "#eaeaeb",
      gray400: "#d5d5d8",
      gray500: "#cacace",
      gray600: "#808088",
      gray700: "#45454a",
      gray800: "#141415",
      brandFinanciador: "#378894",
      green200: "#f1f8f9",
      green300: "#c9e3e8",
      green400: "#a3ced7",
      green500: "#67acbb",
      green600: "#3e6c75",
      green700: "#2e5158",
      green800: "#264349",
      green900: "#0f1b1e",
      brandEmpreendedor: "#f75e4c",
      red200: "#fbeeec",
      red300: "#f4ccc6",
      red400: "#eb9a8e",
      red500: "#e77a69",
      red600: "#d73a25",
      red700: "#c53521",
      red800: "#6b1c10",
      red900: "#110401",
    },
    space: {
      4: "0.25rem",
      6: "0.40rem",
      8: "0.5rem",
      9: "0.575rem",
      10: "0.65rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.15rem",
      20: "1.275rem",
      22: "1.375rem",
      23: "1.43rem",
      24: "1.5rem",
      31: "1.93rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      72: "4.5rem",
      80: "5rem",
      88: "5.5rem",
      96: "6rem",
      104: "6.5rem",
      112: "7rem",
      120: "7.5rem",
      128: "8rem",
      136: "8.5rem",
      144: "9rem",
      152: "9.5rem",
      150: "10rem",
    },
    fonts: {
      inter: "Inter, sans-serif",
      CodecPro: "Codec Pro, sand-serif",
    },
    lineHeight: {
      nwLG: "1.12rem",
      nwXL: "1.25rem",
    },
    fontSizes: {
      h1: "4.25rem",
      h2: "2.625rem",
      h3: "1.625rem",
      h4: "1rem",
      paragraph: "1rem",
      psmall: "0.875rem",
      caption: "0.75rem",
4: "0.25rem",
      6: "0.40rem",
      8: "0.5rem",
      9: "0.575rem",
      10: "0.65rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.15rem",
      20: "1.275rem",
      22: "1.375rem",
      23: "1.43rem",
      24: "1.5rem",
      31: "1.93rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
      72: "4.5rem",
      80: "5rem",
      88: "5.5rem",
      96: "6rem",
      104: "6.5rem",
      112: "7rem",
      120: "7.5rem",
      128: "8rem",
      136: "8.5rem",
      144: "9rem",
      152: "9.5rem",
      150: "10rem",
    },
    fontWeights: {
      nwBlack: "900",
      nwBold: "700",
      nwLight: "300",
      nwMedium: "500",
      nwNormal: "400",
      nwThin: "100",
    },
    radii: {
      xs: "6px",
      sm: "8px",
      md: "12px",
      lg: "14px",
      xl: "16px",
      xll: "17px",
      xxl: "24px",
    },
    borderStyles: {
      default: "1px solid $nwGray200",
    },
    shadows: {
      default: "0px 2px 15px -2px rgba(0, 0, 0, 0.15)",
    },
  },
});

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "html,body": {
    height: "100%",

    fontFamily: "$inter",
  },
});

export { styled, theme, globalStyles, config, css, keyframes };