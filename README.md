Automatic building with Grunt
==========

### Includes:

1. JSLint
2. Testing with Buster
3. Front-end building with RequireJS + RequireCSS

### Installation

1. Install `node`
2. Checkout project:

        git clone git://github.com/nkbt/build.git build
        cd build

3. Install dependencies:

        npm install
        
4. Run linter and perform tests:

        npm test

5. Build assets:

        npm run-script build

6. Run app ind `dev` (default, serves all assets from ./public) or `prod` (serves all assets from ./build):

        node app <dev|prod>

7. Go to [http://localhost:3000](http://localhost:3000)


### Dev version

All files are loaded dynamically from dev host.

![dev](https://raw.github.com/nkbt/build/master/doc/dev.png "Dev environment")


### Prod version

All local files are built into single prod.js, 3rd-party libs are loaded from CDN.

![prod](https://raw.github.com/nkbt/build/master/doc/prod.png "Prod environment")

