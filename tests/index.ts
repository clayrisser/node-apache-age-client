/**
 * File: /tests/index.ts
 * Project: apache-age-client
 * File Created: 13-09-2022 04:18:52
 * Author: Apache Software Foundation
 * -----
 * Last Modified: 13-09-2022 08:34:53
 * Modified By: Clay Risser
 * -----
 * Risser Labs LLC (c) Copyright 2022
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable max-lines-per-function */

import ApacheAgeClient from "~/index";

describe("apache-age-client", () => {
  let client: ApacheAgeClient;
  const graphName = "family_tree";

  beforeAll(async () => {
    client = await ApacheAgeClient.connect({
      database: "postgres",
      graph: graphName,
      host: "localhost",
      password: "postgres",
      port: 5432,
      user: "postgres",
    });
    try {
      await client.executeCypher(`
        SELECT * FROM ag_catalog.drop_graph('${graphName}', true);
      `);
    } catch (err) {}
  });

  it("should connect to database", async () => {
    expect(client.isConnected()).toEqual(true);
  });

  it("should create a graph", async () => {
    expect(
      (
        await client.executeCypher(`
        SELECT * FROM ag_catalog.create_graph('${graphName}');
      `)
      ).rows
    ).toEqual([{ create_graph: "" }]);
  });

  it("should create vertices", async () => {
    expect(
      (
        await client.executeCypher(`
        SELECT *
        FROM cypher('${graphName}', $$
            CREATE (:Person {name: 'George VI', birth: 1895, death: 1952})
        $$) as (v agtype);
      `)
      ).rows
    ).toEqual([]);
    expect(
      (
        await client.executeCypher(`
        SELECT *
        FROM cypher('${graphName}', $$
            CREATE (:Person {name: 'Elizabeth II', birth: 1926, death: 2022})
        $$) as (v agtype);
      `)
      ).rows
    ).toEqual([]);
    expect(
      (
        await client.executeCypher(`
        SELECT *
        FROM cypher('${graphName}', $$
            CREATE (:Person {name: 'Margaret', birth: 1930, death: 2002})
        $$) as (v agtype);
      `)
      ).rows
    ).toEqual([]);
  });

  it("should create edges", async () => {
    expect(
      JSON.parse(
        (
          await client.executeCypher(`
            SELECT *
            FROM cypher('${graphName}', $$
              MATCH (a:Person), (b:Person), (c:Person)
              WHERE a.name = 'George VI' AND b.name = 'Elizabeth II' AND c.name = 'Margaret'
              CREATE (a)-[e:FATHER]->(b)
              CREATE (a)-[f:FATHER]->(c)
              CREATE (b)-[g:DAUGHTER]->(a)
              CREATE (c)-[h:DAUGHTER]->(a)
              RETURN e
            $$) as (e agtype);
          `)
        ).rows[0].e.split("::edge")[0]
      ).label
    ).toEqual("FATHER");
    expect(
      JSON.parse(
        (
          await client.executeCypher(`
            SELECT *
            FROM cypher('${graphName}', $$
              MATCH (a:Person), (b:Person)
              WHERE a.name = 'Elizabeth II' AND b.name = 'Margaret'
              CREATE (a)-[e:SISTER]->(b)
              CREATE (b)-[f:SISTER]->(a)
              RETURN e
            $$) as (e agtype);
          `)
        ).rows[0].e.split("::edge")[0]
      ).label
    ).toEqual("SISTER");
  });
});

export default null;
