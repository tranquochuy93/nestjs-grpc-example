# nestjs-grpc-example

## Start subscription microservice
```bash
cd subscription-mmicroservice

npm run start:dev
```

## Start client
```bash
cd client

npm run start:dev
```

## Curl
```bash
curl --location 'localhost:4001/subscriber'

curl --location 'localhost:4001/subscriber' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": {
        "name": "Name",
        "email": "email@dgmail.one"
    }
}'
```
