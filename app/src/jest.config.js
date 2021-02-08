module.exports = {
    name: "app",
    preset: "jest-preset-angular",
    roots: ["src"],
    setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
    reporters: ["default", "jest-junit"],
    coverageReporters: [["lcov", {"projectRoot": "../../"}], ["cobertura", {"projectRoot": "../../"}], "text-summary"],
};
