## node + RabbitMQ

1. RabbitMQ

```
    brew install rabbitmq
    brew services start rabbitmq

    http://localhost:15672
    id : guest
    pw : guest
```

2. RabbitMQ ManageMent Tools

```
    npm i amqplib
```

3. Todo
    - [ ] Queue가 어느정도 쌓였을때 Receiver 함수 호출