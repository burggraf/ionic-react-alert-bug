# ionic-react-alert-bug

This demonstrates a bug in useIonAlert in Ionic React 6.x.  This works in dev mode `ionic serve` but silently fails in production `ionic build --production`.

To reproduce:

- `npm i`
- `ionic build --production`
- `cd build`
- `http-server .`

Or use your own deployent method.
