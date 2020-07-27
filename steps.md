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
4. Class Names package for conditional title colouring (LaunchItem.js)
5. Import React routing (App.js, LaunchItem.js)
6. Access params via props (Launch.js)
7. Build in backend by reconfiging start/package.json

# Deployment

(failed)
1. heroku create (from /backend)
2. heroku git:remote -a peaceful-wildwood-31132
3. add & commit  
4. git push heroku master