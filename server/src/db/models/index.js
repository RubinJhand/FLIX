import '../../utils/env.js';
import Media from './media.js';

const models = {
  Media
};

Media.findByPk(1).then((data) => console.log(data));

console.log('index:', Media);

Object.entries(models).map(([, model]) => {
  if (model?.associate) {
    model.associate(models);
  }
  return model;
});

export default models;
