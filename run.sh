echo "running..."

cd demo

if [ ! -d "node_modules"  ]; then
  npm install
fi
npm run dev