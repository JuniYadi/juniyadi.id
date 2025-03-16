---
title: "Setting Up AWS CLI and eksctl on Linux or MacOS"
slug: "setting-up-aws-cli-and-eksctl-on-linux-macos"
description: "A comprehensive guide to installing and configuring AWS CLI and eksctl on Linux and MacOS systems for managing AWS services and EKS clusters"
date: "2025-03-16T09:01:08Z"
highlight: false
draft: true
category: "AWS"
tags: ["AWS CLI", "eksctl", "EKS", "DevOps"]
cover: "/draft.png"
author: "yadi"
---

## Introduction

Managing AWS resources efficiently requires the right tools. The AWS Command Line Interface (AWS CLI) and eksctl are two essential tools for anyone working with AWS services, especially Amazon EKS (Elastic Kubernetes Service). 

AWS CLI provides a unified command-line interface to interact with AWS services, allowing you to control multiple AWS services directly from the terminal instead of using the AWS Management Console. Meanwhile, eksctl is a simple CLI tool specifically designed for creating and managing Kubernetes clusters on Amazon EKS.

In this tutorial, I'll walk you through the installation and setup process for both tools on Linux and MacOS systems. By the end, you'll have a fully functional environment for managing your AWS resources and EKS clusters from the command line.


## Prerequisites

Before we begin, make sure you have:

1. **An AWS account** - You'll need an active AWS account with appropriate permissions to use AWS services.

2. **Access credentials** - You should have your AWS access key ID and secret access key ready. If you don't have these yet, you can create them in the AWS Management Console under IAM → Users → Security credentials.

3. **Terminal access** - You'll need access to a terminal on your Linux or MacOS system.

4. **Sudo privileges** - Some installation methods require sudo access to install packages system-wide.

5. **Basic command-line knowledge** - Familiarity with basic terminal commands will be helpful.


## Installing AWS CLI

The AWS CLI is available in version 1 and version 2. In this tutorial, we'll focus on AWS CLI version 2, which is the latest major version with improved features and performance.

### Installing AWS CLI on Linux

There are multiple ways to install AWS CLI on Linux. I'll cover the most straightforward method using the bundled installer.

#### Method 1: Using the bundled installer (recommended)

1. Download the installation package:

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
```

2. Unzip the installer:

```bash
unzip awscliv2.zip
```

3. Run the install program:

```bash
sudo ./aws/install
```

4. Verify the installation:

```bash
aws --version
```

You should see output similar to:

```
aws-cli/2.19.1 Python/3.11.6 Linux/5.10.205-195.807.amzn2.x86_64 botocore/2.4.5
```

#### For ARM-based Linux systems

If you're using an ARM-based system, use the ARM package instead:

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

#### Method 2: Using Snap (Ubuntu and other Snap-supported distributions)

If your Linux distribution supports Snap, you can install AWS CLI using:

```bash
sudo snap install aws-cli --classic
```

### Installing AWS CLI on MacOS

For MacOS, you have two main options for installation.

#### Method 1: Using the GUI installer

1. Download the macOS pkg installer from: https://awscli.amazonaws.com/AWSCLIV2.pkg

2. Double-click the downloaded file to launch the installer.

3. Follow the on-screen instructions to complete the installation.

4. Verify the installation by opening Terminal and running:

```bash
aws --version
```

#### Method 2: Using the command line

1. Download the installer:

```bash
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
```

2. Run the installer:

```bash
sudo installer -pkg AWSCLIV2.pkg -target /
```

3. Verify the installation:

```bash
aws --version
```


## Installing eksctl

Now that we have AWS CLI installed, let's install eksctl, which will help us create and manage EKS clusters.

### Installing eksctl on Linux

1. Download and extract the latest release:

```bash
# For AMD64 / x86_64
curl --silent --location "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp

# For ARM64
# curl --silent --location "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_$(uname -s)_arm64.tar.gz" | tar xz -C /tmp
```

2. Move the extracted binary to /usr/local/bin:

```bash
sudo mv /tmp/eksctl /usr/local/bin
```

3. Verify the installation:

```bash
eksctl version
```

### Installing eksctl on MacOS

You can install eksctl on MacOS using the same method as Linux:

```bash
# For Intel Macs
curl --silent --location "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_Darwin_amd64.tar.gz" | tar xz -C /tmp

# For M1/M2 Macs
# curl --silent --location "https://github.com/eksctl-io/eksctl/releases/latest/download/eksctl_Darwin_arm64.tar.gz" | tar xz -C /tmp

