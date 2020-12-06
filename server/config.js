module.exports = {
  port: process.env.PORT || 8080,
  db: {
    prod:
      process.env.DATABASE_URL ||
      'mongodb+srv://admin:RYGvAr1ine0kZmVf@api.4wjwu.mongodb.net/stack-overflow?retryWrites=true&w=majority',
    test:
      'mongodb+srv://admin:RYGvAr1ine0kZmVf@api.4wjwu.mongodb.net/stack-overflow?retryWrites=true&w=majority',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
