export const environment = {
	production: false,
	config: {
		tenant: 'e5fdda35-35be-4b50-acb8-af197abff5ff',
		clientId: 'e62ab7a6-fbb1-4783-b0e1-9b27006da2ef', //=> Application ID in Azure
		cacheLocation: 'localStorage',
		endpoints: {
			graphApiUri: 'https://graph.microsoft.com',
			sharePointUri: 'https://fstrahl.sharepoint.com' // Replace with your Tenant
		},
		returnUrl: 'http://localhost:4200'
	}
};
