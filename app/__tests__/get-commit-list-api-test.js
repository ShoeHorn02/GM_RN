import {API_COMMITS} from '../src/config/API';
// This is the function we'll be testing
const axios = require('axios');

async function getCommitList() {
  const response = await axios.get(`${API_COMMITS}${1}`);
  return response.data
}


// This is actual testing suite
describe('withFetch', () => {
  test('works', async () => {
    const json = await getCommitList()
    expect(json.length).toBeGreaterThanOrEqual(3)
  })
})
