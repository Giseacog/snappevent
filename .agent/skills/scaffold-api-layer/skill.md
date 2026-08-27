---
name: scaffold-api-layer
description: Use when creating a new service, hook, query, mutation, or mapper for a database entity.
---

# Context

Strict 5-layer architecture in `src/api/`. Components only interact with hooks. Data flows: DB -> sql.sql -> mappers -> services -> queries/mutations -> hooks -> components.

# Execution Steps

When asked to create API layers for an `<entity>`:

1. **READ `sql.sql`**: MUST analyze the DB schema, table definitions, and column types for the `<entity>` before writing any code.
2. **Generate `src/api/mappers/<entity>.ts`**: Create DTOs. Transform SQL syntax (snake_case/types) to JS conventions (camelCase).
3. **Generate `src/api/services/<entity>.ts`**: Write fetch/API call logic. MUST use mappers to parse requests/responses.
4. **Generate `src/api/queries/<entity>.ts` & `src/api/mutations/<entity>.ts`**: Write data fetching logic (e.g., React Query). MUST import from `services/`.
5. **Generate `src/api/hooks/<entity>.ts`**: Write the facade hook for UI components. MUST import from `queries/` and `mutations/`.

# Constraints

- Omit conversational filler. Output file paths and code directly.
- ZERO deviation from the folder structure.
- Always infer data types directly from `sql.sql`.
