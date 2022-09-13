# apache-age-client

> nodejs client for apache age

This client was adapted from the apache age viewer.

https://github.com/apache/age-viewer

## Setup

```sh
yarn add apache-age-client
```

## Usage

```ts
import ApacheAgeClient from "apache-age-client";

(async () => {
  const client = ApacheAgeClient.connect({
    database: "some-database",
    graph: "some-graph",
    host: "localhost",
    password: "postgres",
    port: 5432,
    user: "postgres",
  });

  const result = await client.executeCypher(`
    SOME_CYPHER_QUERY
  `);

  console.log(result);
})();
```
