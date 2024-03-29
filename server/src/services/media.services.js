import models from '../db/models';
import { isUpdateDb, newMediaModelData } from '../helpers';

export const mediaFindAll = async (options) => {
  try {
    const mediaData = await models.Media.findAll(options);
    const lastUpdate = mediaData[0]?.created_at;

    console.log('Number of records found:', mediaData.length); // I like to know how many records there are

    // THIS IS ONLY FOR DEVELOPMENT PURPOSES
    // Triggering a delete all on the database from front-end is an extremely bad (stupid) idea.  Would not be doing this in any other situation.
    if (isUpdateDb(lastUpdate)) return { redirect: true, data: mediaData };
    if (!mediaData.length) return { redirect: false, data: mediaData };
    if (mediaData.length) return { redirect: false, data: mediaData };
  } catch (error) {
    console.log('Media find all where:', `${options} Error: ${error.message}`);
  }
};

export const mediaFindById = async (id) => {
  try {
    const mediaData = await models.Media.findByPk(id);

    return { data: mediaData };
  } catch (error) {
    console.log('Media find by id:', `Error: ${error.message}`);
  }
};

export const mediaBulkCreate = async () => {
  try {
    const newModelDataPromise = await newMediaModelData();
    const bulkCreateData = await Promise.all(newModelDataPromise);

    await models.Media.bulkCreate(bulkCreateData);
  } catch (error) {
    console.log('Media bulk create:', `Error: ${error.message}`);
  }
};

export const mediaDestroy = async () => {
  try {
    await models.Media.destroy({ truncate: true });
  } catch (error) {
    console.log('Media delete:', `Error: ${error.message}`);
  }
};