sudo mv /tmp/eksctl /usr/local/bin
```

Alternatively, you can use Homebrew (though this is a third-party method):

```bash
brew tap weaveworks/tap
brew install weaveworks/tap/eksctl
```

Verify the installation:

```bash
eksctl version
```


## Configuring AWS CLI

After installing AWS CLI, you need to configure it with your AWS credentials before you can use it.

### Basic Configuration

1. Run the configuration command:

```bash
aws configure
```

2. Enter your AWS access key ID and secret access key when prompted:

```
AWS Access Key ID [None]: YOUR_ACCESS_KEY_ID
AWS Secret Access Key [None]: YOUR_SECRET_ACCESS_KEY
Default region name [None]: us-west-2
Default output format [None]: json
```

Replace `YOUR_ACCESS_KEY_ID` and `YOUR_SECRET_ACCESS_KEY` with your actual credentials. For the region, choose the AWS region you primarily work with (e.g., us-east-1, eu-west-1).

### Using Named Profiles

If you work with multiple AWS accounts, you can set up named profiles:

```bash
aws configure --profile project1
```

Then, when using AWS CLI commands, specify the profile:

```bash
aws s3 ls --profile project1
```

### Verifying Configuration

To verify your configuration is working correctly, run a simple AWS CLI command:

```bash
aws sts get-caller-identity
```

This should return your AWS account ID, user ID, and ARN, confirming that your credentials are valid.


## Testing Your Setup

Let's verify that both tools are working correctly.

### Testing AWS CLI

Run a simple command to list your S3 buckets:

```bash
aws s3 ls
```

If you have any S3 buckets in your account, they will be listed. If not, you'll see an empty response, but no errors.

### Testing eksctl

Check if eksctl can communicate with AWS:

```bash
eksctl get clusters
```

If you don't have any EKS clusters yet, you'll see a message like "No clusters found", but the command should execute without errors.


## Common Issues and Fixes

### AWS CLI Issues

1. **Command not found after installation**

   If you see "aws: command not found" after installation, the AWS CLI executable might not be in your PATH.

   **Fix**: Add the installation directory to your PATH or create a symbolic link:
   
   ```bash
   sudo ln -s /usr/local/aws-cli/v2/current/bin/aws /usr/local/bin/aws
   ```

2. **Permission denied during installation**

   **Fix**: Make sure you're using sudo for installation steps that require it:
   
   ```bash
   sudo ./aws/install
   ```

3. **Configuration errors**

   If you see "Unable to locate credentials", your AWS CLI isn't configured correctly.

   **Fix**: Run `aws configure` again and ensure you're entering the correct credentials.

### eksctl Issues

1. **eksctl not found after installation**

   **Fix**: Verify the binary is in a directory in your PATH:
   
   ```bash
   which eksctl
   ```
   
   If not found, move it to a directory in your PATH:
   
   ```bash
   sudo mv eksctl /usr/local/bin/
   ```

2. **Permission issues with eksctl**

   **Fix**: Ensure the binary is executable:
   
   ```bash
   sudo chmod +x /usr/local/bin/eksctl
   ```

3. **Authentication errors with AWS**

   If eksctl can't authenticate with AWS, verify your AWS CLI configuration is correct:
   
   ```bash
   aws sts get-caller-identity
   ```


## Analysis Techniques

When troubleshooting issues with AWS CLI or eksctl, consider these analysis techniques:

### 1. Check Version Information

Always verify you're running the expected version:

```bash
aws --version
eksctl version
```

This helps identify if you need to update to a newer version.

### 2. Examine AWS CLI Configuration

Inspect your AWS configuration files:

```bash
cat ~/.aws/config
cat ~/.aws/credentials
```

Make sure your credentials are correct and the region is properly set.

### 3. Enable Debug Mode

For AWS CLI, you can enable debug output:

```bash
aws s3 ls --debug
```

For eksctl, use the verbose flag:

```bash
eksctl get clusters --verbose=4
```

### 4. Check System Requirements

Ensure your system meets the minimum requirements for both tools. AWS CLI v2 requires:
- Linux: glibc 2.17 or later
- macOS: 10.15 or later

### 5. Verify Network Connectivity

Make sure you can reach AWS endpoints:

```bash
ping amazonaws.com
```

If you're behind a corporate firewall or proxy, you may need additional configuration.


## Conclusion

You've successfully installed and configured AWS CLI and eksctl on your Linux or MacOS system. These powerful tools will help you manage AWS resources and EKS clusters efficiently from the command line.

With AWS CLI, you can interact with virtually any AWS service, automate routine tasks, and integrate AWS operations into your scripts and workflows. With eksctl, you can create, manage, and delete EKS clusters with simple commands, making Kubernetes on AWS more accessible.

As you become more familiar with these tools, you'll discover additional features and capabilities that can further enhance your AWS workflow.


## Additional Resources

- [AWS CLI Official Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
- [eksctl Documentation](https://eksctl.io/)
- [Amazon EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [AWS CLI Environment Variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html)
- [eksctl Example Configurations](https://github.com/eksctl-io/eksctl/tree/main/examples)

Remember that both tools are regularly updated with new features and improvements. Stay current by periodically checking for updates and reviewing the release notes for new capabilities that might benefit your workflow.
