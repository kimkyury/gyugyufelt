# Environment Setup

## Database (PostgreSQL) Setup

1. Navigate to the `./Environment` directory.
2. Run the following command in your terminal:

   ```bash
   docker compose -f docker-compose-dev.yml up -d
    ```

## Accessing Swagger UI

1. Start the Server

```bash
./gradlew bootRun
```

2. Open your browser and go to:

```bash
http://localhost:8080/swagger-ui.html

```
