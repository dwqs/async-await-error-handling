# async-await-error-handling

Error handling friendly for async/await in ts and js.

# Installation
Install the pkg with npm:

```
npm install async-await-error-handling --save
```

or yarn

```
yarn add async-await-error-handling
```

or bower

```
bower install async-await-error-handling
```

# Usage

```
import awaitTo from 'async-await-error-handling';

async getData() {
    const [err, data] = await awaitTo(fetch('./data/person2.json'));
    
    if(err){
        throw err;
    }

    return data;
}
```

# LICENSE
MIT
