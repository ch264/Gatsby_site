## Configuring single sign-on

Only an Enterprise team administrator (admin) can configure single sign-on (SSO) for a Postman team.

Go to [Team Settings](https://app.getpostman.com/dashboard/teams/edit) for an enterprise plan. In the following screen, select **Authentication**.

[![sso enable](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/SSO_Auth1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/SSO_AdminEnable1.png)

Upon selecting *Authentication*, the following screen appears:

[![sso enable](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/SSO_AdminEnable1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/SSO_AdminEnable1.png)

After configuring an SSO authentication for your Postman team, you can use the toggle option in Settings (as illustrated above) to turn on/off this SSO authentication. Click the button (circled above) to turn on/off your SSO authentication system. This is a team-level option which will enable/disable SSO for the whole team. To update the SSO settings, click **Edit**.

To configure a new authentication method, click **Add a new authentication method** button.

In the **ADD AUTHENTICATION METHOD** modal, select the authentication type. Enter an authentication name that is easily identifiable to your team. Then click the **Proceed** button.

[![authentication method](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-authentication-method-2.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ENT-add-authentication-method-2.png)

**Note**: Always check with your authentication provider dashboard or your IT support staff for the correct information to complete a modal.

   [![details](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta-IDP-Details1a.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Okta1a-IDP-Details.png)

In the "Service Provider Details (Postman)" screen, the Entity ID, and the URLs for the Login and ACS are already populated.

As a next step, you must fill in the details in the **Identity Provider Details** section. And then provide your authentication certificate from your identity provider in "X.509 Certificate".

To enter details in the **Identity Provider Details** section, you must login to your IDP account and fetch details. Refer to the corresponding section of the documentation and follow the outlined procedure there:

* [Setting up custom SAML in Okta](/docs/postman_enterprise/sso/saml_okta/)

* [Setting up custom SAML in Duo](/docs/postman_enterprise/sso/saml_duo/)

* [Setting up custom SAML in Gsuite](/docs/postman_enterprise/sso/saml_gsuite/)

* [Setting up custom SAML in Onelogin](/docs/postman_enterprise/sso/saml_onelogin/)

* [Setting up custom SAML in Ping Identity](/docs/postman_enterprise/sso/saml_ping/)

* [Setting up custom SAML in Azure AD](/docs/postman_enterprise/sso/saml_in_azure_ad/)

test sso