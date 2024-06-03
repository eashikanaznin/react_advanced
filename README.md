# uselayouteffect

It allows synchronizing with the browser layout before paint. This is useful for measuring DOM nodes/sizes or integrating with non-React DOM libraries.

Disadvantages
useLayoutEffect is synchronous, meaning that it blocks the browser from painting the DOM until it has finished executing. This can lead to performance problems if you use it too often or for expensive operations
