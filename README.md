AWS Free Tier Monitor API

This is a simple Node.js microservice that monitors AWS Free Tier usage using the AWS CLI.
It exposes a single API endpoint that returns the current usage and can be extended to run on a schedule (cron job) with alerting via Amazon SNS when thresholds are crossed.

Features

API Endpoint /freetier: Returns AWS Free Tier usage data in JSON format.

Uses the AWS CLI command aws freetier get-free-tier-usage behind the scenes.

Can be extended with a cron job to automatically check usage every hour.

Supports alerting via Amazon SNS when usage crosses a defined threshold (e.g., 75% of Free Tier limit).