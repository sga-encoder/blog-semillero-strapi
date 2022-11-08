module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-80.railway.app'),
      port: env.int('PGPORT', 5904),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'rypk7wLdDN0AWpYon06x'),
      ssl: env.bool(true),
    },
  },
});
