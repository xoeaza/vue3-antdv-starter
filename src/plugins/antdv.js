import { Button } from "ant-design-vue";

export default (app) => {
  const components = {
    Button,
  };

  Object.keys(components).forEach((key) => {
    app.use(components[key]);
  });
};
