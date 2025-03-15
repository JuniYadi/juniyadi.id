---
title: "Generate Cloudflare Token for Workers: A Step-by-Step Guide"
slug: "generate-cloudflare-token-for-workers"
description: "Learn how to generate a Cloudflare token for use in Cloudflare Workers with Wrangler CLI."
date: "2025-03-16T02:01:40Z"
highlight: false
draft: false
category: "Cloudflare"
tags:
  [
    "Cloudflare",
    "API Token",
    "Wrangler",
    "Cloudflare Workers",
    "Environment Variables",
    "Troubleshooting",
  ]
cover: "/assets/images/uploads/2025/03/cloudflare-worker-generate-token.png"
author: "yadi"
---

## Introduction

In this tutorial, we will guide you through the process of generating a Cloudflare token for use in Cloudflare Workers. This token is essential for accessing the Cloudflare API using the Wrangler CLI, enabling you to deploy and manage your serverless functions efficiently.

## Prerequisites

Before you begin, ensure you have the following:

- A Cloudflare account
- Wrangler CLI installed on your system
- Basic knowledge of command-line operations

## Step-by-Step Instructions

### Step 1: Create a Cloudflare API Token

- Log in to your Cloudflare account.
- At the top of the dashboard, click on your profile icon.

![Cloudflare Dashboard Profile](/assets/images/uploads/2025/03/cloudflare-token/1.png)

- Select **Apperance** from the dropdown menu.

![Cloudflare Dashboard Billing](/assets/images/uploads/2025/03/cloudflare-token/2.png)

- Navigate to the **API Tokens** section in the dashboard.

![Cloudflare Dashboard API Tokens](/assets/images/uploads/2025/03/cloudflare-token/3.png)

- Click on **Create Token** and select the appropriate template for Workers.

![Cloudflare Dashboard Create Token](/assets/images/uploads/2025/03/cloudflare-token/4.png)

- Select template **Edit Cloudflare Workers**. This template provides the necessary permissions for deploying and managing Cloudflare Workers.

![Cloudflare Dashboard Edit Cloudflare Workers](/assets/images/uploads/2025/03/cloudflare-token/5.png)

- At menu **Account Resources**, select **All Account Resources**. This option grants the token full access to all resources in your Cloudflare account, or you can choose specific resources based on your requirements.

![Cloudflare Dashboard All Account Resources](/assets/images/uploads/2025/03/cloudflare-token/6.png)

- At menu **Zone Resources**, select **All Zone Resources**. If you have specific zones you want to grant access to, you can choose them here, or you can select **All Zone Resources** to grant access to all zones.

![Cloudflare Dashboard All Zone Resources](/assets/images/uploads/2025/03/cloudflare-token/7.png)

- Click on the **Continue to Summary** button. We skip the **IP Firewall** and **WAF** sections for this tutorial. But, if you consider them necessary, you can configure them accordingly.

![Cloudflare Dashboard Summary](/assets/images/uploads/2025/03/cloudflare-token/8.png)

- Review the token settings and click on the **Create Token** button.

![Cloudflare Dashboard Create Token](/assets/images/uploads/2025/03/cloudflare-token/9.png)

- Copy the generated token and save it in a secure location. You will need this token to deploy your Cloudflare Workers.

![Cloudflare Dashboard Copy Token](/assets/images/uploads/2025/03/cloudflare-token/10.png)

### Step 2: Configure Wrangler

- Install Wrangler CLI if not already installed

```bash
npm install -g @cloudflare/wrangler
```

2. Set up your project with Wrangler

```bash
wrangler init my-worker
```

3. Add the token to your environment variables:
   - Create a **.env** file in your project directory.
   - Add **CLOUDFLARE_API_TOKEN=your_token** to the file.

### Step 3: Deploy Your Worker

1. Use the command **wrangler publish** to deploy your worker.
2. Verify the deployment in the Cloudflare dashboard.

## Common Issues and Fixes

### Issue 1: Token Not Recognized

- **Fix:** Ensure the token is correctly set in the **.env** file and that the file is in the project root.

### Issue 2: Incorrect Permissions

- **Fix:** Revisit the token settings in the Cloudflare dashboard and ensure all necessary permissions are granted.

## Analysis Techniques

- Use **wrangler tail** to view logs and debug issues.
- Check the token's permissions in the Cloudflare dashboard to ensure they match your needs.

## Conclusion

By following this tutorial, you should now have a Cloudflare token set up and ready to use with your Cloudflare Workers. This setup allows you to manage your serverless functions efficiently and securely.

## Additional Resources

- [Cloudflare API Tokens](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
