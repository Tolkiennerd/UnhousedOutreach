# Getting Started

Make sure you have all of the following on your machine:
- MySQL (or MariaDB)
- .NET SDK (v8)
- Node

Create an empty database called UnhousedOutreach and create a user with all permissions on that database.

Add the following environment variables:
- UNHOUSED_OUTREACH_DB_UID (with the username for the user created above)
- UNHOUSED_OUTREACH_DB_PWD (with the password for the user created above)

Clone the repository.

To start the API, open a terminal at the Backend folder (relative to the root of the project) and run:

`dotnet run --project Backend/UnhousedOutreach.Api`

To start the UI, open a terminal at the Frontend/unhoused-outreach-ui folder (relative to the root of the project) and run:

`npm install`
`npm start`

Pull up the site on http://localhost:4200!
