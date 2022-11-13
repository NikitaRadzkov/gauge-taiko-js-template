const axios = require("axios");
const { expect } = require("chai");
const baseConstants = require("../fixture/base-constants");

class ApiActions {
  async verifyGetRequestStatus(url, expectedStatus) {
    const res = await axios.get(url);
    expect(res.status).equal(expectedStatus);
  }

  async verifyPostRequest(responseBody) {
    const res = await axios.post(baseConstants.apiURL, {
      body: responseBody,
    });
    expect(res.status).equal(201);
    expect(res.data.body).to.deep.equal(responseBody);
  }
}

module.exports = new ApiActions();
