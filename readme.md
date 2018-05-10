Webpack Boilerplate
====================

## Commands

Run Node server and start watching srs files with webpack

```bash
    npm run start
```

Build with dev config

```bash
    npm run dev
```

Build with prod config

```bash
    npm run build
```

## Command Line Configuration

Configuration is supported by parameter before `npm run` command

Supported configurations properties:

| Property           | Description |
|--------------------|-------------|
| version        | Version of bundle build |
| name           | Name of bundle |
| dest           | Output path |

Example

```bash
version=1.2.3 name=bundle npm run build
```
