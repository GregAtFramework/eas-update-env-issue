import "dotenv/config";

const AppConfig = ({ config }) => {
  return {
    ...config,
    extra: {
      foo: process.env.BAR,
    },
  };
};
export default AppConfig;
