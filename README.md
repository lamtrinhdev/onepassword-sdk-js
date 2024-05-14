<p align="center">
  <a href="https://1password.com">
      <h1 align="center">1Password JavaScript SDK (beta)</h1>
  </a>
</p>

<p align="center">
 <h4 align="center"> ❗ The 1Password SDK project is in beta. Future iterations may bring backwards-incompatible changes.</h4>
</p>

<p align="center">
   <a href="https://github.com/1Password/onepassword-sdk-js/tree/main/examples">Examples</a>
<br/>

---

The 1Password JavaScript SDK offers programmatic access to your secrets in 1Password with JavaScript. The SDK currently supports `Node.js`. During the beta, you can create, retrieve, update, and delete items and resolve secret references.

## 🔑 Authentication

1Password SDKs support authentication with [1Password Service Accounts](https://developer.1password.com/docs/service-accounts/get-started/). You can create service accounts if you're an owner or administrator on your team. Otherwise, ask your administrator for a service account token.

Before you get started, [create a service account](https://developer.1password.com/docs/service-accounts/get-started/#create-a-service-account) and give it the appropriate permissions in the vaults where the items you want to use with the SDK are saved.

## ❗ Limitations

1Password SDKs currently only support operations on text and concealed fields. If you update or delete an item that has information saved in other field types, that information will be permanently lost.

1Password SDKs don't yet support using secret references with query parameters, so you can't retrieve file attachments or SSH keys, or get more information about field metadata.

When managing items with 1Password SDKs, you must use unique identifiers (IDs) in place of vault, item, and field names.

## 🚀 Get started

To use the 1Password JavaScript SDK in your project:

1. Provision your [service account](#authentication) token. We recommend provisioning your token from the environment. For example, to export your token to the `OP_SERVICE_ACCOUNT_TOKEN` environment variable:

   **macOS or Linux**

   ```bash
   export OP_SERVICE_ACCOUNT_TOKEN=<your-service-account-token>
   ```

   **Windows**

   ```powershell
   $Env:OP_SERVICE_ACCOUNT_TOKEN = "<your-service-account-token>"
   ```

2. Install the 1Password JavaScript SDK in your project:

   ```bash
   ## NPM
   npm install @1password/sdk@beta
   ```

   ```bash
   ## PNPM
   pnpm add @1password/sdk@beta
   ```

   ```bash
   ## Yarn
   yarn add @1password/sdk@beta
   ```

3. Use the JavaScript SDK in your project:

```js
import { createClient } from "@1password/sdk";

// Creates an authenticated client.
const client = await createClient({
  auth: process.env.OP_SERVICE_ACCOUNT_TOKEN,
  integrationName: "My 1Password Integration",
  integrationVersion: "v1.0.0",
});

// Fetches a secret.
const secret = await client.secrets.resolve("op://vault/item/field");
```

Make sure to use [secret reference URIs](https://developer.1password.com/docs/cli/secrets-reference-syntax/) with the syntax `op://vault/item/field` to securely load secrets from 1Password into your code.

Inside `createClient()`, set `integrationName` to the name of your application and `integrationVersion` to the version of your application.
