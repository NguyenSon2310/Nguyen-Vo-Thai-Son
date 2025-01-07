# Scoreboard API Module Specification

## Overview

This document specifies the API service module for managing a live scoreboard. The module provides secure endpoints to update, fetch, and broadcast user scores in real-time.

## Features

1. **Update Scores**: API endpoint to update user scores securely.
2. **Fetch Top Scores**: API endpoint to fetch the top 10 scores.
3. **Real-Time Updates**: Real-time broadcasting of scoreboard updates to all connected clients.
4. **Authentication & Authorization**: Mechanisms to validate API requests and ensure only authorized users can update scores.

---

## Endpoints

### 1. Update User Score

- **URL**: /api/score/update
- **Method**: POST
- **Request Body**:

```json
{
  "userId": "string",
  "score": "number",
  "authToken": "string"
}
```

- **Response**:
  - **200 OK**: Score updated successfully.

```json
{
  "message": "Score updated",
  "updatedScore": "number"
}
```

- **400 Bad Request**: Invalid data.
- **401 Unauthorized**: Authentication failed.
- **Validation**:
  - userId and score must be non-empty and valid.
  - authToken must be verified.

### 2. Fetch Top Scores

- **URL**: /api/score/top
- **Method**: GET
- **Response**:
  - **200 OK**: Returns an array of the top 10 scores.

```json
    [
      {
        "userId": "string",
        "score": "number"
      },
      ...
    ]
```

### 3. Real-Time Updates

- **Protocol**: WebSocket
- **Endpoint**: /ws/scoreboard
- **Description**: Broadcasts live updates of the scoreboard to all connected clients.

---

## Security Measures

1. **Authentication**:

   - Use OAuth2 tokens or JWTs for securing endpoints.
   - Validate authToken in all update requests.

2. **Rate Limiting**:

   - Prevent excessive API calls by implementing a rate limiter.

3. **Data Validation**:

   - Ensure incoming data is sanitized and validated.

4. **WebSocket Security**:
   - Authenticate WebSocket connections using a session token.

---

## Data Model

### User Score

- **userId**: Unique identifier for the user.
- **score**: Numerical representation of the user's score.
- **timestamp**: Last updated time for the score.

---

## Execution Flow Diagram

```plaintext
                     +-------------------+
                     |    User Action    |
                     +-------------------+
                               |
                               v
                     +-------------------+
                     |   API Call to     |
                     | /api/score/update |
                     +-------------------+
                               |
                               v
               +--------------------------------+
               | Authentication & Validation    |
               +--------------------------------+
                               |
                               v
                 +-------------------------+
                 |   Update Score in DB    |
                 +-------------------------+
                               |
                               v
                 +-------------------------+
                 | Broadcast Update via    |
                 |      WebSocket          |
                 +-------------------------+
                               |
                               v
                 +-------------------------+
                 | Real-Time Update Sent   |
                 |    to Connected Clients |
                 +-------------------------+
```

---

## Suggested Improvements

1. Add an audit trail for score updates to detect anomalies.
2. Integrate caching mechanisms (e.g., Redis) for faster retrieval of the top 10 scores.
3. Implement horizontal scaling for WebSocket connections to handle a large number of clients.
