# Scaler Assignment - Building a Route53 Clone by Mehar Walia


## Introduction

This is my attempt at cloning the AWS Route53 UI and backend for Scaler AI Lab's assignment.

The project is implements CRUD APIs for the Hosted Zones and DNS Records functionalities along with Login and Logout capability.
The UI for the project is developed to closely resemble the AWS UI itself.

## Tech Stack

Frontend - Next.JS (Typescript) with Tailwind
Backend - FastAPI
DB - SQLite
Hosting - Vercel for UI, AWS for FastAPI + SQLite

## Features 

| Feature | Implemented in API | Implemented in UI |
| --- | --- | --- |
| Login (account ID, username, password) | ✅ | ✅ |
| Logout | ✅ | ✅ |
| List hosted zones | ✅ | ✅ |
| Search hosted zones | ✅ (`key:value`, exact match) | Partial - Name search only |
| Create hosted zone | ✅ | ✅ |
| Edit hosted zone | ✅ | ❌ (button not wired) |
| Delete hosted zone | ✅ | ✅ |
| View hosted zone details | ✅ | ❌ |
| List DNS records in a hosted zone | ✅ | ❌ |
| Get a single DNS record | ✅ | ❌ |
| Create DNS record | ✅ | ❌ |
| Edit DNS record | ✅ | ❌ |
| Delete DNS record | ✅ | ❌ |
| DNS record validation (name, type, TTL, routing policy) | ✅ | ❌ |
| Pagination (`offset`, `limit`) | ✅ | ❌ |
| Per-account data isolation | ✅ | N/A |
| Redirect to login when not authenticated | ✅ (401) | ✅ |

## Mock Data
Two users are available in the DB on start to allow viewers to test the product.

| Account ID | Username | Password | Hosted zone | DNS records |
| --- | --- | --- | --- | --- |
| 12345 | johndoe | password | johndoe.com | `A` johndoe.com -> 192.0.2.10, `CNAME` www.johndoe.com -> johndoe.com |
| 56789 | janedoe | password | janedoe.com | `A` janedoe.com -> 192.0.2.09, `CNAME` www.janedoe.com -> janedoe.com |

