#!/bin/sh

mkdir -p js

cp node_modules/bootstrap/dist/js/bootstrap.min.* js/
cp node_modules/jquery/dist/jquery.min.* js/
cp node_modules/tether/dist/js/tether.min.* js/

echo "Built!"
