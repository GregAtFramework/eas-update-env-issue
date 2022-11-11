import "dotenv/config";

const AppConfig = ({ config }) => {
  return {
    ...config,
    extra: {
      eas: {
        projectId: "d029f5cb-9b8b-4aac-bf44-99dfa3c7cceb",
      },
      foo: process.env.BAR,
    },
  };
};
export default AppConfig;
