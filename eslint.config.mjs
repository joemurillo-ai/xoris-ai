import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  {
    ignores: [".next/**", ".next-build/**", ".next-v05/**", ".next-v06/**", ".next-v08/**", ".next-v09/**", "node_modules/**"]
  },
  ...nextVitals
];

export default eslintConfig;
