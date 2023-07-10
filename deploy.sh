#!/bin/bash

echo $WEBSITE_HOSTNAME
echo $WEBSITE_SITE_NAME

# Generate swagger.json
rm swagger.json
npm run swagger-autogen

##################################################################################################################################
echo "Finished successfully."
