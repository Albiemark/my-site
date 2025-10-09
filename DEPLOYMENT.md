# Deployment Documentation: digital-farm.biz

This document outlines the deployment and configuration of the `digital-farm.biz` website on Google Cloud Platform.

## 1. Infrastructure Overview

-   **Provider:** Google Cloud Platform (GCP)
-   **Service:** Compute Engine
-   **Instance Name:** `digital-farm-server`
-   **Zone:** `us-central1-a`
-   **Machine Type:** `e2-small`
-   **Static IP Address:** `34.61.110.144`

## 2. Domain and DNS

-   **Domain:** `digital-farm.biz` (and `www.digital-farm.biz`)
-   **DNS Configuration:** The domain's `A` record is configured to point to the static IP address `34.61.110.144`.

## 3. Server Configuration

### Application

-   **Runtime:** Node.js (v20.x)
-   **Framework:** Next.js
-   **Application Start Command:** `npm start`
-   The application runs on `http://localhost:3000`.

### Web Server

-   **Software:** Nginx
-   **Role:** Reverse Proxy
-   **Configuration:** Nginx is configured to listen on ports 80 and 443. It proxies requests to the Node.js application running on port 3000.
-   **Nginx Config File:** `/etc/nginx/sites-available/digital-farm.biz`

### HTTPS/SSL

-   **SSL Provider:** Let's Encrypt
-   **Management Tool:** Certbot
-   **Certificate:** A valid SSL certificate is installed for `digital-farm.biz` and `www.digital-farm.biz`.
-   **Auto-renewal:** Certbot is configured to automatically renew the certificate before it expires.
-   **Redirection:** All HTTP traffic is automatically redirected to HTTPS.

## 4. Deployment Verification

The website is live and accessible at **[https://digital-farm.biz](https://digital-farm.biz)**.

## 5. Rollback Procedure

To revert the Nginx and SSL configuration:

1.  **Disable the Nginx site:**
    ```bash
    gcloud compute ssh digital-farm-server --zone=us-central1-a --command="sudo rm /etc/nginx/sites-enabled/digital-farm.biz"
    ```
2.  **Restart Nginx:**
    ```bash
    gcloud compute ssh digital-farm-server --zone=us-central1-a --command="sudo systemctl restart nginx"
    ```
3.  **(Optional) Delete the SSL certificate:**
    ```bash
    gcloud compute ssh digital-farm-server --zone=us-central1-a --command="sudo certbot delete --cert-name digital-farm.biz"