#!/bin/bash

cyclonedx-bom -o bom.xml --include-dev
echo "Generating a Bill  Of Materials here"
cat > payload.json <<__HERE__
{
  "projectName":"c-updates react",
  "projectVersion":"1.1" ,
  "bom": "$(cat bom.xml |base64 -)"
}
__HERE__

curl -X "PUT" http://19f8754685e8.ngrok.io/api/v1/bom \
     -H 'Content-Type: application/json' \
     -H 'X-API-Key: smbJt0FTNzDTxB8jKXWeJODniwZAHE6w' \
     -d @payload.json

echo "Done Completed tracking"