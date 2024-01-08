module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: 'my-list',
          id: "cad62ecd-71e3-4d82-873d-4ec1514e475b",
          buildHook: "https://api.netlify.com/build_hooks/659bdd472f4c4e4724e1aaa5",
          branch: 'main' // optional
        }
      ]
    },
  },
});


