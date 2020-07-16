## Steps

# Backend

1. Single middleare with one endpoint: /graphql (server.js)
2. Create schema (schema.js)
3. Create root query (schema.js)
- Essentially endpoints with resolvers to resolve data
- GraphQLList if returning multiple objects
- Call with axios

# Frontend

1. Import Bootswatch presets for Bootstrap (App.js)
2. New Apollo client (App.js)
3. Wrap app in Apollo Provider and pass in data (App.js)
