/* globals step */
const axios = require("axios");
const { expect } = require("chai");
const apiActions = require("../actions/api-actions");
const baseConstants = require("../fixture/base-constants");

step("GET request with url <url>", async (url) => {
  apiActions.verifyGetRequestStatus(url, 200);
});

step("GET requset with post id <id>", async (id) => {
  const res = await axios.get(`${baseConstants.apiURL}/${id}`);
  expect(res.data.id).equal(1);
});

step("GET request with params <limit> and <page>", async (limit, page) => {
  const res = await axios.get(baseConstants.apiURL, {
    params: {
      _limit: limit,
      _page: page,
    },
  });
  expect(res.data.length).equal(10);
});

step("POST request create new post with <title> and <body> and <userId>", async (title, body, userId) => {
  const responseBody = { title, body, userId };
  apiActions.verifyPostRequest(responseBody);
});
