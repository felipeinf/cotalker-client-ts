import express from 'express'
import { CotalkerAPI } from '../src/core/libs/CotalkerAPI';

const router = express.Router();
const cotalkerAPI = new CotalkerAPI();

router.get('/groups', async (_, res) => {

  const { groups } = await cotalkerAPI.getAllGroups();

  res.json(groups.map(group => ({
    _id: group._id,
    nameDisplay: group.nameDisplay,
    codeDisplay: group.codeDisplay,
  })));
});

export default router;
