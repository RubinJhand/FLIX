import models from '../db/models';

export const mediaIndex = (req, res) => {
  models.Media.findAll()
    .then((data) => {
      return res.json({ data });
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};

export const mediaShow = (req, res) => {
  const { id } = req.params;

  models.Media.findByPk(id)
    .then((data) => {
      return res.json({ data });
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};

export const mediaShowTv = (req, res) => {
  models.Media.findAll({ where: { tv: true } })
    .then((data) => {
      return res.json({ data });
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};

export const mediaShowMovie = (req, res) => {
  models.Media.findAll({ where: { movie: true } })
    .then((data) => {
      return res.json({ data });
    })
    .catch((error) => {
      return res.json({
        message: `Error: ${error.message}`
      });
    });
};
