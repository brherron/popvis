### PopVis - React Video Promo

## install

```
npm install popvis
```

## usage

```js
import { PopVis } from 'popvis'
import VideoSource from './assets/test.mp4'

function Home() {

  return (
    <PopVis src={VideoSource} infoLink="https://beauherrondev.com" buttonText="More Info"/>
  )
}

export default Home;
```

## license

MIT. Copyright (c) [Beau Herron](https://beauherrondev.com).