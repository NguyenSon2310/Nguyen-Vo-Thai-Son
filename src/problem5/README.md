# CRUD Server

This project is a backend API built using **Express**, **Prisma 3.13**, and **TypeScript**. It demonstrates how to structure an Express application with routes, services, and repositories, while using Prisma for data persistence.

## Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (Node Package Manager)
- **Prisma** (for database management)

## Getting Started

Follow the instructions below to set up and run the application.

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

This will install all the required dependencies, including:

<ul>
    <li><strong>Express</strong>: Web framework for building the API.</li>
    <li><strong>Prisma</strong>: ORM for database interaction.</li>
    <li><strong>TypeScript</strong>: For type-safe code.</li>
</ul>

### 3. Set Up the Database

<ol>
  <li><strong>Prisma Configuration:</strong></li>
  Ensure that your Prisma schema is set up. By default, the application uses <strong>SQLite</strong> for simplicity. The Prisma schema file is located in <code>prisma/schema.prisma</code>.

  <li><strong>Generate Prisma Client:</strong></li>
  After configuring the Prisma schema, run the following command to generate Prisma Client:
  
```bash
npm run prisma:generate
```

<li><strong>Run Migrations:</strong></li>
To create the necessary database tables, run:

```bash
npm run prisma:migrate
```

This will apply the migration and create the database (<code>dev.db</code>) in the <code>prisma</code> folder.

</ol>

### 4. TypeScript Configuration

The project uses <strong>TypeScript</strong> for type-safety and modern JavaScript features. TypeScript settings are defined in the <code>tsconfig.json</code> file.

<ul>
    <li><strong>Source files</strong> are located in the <code>src/</code> folder.</li>
    <li><strong>Compiled JavaScript files</strong> are output to the <code>dist/</code> folder.</li>
</ul>

### 5. Running the Application

You can run the application in development mode with the following command:

```bash
npm run dev
```

This will use ts-node-dev to watch for file changes and restart the server automatically.

### 6. Building the Project

To build the project and compile the TypeScript files to JavaScript, use:

```bash
npm run build
```

This will compile the <code>.ts</code> files in the <code>src</code> folder and output <code>.js</code> files to the <code>dist</code> folder.

### 7. Running the Built Application

Once the application is built, you can start the compiled application with:

```bash
npm start
```

This will run the compiled JavaScript files from the <code>dist</code> folder.

### 8. Prisma Commands

You can use the following Prisma commands:

<ul>
<li><strong>Generate Prisma Client:</strong></li>

```bash
npm run prisma:generate
```

<li><strong>Run Migrations:</strong></li>

```bash
npm run prisma:migrate
```

</ul>

## Project Structure

The project is organized into the following structure:

```plaintext
src/
├── app.ts                      # Main entry point for the Express app
├── routes/                     # HTTP route definitions
│   └── resourceRoutes.ts       # Resource-related routes
├── services/                   # Business logic (service layer)
│   └── resourceService.ts      # Resource service
├── repositories/               # Database interaction (repository layer)
│   └── resourceRepository.ts   # Resource repository (Prisma integration)
prisma/
├── schema.prisma               # Prisma schema definition
├── dev.db                      # SQLite database file
tsconfig.json                   # TypeScript configuration
package.json                    # Project dependencies and scripts
```

### Routes

<ul>
    <li><strong>POST</strong> <code>/api/resources</code>: Create a resource.</li>
    <li><strong>GET</strong> <code>/api/resources</code>: List resources with optional query filters (<code>name</code>, <code>description</code>).</li>
    <li><strong>GET</strong> <code>/api/resources/:id</code>: Get a specific resource by ID.</li>
    <li><strong>PUT</strong> <code>/api/resources/:id</code>: Update a resource by ID.</li>
    <li><strong>DELETE</strong> <code>/api/resources/:id</code>: Delete a resource by ID.</li>
</ul>

## Scripts

### Development

<ul>
    <li><code>npm run dev</code>: Run the development server using <code>ts-node-dev</code>. Automatically restarts the server on file changes.</li>
</ul>

### Build & Start

<ul>
    <li><code>npm run build</code>: Compile TypeScript to JavaScript in the <code>dist/</code> directory.</li>
    <li><code>npm start</code>: Run the compiled application from the <code>dist/</code> folder.</li>
</ul>

### Prisma Commands

<ul>
    <li><code>npm run prisma:generate</code>: Generate the Prisma client.</li>
    <li><code>npm run prisma:migrate</code>: Apply database migrations.</li>
</ul>

## Example API Requests

### Create Resource (POST)

#### Request:

```bash
POST /api/resources
Content-Type: application/json

{
  "name": "Resource 1",
  "description": "Description for Resource 1"
}
```

#### Response:

```json
{
  "id": 1,
  "name": "Resource 1",
  "description": "Description for Resource 1"
}
```

### List Resources (GET)

#### Request:

```bash
GET /api/resources?name=Resource&description=Description
```

#### Response:

```json
[
  {
    "id": 1,
    "name": "Resource 1",
    "description": "Description for Resource 1"
  }
]
```

### Get Resource (GET by ID)

#### Request:

```bash
GET /api/resources/1
```

#### Request:

```json
{
  "id": 1,
  "name": "Resource 1",
  "description": "Description for Resource 1"
}
```

### Update Resource (PUT)

#### Request:

```bash
PUT /api/resources/1
Content-Type: application/json

{
  "name": "Updated Resource",
  "description": "Updated Description"
}
```

#### Response:

```json
{
  "id": 1,
  "name": "Updated Resource",
  "description": "Updated Description"
}
```

### Delete Resource (DELETE)

#### Request:

```bash
DELETE /api/resources/1
```

#### Response:

```json
{
  "message": "Resource deleted successfully"
}
```

## Conclusion

<p>This setup provides a robust and scalable foundation for building RESTful APIs with <strong>Express</strong>, <strong>Prisma</strong>, and <strong>TypeScript</strong>. You can extend this structure by adding more routes, services, and features as needed.<p>
