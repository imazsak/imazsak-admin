#!/bin/bash
docker run -it --rm --network=host -v $(pwd)/nginx/dev.conf:/etc/nginx/conf.d/default.conf nginx
