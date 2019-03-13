const fetch = require('node-fetch');

module.exports = async function getContributors(req, res) {
  const contribURL = 'https://raw.githubusercontent.com/CodingGardenCommunity/contributors/master/contributors.json';
  try {
    const response = await fetch(contribURL);
    const data = await response.json();
    const finalResponse = {
      data: data
        .sort((a, b) => new Date(a.joined) - new Date(b.joined))
        .map(({
          name,
          github: username,
          image,
          countryCode,
          teamIds,
        }, key) => ({
          type: 'contributor',
          id: key,
          attributes: {
            username,
            name,
            image,
            countryCode,
          },
          relationships: {
            contributionArea: {
              links: {
                self: `/contributors/${key}/relationships/contribution-areas`,
                related: `/contributors/${key}/contribution-areas`,
              },
              data: teamIds.map(team => ({
                type: 'contribution_area',
                id: team,
              })),
            },
          },
        })),
      included: [
        { type: 'contribution-area', id: '1', attributes: { name: 'Planning' } },
        { type: 'contribution-area', id: '2', attributes: { name: 'DevOps' } },
        { type: 'contribution-area', id: '3', attributes: { name: 'Frontend' } },
        { type: 'contribution-area', id: '4', attributes: { name: 'Backend' } },
        { type: 'contribution-area', id: '5', attributes: { name: 'Testing' } },
      ],
    };
    return res.json(finalResponse);
  } catch ({ message }) {
    return res.status(400).json({ status: 400, message });
  }
};
